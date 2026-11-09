// Frågor och facit för SO-provet "Andra världskriget del 2". Använt från so/Pluggguide_SO_WW2_del2.md.
// f = facitsteg. k = nyckelordsgrupper för reservrättningen om rättningsservern inte går att nå.
const QUESTIONS = [
  { t: "Varför och hur anföll Tyskland Sovjetunionen 1941?", s: [
    { f: "Molotov–Ribbentrop-pakten hade gjort att Hitler och Stalin kommit överens om att inte anfalla varandra.", k: [["molotov", "ribbentrop", "pakt"]] },
    { f: "Trots pakten var nazismen och kommunismen ideologiska fiender.", k: [["ideologiska", "fiender", "ideologi", "motsatta"]] },
    { f: "Hitler ville erövra mer mark österut och utöka det tyska territoriet.", k: [["mark", "territori", "osterut", "osterlen", "ut", "utoka", "expansion"]] },
    { f: "I juni 1941 anföll Tyskland och dess bundsförvanter Sovjetunionen i en överraskningsattack.", k: [["juni 1941", "anfoll", "overraske"]] },
    { f: "Anfallet kallades Operation Barbarossa och sträckte sig från Finland till Svarta havet.", k: [["barbarossa", "operation", "finland", "svarta havet"]] },
  ]},
  { t: "Hur gick Finland in i kriget 1941?", s: [
    { f: "Finland ville ta tillbaka områden som förlorats under vinterkriget.", k: [["tillbaka", "forlorade", "vinterkriget", "mark"]] },
    { f: "När Tyskland anföll Sovjetunionen såg Finland en möjlighet att återta förlorad mark.", k: [["moglig", "ater", "aterta", "anfall sovjet"]] },
    { f: "Finland gick in i kriget mot Sovjetunionen på Tysklands sida.", k: [["finland"], ["gick in", "med", "sida", "tysk"]] },
    { f: "Finland blev Tysklands medkrigförande men ville inte formellt bli del av axelmakterna.", k: [["medkrigforande"]] },
    { f: "Kriget kallades fortsättningskriget eftersom finländarna såg det som en fortsättning på vinterkriget.", k: [["fortsattningskrig"]] },
  ]},
  { t: "Vad gjorde Japan 1941?", s: [
    { f: "Japan ville bygga ett stort asiatiskt imperium.", k: [["imperium", "asiatiskt"]] },
    { f: "I juli 1941 tog japan över den franska kolonin Indokina (dagens Vietnam, Laos och Kambodja).", k: [["juli 1941", "indokina", "vietnam", "laos", "kambodja"]] },
    { f: "Den 7 december 1941 anföll japanska flygplan Pearl Harbor, en amerikansk flottbas på Hawaii.", k: [["7 december", "december", "pearl harbor", "hawaii"]] },
    { f: "Japan anföll utan att först förklara krig.", k: [["forklara krig", "krigsforklaring", "utan att forklara", "utan krigsforklaring"]] },
  ]},
  { t: "Vad blev följden av Japans anfall på Pearl Harbor?", s: [
    { f: "USA förklarade krig mot Japan dagen efter anfallet.", k: [["dag efter", "dagen efter", "forklarade krig", "japan"]] },
    { f: "Tyskland förklarade krig mot USA tre dagar senare.", k: [["Tyskland"], ["forklarade krig", "tre dagar", "senare", "usa"]] },
    { f: "USA blev nu en aktiv stormakt i andra världskriget.", k: [["stormakt", "aktiv", "global"]] },
    { f: "Kriget blev ett verkligt globalt krig där striderna i Europa och Asien hängde samman.", k: [["globalt", "europa", "asien", "samman"]] },
  ]},
  { t: "Vilka var de allierade, och vad var axelmakterna?", s: [
    { f: "De allierade bestod av USA, Storbritannien och Sovjetunionen som de viktigaste stormakterna.", k: [["allierade"], ["usa", "storbritannien", "sovjet"]] },
    { f: "De allierade kunde samarbeta militärt och ekonomiskt mot en gemensam fiende.", k: [["samarbet", "militar", "ekonomisk", "gemensam"]] },
    { f: "Axelmakterna bestod av Tyskland, Italien och Japan.", k: [["axelmakterna", "axis"], ["Tyskland", "italien", "japan"]] },
    { f: "Axelmakterna fick nu möta flera stora stormakter samtidigt.", k: [["flera", "samtidigt", "stormakt"]] },
  ]},
  { t: "Vad hände vid Stalingrad 1942–1943?", s: [
    { f: "Tyska trupper hade ryckt långt in i Sovjetunionen och nått Stalingrad.", k: [["stalingrad", "langvagt", "in", "natt"]] },
    { f: "Striderna vid Stalingrad blev mycket hårda med kraftigt sowjetiskt motstånd.", k: [["strid", "hard", "motstand", "sovjet"]] },
    { f: "Den hårda ryska vintern försvårade de tyska truppernas situation.", k: [["vinter", "rysk", "kal"]] },
    { f: "I november 1942 gick Sovjetunionen till motanfall och riskerade att omringa en hel tysk armé.", k: [["november 1942", "motanfall", "omringa"]] },
    { f: "Hitler förbjöd tysk reträtt, och soldaterna blev utsvultna, utmattade och drabbades av kylan.", k: [["forbj", "retreat", "retur", "utsvultna", "kyla", "hitler"]] },
    { f: "Den tyska armén tvingades till slut kapitulera.", k: [["kapitulation", "tvingades"]] },
  ]},
  { t: "Vad hände vid el-Alamein i Nordafrika 1942?", s: [
    { f: "Tyskland och Italien ville kontrollera Nordafrika och Egypten.", k: [["nordafrika", "egypten", "kontroll"]] },
    { f: "Suezkanalen var strategiskt viktigt för de allierade.", k: [["suez", "kanal", "strateg"]] },
    { f: "Brittiska trupper hade pressats tillbaka till el-Alamein i norra Egypten.", k: [["alamein", "el alamein", "brittisk", "tillbaka"]] },
    { f: "Britterna gick till motanfall när tyska trupper orkade inte fortsätta framryckningen.", k: [["motanfall", "brit", "framryckning", "orkade inte"]] },
    { f: "De allierade vann kontrollen över Nordafrika och Tyskland förlorade ett viktigt område.", k: [["allierade"], ["vann", "kontroll", "forlorade"]] },
  ]},
  { t: "Vad hände med Italien 1943?", s: [
    { f: "De allierade hade besegrat de tysk-italienska trupperna i Nordafrika.", k: [["allierade"], ["besegrat", "italien", "tyskitalien", "nordafrika"]] },
    { f: "De allierade gick över till Sicilien och fortsatte norrut mot Rom.", k: [["sicilien", "rom", "norrut"]] },
    { f: "Mussolini avsattes och arresterades.", k: [["mussolini"], ["avsat", "arresterad"]] },
    { f: "Italiens nya regering anslöt sig till de allierade hösten 1943.", k: [["italien"], ["ny regering", "anslot", "allierade", "host 1943"]] },
    { f: "Mussolini lyckades fly och fortsatte styra ett tyskkontrollerat område i norra Italien.", k: [["mussolini"], ["flydde", "Tyskland", "norra italien"]] },
  ]},
  { t: "Vad var D-dagen?", s: [
    { f: "De allierade ville befria Frankrike från tysk ockupation.", k: [["befria", "frankrike", "ockupation"]] },
    { f: "Den 6 juni 1944 anföll brittiska och amerikanska soldater Normandie i Frankrike.", k: [["6 juni", "juni 1944", "normandie"]] },
    { f: "Invasionen genomfördes med ett mycket stort antal fartyg och soldater.", k: [["invasion", "stort antal", "fartyg"]] },
    { f: "Tyskarna gjorde hårt motstånd men kunde inte stoppa invasionen.", k: [["motstand", "kunde inte stoppa", "hard", "tyskarna"]] },
    { f: "Paris befriades innan sommaren var slut.", k: [["paris"], ["befriad", "som", "sommer"]] },
  ]},
  { t: "Hur och när slutade kriget i Europa?", s: [
    { f: "Hösten 1944 trängde allierade marktrupper in i Tyskland från både väster och öster.", k: [["host 1944", "trangde in", "tyskland", "vaster osten"]] },
    { f: "Finland slöt ett eldupphöravtal med Sovjetunionen i september 1944 och tvingades köra ut tyska soldater.", k: [["finland"], ["eldupphor", "september 1944", "sovjet"]] },
    { f: "I april 1945 nådde sowjetiska soldater Berlin.", k: [["april 1945", "berlin", "sovjet"]] },
    { f: "Amerikanska och sowjetiska trupper möttes vid floden Elbe.", k: [["elbe", "mottes", "amerika", "sovjet"]] },
    { f: "Hitler begick självmord i en bunker i Berlin.", k: [["hitler"], ["sjalpvmord", "selv"]] },
    { f: "Den 7 och 8 maj 1945 kapitulerade de sista tyska trupperna.", k: [["maj 1945", "7 maj", "8 maj", "kapitulation"]] },
  ]},
  { t: "Varför och hur använde USA atombomberna?", s: [
    { f: "Japan fortsatte att göra mycket starkt militärt motstånd trots att Tyskland hade besegrats.", k: [["japan"], ["motstand", "starkt", "tyskland besegrat"]] },
    { f: "En invasion av Japan riskerade att kosta många amerikanska soldater livet.", k: [["invasion", "japan"], ["risk", "soldat", "dod", "liv"]] },
    { f: "USA hade utvecklat atombomben, ett nytt och mycket kraftfullt vapen.", k: [["atombomb"]] },
    { f: "Den 6 augusti 1945 släppte USA en atombomb över Hiroshima; den 9 augusti en till över Nagasaki.", k: [["6 augusti", "9 augusti", "hiroshima", "nagasaki"]] },
    { f: "Japan kapitulerade tre dagar senare, och den 15 augusti 1945 meddelade kejsaren att Japan gav upp.", k: [["kapitul", "15 augusti", "kejsaren"]] },
  ]},
  { t: "Vad var Förintelsen?", s: [
    { f: "Förintelsen var nazisternas planerade folkmord på Europas judar.", k: [["forintelse", "folkmord"]] },
    { f: "Nazisterna hade en rasideologi där de ansåg att människor tillhörde olika raser med olika värde.", k: [["rasideologi", "ras", "varde"]] },
    { f: "Antisemitism, hat mot judar, fanns redan i Europa långt före nazisterna.", k: [["antisemitism", "hat", "judar"]] },
    { f: "När Hitler tog makten 1933 började förföljelserna bli en del av statens politik.", k: [["hitler"], ["1933", "politik", "forfolje"]] },
    { f: "Under andra världskriget utvecklades förföljelserna till ett systematiskt massmord där omkring sex miljoner judar mördades.", k: [["sex miljoner", "massmord", "systematisk", "mordades"]] },
  ]},
  { t: "Vilka var de fem stegen i Förintelsen?", s: [
    { f: "Identifiering: Nazisterna tog reda på vilka personer som var judar och registrerade deras identitet.", k: [["identifiering", "identitet", "register"]] },
    { f: "Segregation: Judar uteslöts från samhället och fick allt färre rättigheter.", k: [["segregation", "uteslot", "rattighet"]] },
    { f: "Koncentration: Judar tvingades bo på särskilda platser; många samlades i getton i Polen.", k: [["koncentration", "getto", "tvingad", "bor"]] },
    { f: "Deportation: Judar transporterades från sina hem och getton till koncentrations- och förintelseläger.", k: [["deportation", "transport", "lager"]] },
    { f: "Förintelse: Judar mördades systematiskt genom masskjutningar och gaskammare.", k: [["forintelse", "mordades", "masskjutning", "gas"]] },
  ]},
  { t: "Vad var Kristallnatten?", s: [
    { f: "Nazisternas förföljelser av judar hade pågått sedan Hitler tok makten.", k: [["forfolje", "hitler", "makten"]] },
    { f: "Den antisemitiska politiken blev allt mer våldsam.", k: [["antisemitisk", "politik", "valdsam"]] },
    { f: "Natten mellan 9 och 10 november 1938 genomfördes våldsamma attacker mot judar i Tyskland.", k: [["kristallnatt", "9 november", "10 november", "1938", "attack"]] },
    { f: "Judiska affärer förstördes, synagogor sattes i brand, hem och skolor förstördes, och nästan hundra judar mördades.", k: [["judisk", "affar", "synagoga", "brand", "mordades"]] },
    { f: "Kristallnatten blev ett tydligt steg mot det senare folkmordet och visade att förföljelserna blev allt mer öppna och våldsamma.", k: [["steg", "folkmord", "oppna", "valdsam"]] },
  ]},
  { t: "Vad var getton och koncentrationsläger?", s: [
    { f: "Det första koncentrationslägret, Dachau, öppnades i mars 1933.", k: [["dachau", "mars 1933", "forsta"]] },
    { f: "Med tiden byggdes ett stort system av koncentrationsläger för att kontrollera och isolera människor.", k: [["system", "lager", "kontroll", "isolera"]] },
    { f: "Judarna samlades i särskilda stadsdelar i ockuperade områden, kallad getton.", k: [["getto", "stadsdel", "ockuperat"]] },
    { f: "Gettona spärrades av och judarna förbjöds att lämna dem.", k: [["sparr", "forbj", "lamna"]] },
    { f: "Människorna trängdes ihop på små områden, fick allt mindre mat, och svält, sjukdomar och hårt arbete gjorde att många dog.", k: [["trangd", "mat", "svalt", "sjukdom", "dod"]] },
    { f: "Förintelseläger, olika från koncentrationsläger, byggdes specifikt för att systematiskt mörda människor.", k: [["forintelselag", "mordades", "systematisk"]] },
  ]},
  { t: "Vad var masskjutningar och insatsgrupper?", s: [
    { f: "När Tyskland anföll Sovjetunionen 1941 hamnade ännu fler judar under nazistiskt styre.", k: [["1941", "sovjet"], ["fler", "judar", "nazi"]] },
    { f: "Nazisterna ville mörda den judiska befolkningen i de områden de erövrade.", k: [["morda", "befolkning", "judar"]] },
    { f: "Särskilda tyska insatsgrupper följde armén för att spåra upp och samla ihop judar.", k: [["insatsgrupp", "forja", "armé", "spara"]] },
    { f: "Offren tvingades ofta gräva sina egna gravar innan de sköts.", k: [["tvingas", "grav", "skots"]] },
    { f: "Miljontals judar mördades också i förintelseläger som Auschwitz-Birkenau, Treblinka och Sobibór.", k: [["miljontals"], ["forintelselag", "auschwitz", "treblinka", "sobibor"]] },
    { f: "Omkring sex miljoner judar mördades under Förintelsen genom masskjutningar och förintelseläger.", k: [["sex miljoner", "morda", "masskjutning"]] },
  ]},
  { t: "Vem var Raoul Wallenberg?", s: [
    { f: "Judar i Ungern riskerade att deporteras till förintelseläger.", k: [["ungern", "judar"], ["deportation", "forintelselag"]] },
    { f: "Raoul Wallenberg var svensk diplomat i Budapest 1944.", k: [["raoul wallenberg", "svensk"], ["diplomat", "budapest", "1944"]] },
    { f: "Han utfärdade så kallade skyddspass till judar som gav innehavarna skydd och koppling till Sverige.", k: [["skyddspass", "utfardag", "sverige"]] },
    { f: "På så sätt lyckades han rädda tusentals judar från deportation till Auschwitz.", k: [["radda", "tusentals", "auschwitz"]] },
    { f: "Wallenberg greps av sowjetiska militärer 1945; vad som hände honom är oklart, men han tros ha dött i ett fängelse i Moskva 1947.", k: [["wallenberg"], ["greps", "sovjet", "1947", "moskva"]] },
  ]},
  { t: "Vilka andra grupper förföljdes av nazisterna?", s: [
    { f: "Nazisternas rasideologi delade in människor i grupper med olika värde.", k: [["rasideologi", "grupp", "varde"]] },
    { f: "Omkring en halv miljon romer dödades.", k: [["romer", "miljon"]] },
    { f: "Omkring två miljoner civila polacker dödades.", k: [["polacker", "miljoner", "civil"]] },
    { f: "Miljontals människor i Sovjetunionen dog i samband med den tyska invasionen.", k: [["sovjet", "miljontals", "invasion"]] },
    { f: "Även politiska motståndare, Jehovas vittnen, homosexuella och personer med psykiska eller fysiska funktionsnedsättningar förföljdes och dödades.", k: [["politiska", "jehovas", "homosexuell", "funktionsnedsattning"]] },
  ]},
];

