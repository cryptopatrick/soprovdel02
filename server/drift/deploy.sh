#!/usr/bin/env bash
# Skickar SO-provet till VPS:en och startar om rättningsservern.  Kör från repots rot:  server/drift/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/../.."
VPS="${VPS:-root@49.12.204.84}"
NYCKEL="${NYCKEL:-$HOME/.ssh/cp-sirius-04extra}"
SSH=(ssh -i "$NYCKEL" -o BatchMode=yes "$VPS")
"${SSH[@]}" 'mkdir -p /opt/soprovdel02/app'
rsync -az --delete --exclude node_modules --exclude svar --exclude drift -e "ssh -i $NYCKEL" \
  index.html fragor.js server "$VPS:/opt/soprovdel02/app/"
"${SSH[@]}" 'cd /opt/soprovdel02/app/server && PATH=/opt/sistaprov/node/bin:$PATH npm ci --omit=dev --silent \
  && chown -R root:soprovdel02 /opt/soprovdel01/app && chmod -R g+rX,o-rwx /opt/soprovdel01/app \
  && systemctl restart soprovdel02 && sleep 1 && systemctl is-active soprovdel01 && curl -fs 127.0.0.1:8793/status'
echo