const GRADES = [
  { g: "A", min: 90 }, { g: "B", min: 78 }, { g: "C", min: 65 }, { g: "D", min: 50 }, { g: "E", min: 40 }, { g: "F", min: 0 },
];

// Vanliga missförstånd och sammanblandningar (från studiematerialet).
const MISSUPPFATTNINGAR = [
  "Operation Barbarossa var Tysklands anfall mot Sovjetunionen 1941 – inte mot någon annan.",
  "Molotov–Ribbentrop-pakten (1939) var mellan Tyskland och Sovjetunionen, inte mellan något annat par.",
  "Finland var Tysklands medkrigförande men ville inte formellt bli en del av axelmakterna.",
  "Pearl Harbor anföll den 7 december 1941; USA förklarade krig dagen efter, Tyskland tre dagar senare.",
  "De viktigaste allierade var USA, Storbritannien och Sovjetunionen.",
  "Stalingrad (1942–1943) var en vändpunkt i kriget; Tyskland förlorade där och började sedan förlora.",
  "El-Alamein (1942) var i Nordafrika, inte i Europa.",
  "D-dagen var invasionen i Normandie (Frankrike) den 6 juni 1944, som öppnade västfronten.",
  "Atombomberna användes mot Japan (Hiroshima 6 aug, Nagasaki 9 aug 1945), inte mot Tyskland.",
  "Förintelsen var nazisternas planerade folkmord på judar – inte en spontan händelse.",
  "Kristallnatten var 9–10 november 1938, långt före kriget började.",
  "De fem stegen i Förintelsen: identifiering → segregation → koncentration → deportation → förintelse.",
  "Getton var avspärrade områden där judar tvingades bo; förintelseläger byggdes för att systematiskt mörda.",
  "Raoul Wallenberg var svensk diplomat som räddade judar i Budapest 1944 genom skyddspass.",
  "Förintelsen drabbade inte bara judar – romer, polacker, Jehovas vittnen, homosexuella och andra förföljdes också.",
  "Omkring sex miljoner judar mördades under Förintelsen.",
  "Tysk – Tyskland, Tyskland, Tysk.",
  "Italiensk – Italien, Italien, Italiensk.",
];

if (typeof module !== "undefined") module.exports = { QUESTIONS, GRADES, MISSUPPFATTNINGAR };
