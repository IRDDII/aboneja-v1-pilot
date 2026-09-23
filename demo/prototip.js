
(function(){
  var BUS = '<svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>';
  function ic(d,w){ return '<svg width="'+(w||20)+'" height="'+(w||20)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>'; }
  var I = {
    back:ic('<path d="M19 12H5M11 18l-6-6 6-6"/>',22),
    menu:ic('<path d="M4 7h16M4 12h16M4 17h16"/>',22),
    x:ic('<path d="M6 6l12 12M18 6L6 18"/>',18),
    check:ic('<path d="M5 12.5l4.5 4.5L19 7.5"/>',16),
    globe:ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',16),
    globe2:ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',22),
    bell:ic('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>',22),
    clock:ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',20),
    wifi:ic('<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01"/>',20),
    wifioff:ic('<path d="M3 3l18 18M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M5 12.5a10 10 0 0 1 5-2.6M14.5 10a10 10 0 0 1 4.5 2.5"/>',28),
    route:ic('<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h6a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h6"/>',20),
    scan:ic('<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"/>',22),
    building:ic('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M10 21v-4h4v4"/>',22),
    user:ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',28),
    idcard:ic('<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M14 10h4M14 13h3"/>',22),
    passport:ic('<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 16h6"/>',22),
    mail:ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',16),
    lock:ic('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',16),
    hash:ic('<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',16),
    cake:ic('<path d="M4 20h16M5 20v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6M12 12V9M12 6.5V6"/>',16),
    cam:ic('<path d="M4 8a2 2 0 0 1 2-2h1.5l1.2-2h6.6l1.2 2H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.5"/>',44),
    wallet:ic('<path d="M4 8a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v2M3 9h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="16" cy="13.5" r="1.2"/>',22),
    cam2:ic('<path d="M4 8a2 2 0 0 1 2-2h1.5l1.2-2h6.6l1.2 2H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="12.5" r="3.5"/>',22),
    female:ic('<circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/>',19),
    male:ic('<circle cx="10" cy="14" r="5"/><path d="M14.5 9.5L20 4M15 4h5v5"/>',19),
    person:ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',16),
    qr:ic('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 14h3v3M21 14v.01M17 21h4v-4"/>',22),
    hand:ic('<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10M12 9.5a1.5 1.5 0 0 1 3 0V11M15 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-.5a6 6 0 0 1-4.9-2.6L4 14.6a1.5 1.5 0 0 1 2.4-1.8L9 15"/>',20),
    cart:ic('<circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M3 4h2l2.4 11h11l2-8H6.2"/>',22),
    home:ic('<path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',22),
    pin:ic('<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',22),
    ticket:ic('<path d="M3 8a2 2 0 0 0 0 4v0a2 2 0 0 1 0 4v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a2 2 0 0 1 0-4 2 2 0 0 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="M13 6v2M13 11v2M13 16v2"/>',22),
    plus:ic('<path d="M12 5v14M5 12h14"/>',22),
    lang:ic('<path d="M4 5h9M8.5 3v2M6 5c.5 3 2.5 5.5 5 7M11 5c-.5 3-3 6-6.5 7.5M13 21l4-9 4 9M14.5 17.5h5"/>',19),
    moon:ic('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',19),
    sun:ic('<circle cx="12" cy="12" r="4.2"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"/>',19),
    flag:ic('<path d="M5 21V4M5 4h12l-2 3.5L17 11H5"/>',16),
    history:ic('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',19),
    help:ic('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17v.01"/>',19),
    bellsm:ic('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>',19),
    logout:ic('<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 17l-5-5 5-5M5 12h11"/>',19),
    usersm:ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',19),
    homesm:ic('<path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',19),
    pinsm:ic('<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',19),
    plussm:ic('<path d="M12 5v14M5 12h14"/>',19),
    ticketsm:ic('<path d="M3 8a2 2 0 0 0 0 4v0a2 2 0 0 1 0 4v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a2 2 0 0 1 0-4 2 2 0 0 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/>',19),
    bigcheck:ic('<path d="M5 12.5l4.5 4.5L19 7.5"/>',44),
    okcheck:ic('<path d="M5 12.5l4.5 4.5L19 7.5"/>',22)
  };

  // Çmimet: migrimi 031. Datat: expires_at = starts_at + 30 ditë me orë të saktë (entitlement.mjs).
  // QR: pas nga serveri, TTL 120 s, rifreskim 10 s para skadimit (qrPass.js); hapet me shtypje 600 ms
  // (ActiveTicketCard.jsx). Regjistrimi: dokument → NID → llogari → OTP → vulosje. Linjat janë DEMO.
  var TTL = 120, MARZHI = 10, HOLD = 600;
  var PRODUCTS = [
    {id:'line', name:'Abonim i Linjës', short:'Linjë', price:600, desc:'Një linjë, sa herë të duash.',
     pick:'Zgjidhni linjën', opts:['L7 · Kamëz – Qendër','L12 · Laprakë – Qendër','L3 · Sauk – Qendër'],
     incl:['Udhëtime pa kufi në linjën e zgjedhur','30 ditë nga çasti i blerjes','QR personal që rifreskohet vetë']},
    {id:'company', name:'Abonim i Kompanisë', short:'Kompani', price:1000, desc:'Të gjitha linjat e një kompanie.',
     pick:'Zgjidhni kompaninë', opts:['Kompania Veriu (demo)','Kompania Qendra (demo)'],
     incl:['Udhëtime pa kufi në linjat e kompanisë','30 ditë nga çasti i blerjes','QR personal që rifreskohet vetë']},
    {id:'network', name:'Abonim Universal', short:'Universal', price:1600, desc:'Çdo linjë e rrjetit.',
     pick:null, opts:[], incl:['Udhëtime pa kufi në çdo linjë','30 ditë nga çasti i blerjes','QR personal që rifreskohet vetë']}
  ];
  // Hartë e stilizuar (koordinata në kanavacë 340×300) — DEMO, jo gjeografi e saktë.
  // TURISTI — vetëm dizajn. Nuk hyn te demoja e 26 shtatorit; te faqja del si «së shpejti».
  // Vendim i Irdit, 20 shtator 2026: të tria javore (7 ditë).
  var TURIST = [
    {id:'t-line',    name:'Një linjë',                    price:600,  scope:'Vlen në linjën që zgjedh.',           pick:'Zgjidh linjën',    opts:['L7 · Kamëz – Qendër','L12 · Laprakë – Qendër','L3 · Sauk – Qendër']},
    {id:'t-company', name:'Të gjitha linjat e kompanisë', price:900,  scope:'Vlen në çdo linjë të asaj kompanie.', pick:'Zgjidh kompaninë', opts:['Kompania Veriu (demo)','Kompania Qendra (demo)']},
    {id:'t-all',     name:'Të gjithë Shqipërinë',         price:1200, scope:'Vlen në të gjitha linjat e rrjetit.', pick:null,               opts:[]}
  ];
  var LINES = {
    L7:{name:'Kamëz – Qendër', color:'#3F5189', pts:[[48,36],[92,70],[128,96],[150,138],[196,170],[240,214],[282,258]], stops:[['Kamëz',0],['Bathore',2],['Kthesa e Kamzës',3],['Sheshi Shqiponja',5],['Qendër',6]]},
    L12:{name:'Laprakë – Qendër', color:'#2C7A8C', pts:[[30,178],[80,176],[126,190],[176,206],[222,216],[282,258]], stops:[['Laprakë',0],['Unaza e Re',1],['Ali Demi',3],['Qendër',5]]},
    L3:{name:'Sauk – Qendër', color:'#6E4BB8', pts:[[312,70],[300,120],[292,168],[286,214],[282,258]], stops:[['Sauk',0],['Liqeni',1],['Rr. e Elbasanit',3],['Qendër',4]]}
  };
  var REG = ['Dokumenti','Identiteti','Llogaria','Kodi OTP','Vulosja'];

  // Verdiktet dhe arsyet janë ATO TË SERVERIT — server/src/lib/scan.mjs.
  // Emrat teknikë nuk përkthehen: operatori sheh fjalinë, kodi rri poshtë për mbështetjen.
  var VERDIKTET = [
    {k:'ok',   res:'VALID',           rc:'e_vlefshme',           t:'I VLEFSHËM',      why:'Abonim i linjës L7 · udhëtari mund të hipë.'},
    {k:'warn', res:'INVALID',         rc:'linja_e_gabuar',       t:'LINJË TJETËR',    why:'Abonimi vlen vetëm në L12. Ky terminal është L7.'},
    {k:'warn', res:'INVALID',         rc:'linja_e_papercaktuar', t:'TERMINAL PA LINJË', why:'Terminalit nuk i është caktuar linja. Njofto administratën.'},
    {k:'bad',  res:'INVALID',         rc:'jashte_fusheveprimit', t:'JASHTË FUSHËVEPRIMIT', why:'Abonim i një kompanie tjetër.'},
    {k:'bad',  res:'EXPIRED',         rc:'e_skaduar',            t:'I SKADUAR',       why:'Abonimi ka mbaruar më 12 shtator, 08:30.'},
    {k:'warn', res:'NOT_STARTED',     rc:'nuk_ka_nisur',         t:'S’KA NISUR ENDE', why:'Abonimi fillon më 21 shtator, 00:00.'},
    {k:'bad',  res:'REVOKED',         rc:'e_revokuar',           t:'I REVOKUAR',      why:'Abonimi është anuluar nga administrata.'},
    {k:'bad',  res:'REPLAYED',        rc:'pas_i_ndare',          t:'QR I NDARË',      why:'I njëjti QR u skanua nga një pajisje tjetër. Kërko dokumentin.'},
    {k:'info', res:'ALREADY_COUNTED', rc:'brenda_cooldown',      t:'U LEXUA SËRISH',  why:'I njëjti udhëtar brenda 2 minutave — nuk numërohet dy herë.'},
    {k:'bad',  res:'INVALID',         rc:'pasi_ka_skaduar',      t:'QR I VJETËR',     why:'QR-ja skadoi. Kërko udhëtarit ta rifreskojë.'}
  ];
  // Kërkesat për para dhe terminalet — forma e entiteteve `Withdrawal`, `PayoutAccount`, `Terminal`.
  var REQ = [
    {st:'pret', shuma:'62 400 L', kush:'Kompania Veriu', kur:'19 shtator, 21:40', lloj:'Tërheqje te llogaria e biznesit'},
    {st:'pret', shuma:'8 900 L',  kush:'Arta Kola',      kur:'19 shtator, 18:12', lloj:'Rimbursim — abonim i dyfishtë'},
    {st:'ok',   shuma:'44 700 L', kush:'Poli universal', kur:'18 shtator, 03:00', lloj:'Shpërndarje mujore'},
    {st:'jo',   shuma:'120 000 L',kush:'Kompania Veriu', kur:'15 shtator, 11:02', lloj:'Tërheqje mbi bilancin'}
  ];
  var TERMINALET = [
    {kod:'BUS-L7-014',  lloj:'Pajisje autobusi', linja:'L7',  on:true,  info:'Skanimi i fundit: 2 min më parë'},
    {kod:'DORE-L7-207', lloj:'Terminal dore',    linja:'L7',  on:true,  info:'Faturino: E. Hoxha · turni 14:00–22:00'},
    {kod:'BUS-L12-031', lloj:'Pajisje autobusi', linja:'L12', on:true,  info:'Skanimi i fundit: 11 min më parë'},
    {kod:'DORE-000-99', lloj:'Terminal dore',    linja:'—',   on:false, info:'PA LINJË — çdo abonim linje refuzohet'}
  ];
  var SCREENS = [['intro','Animacioni i hyrjes'],['welcome','Mirësevini'],['role','Kush je?'],['login','Hyrje'],['reg','Regjistrimi (5 hapa)'],['home','Kreu + menuja'],['map','Harta'],['buy','Bli Abonim'],['detail','Detajet · Konfirmo'],['pass','Abonimet e mia + QR'],['account','Profili'],
    ['treg','— Turist: regjistrimi'],['thome','Turist: kreu'],['tbuy','Turist: biletat javore'],['tpass','Turist: bileta ime'],['taccount','Turist: profili'],
    ['oplogin','— Operator: hyrja'],['tmode','Operator: lloji i terminalit'],['pair','Operator: çiftëzimi'],['camera','Operator: leja e kamerës'],['scan','Operator: skaneri'],['scanres','Operator: verdikti'],['verify','Operator: verifikim me kod'],
    ['stlogin','— Staf: hyrja'],['staff','Staf: salla']];
  var MUAJ = ['janar','shkurt','mars','prill','maj','qershor','korrik','gusht','shtator','tetor','nëntor','dhjetor'];

  // Gjuha: prototipi shkruhet shqip; anglishtja vjen si përkthim i rreshtave në ekran.
  // Te aplikacioni i vërtetë kjo është `t()` me 7 gjuhë — këtu mjaftojnë dy.
  var EN = {
    'Shqip':'English','Vazhdo':'Continue','Pa radhë, pa sportele':'No queues, no counters',
    'Transporti publik i Shqipërisë në dorën tuaj':'Public transport of Albania, in your hand',
    'Kush je?':'Who are you?','Qytetar':'Citizen','Operator':'Operator','Staf':'Staff',
    'Ky prototip tregon rrugën e qytetarit.':'This prototype shows the citizen journey.',
    'Hyrje':'Sign in','Krijo llogari':'Create account','Hyr':'Sign in','Email':'Email','Fjalëkalimi':'Password',
    'Konfirmo fjalëkalimin':'Confirm password','Fjalëkalimet përputhen':'Passwords match',
    'Pesë hapa të shkurtër: dokumenti, numri personal, llogaria, kodi në email dhe vulosja.':'Five short steps: document, personal number, account, email code and sealing.',
    'Fillo regjistrimin':'Start registration','Cili dokument?':'Which document?','Kartë identiteti':'ID card','Pasaportë':'Passport',
    'Identiteti':'Identity','NID':'NID','Emri':'First name','Mbiemri':'Last name','Datëlindja':'Date of birth',
    'Gjinia':'Gender','Femër':'Female','Mashkull':'Male','Llogaria':'Account','Kodi në email':'Email code',
    'Dërguar te a•••@shembull.al':'Sent to a•••@example.al','Verifiko':'Verify','Dokumenti':'Document','Kodi OTP':'OTP code','Vulosja':'Sealing',
    'Mirë se erdhe, Arta':'Welcome, Arta','Mirë se erdhe, Ardit':'Welcome, Ardit','LLOGARIA U VULOS':'ACCOUNT SEALED',
    'Identiteti u lidh me numrin personal. Tani mund të blesh abonimin.':'Your identity is linked to your personal number. You can buy a subscription now.',
    'Hyr te Kreu':'Go to Home','Mirëseerdhët,':'Welcome back,','Aktiv':'Active','Gati':'Ready',
    'ditë':'days','orë':'hours','min':'min','sek':'sec','Ditë':'Days','Orë':'Hours','Min':'Min','Sek':'Sec',
    'Hap QR-në':'Open QR','Rinovo abonimin':'Renew subscription','Shto abonim':'Add subscription',
    'Abonimet e mia':'My subscriptions','Kreu':'Home','Harta':'Map','Harta live':'Live map','Bli Abonim':'Buy',
    'Bli abonim':'Buy subscription','Abonim i Linjës':'Line subscription','Abonim i Kompanisë':'Company subscription',
    'Abonim Universal':'Universal subscription','Një linjë, sa herë të duash.':'One line, as often as you like.',
    'Të gjitha linjat e një kompanie.':'All lines of one company.','Çdo linjë e rrjetit.':'Every line in the network.',
    'E ke këtë':'You have this','Te Kreu':'On Home','Vendose te Kreu':'Show on Home','Filloi':'Started','Skadon':'Expires',
    'Zgjidhni linjën':'Choose the line','Zgjidhni kompaninë':'Choose the company','Fillon':'Starts','Totali':'Total',
    'Demo · asnjë kartë nuk tarifohet':'Demo · no card is charged','Abonimi u aktivizua':'Subscription activated',
    'Udhëtime pa kufi në linjën e zgjedhur':'Unlimited rides on the chosen line',
    'Udhëtime pa kufi në linjat e kompanisë':'Unlimited rides on the company lines',
    'Udhëtime pa kufi në çdo linjë':'Unlimited rides on every line',
    '30 ditë nga çasti i blerjes':'30 days from the moment of purchase',
    'QR personal që rifreskohet vetë':'A personal QR that refreshes itself',
    'Abonim mujor':'Monthly subscription','Fotoja për kontrollorin':'Photo for the inspector','Udhëtari':'Passenger',
    'Statusi':'Status','I vlefshëm':'Valid','Rifreskohet pas':'Refreshes in','Pa internet':'No internet',
    'Lidhuni dhe QR-ja shfaqet vetë.':'Connect and the QR appears by itself.',
    'Profili':'Profile','Gjuha':'Language','Tema':'Theme','Njoftimet':'Notifications','Ndihmë':'Help',
    'Historiku i udhëtimeve':'Trip history','Dil':'Sign out','Dil nga llogaria':'Sign out','E verifikuar':'Verified',
    'Navigimi':'Navigation','stacione':'stops','2 autobusë':'2 buses','Qytetarë në app':'Citizens in app','Linja':'Line',
    '2 abonime aktive':'2 active subscriptions','1 abonim aktiv':'1 active subscription','3 abonime aktive':'3 active subscriptions',
    'Kjo pjesë vjen pas prototipit.':'This part comes after the prototype.'
  };
  function perkthe(){
    if(state.lang!=='en') return;
    var rrenja = [$screen, $tabbar, $overlay];
    rrenja.forEach(function(r){
      if(!r) return;
      var w = document.createTreeWalker(r, NodeFilter.SHOW_TEXT, null), n;
      while((n = w.nextNode())){
        var v = n.nodeValue.trim();
        if(v && EN[v]) n.nodeValue = n.nodeValue.replace(v, EN[v]);
      }
      r.querySelectorAll('input').forEach(function(i){ if(EN[i.value]) i.value = EN[i.value]; });
    });
  }
  var NOW = new Date(2026, 8, 19, 22, 14);
  var TFUND = new Date(2026, 8, 25, 14, 0);   // bileta javore e turistit: blerë 18, skadon 25 shtator
  function plus30(d){ var x = new Date(d.getTime()); x.setDate(x.getDate()+30); return x; }
  function data(d){ return d.getDate()+' '+MUAJ[d.getMonth()]; }
  function ora(d){ return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
  function ditetMbetur(to){ return Math.ceil((to - NOW) / 86400000); }

  var state = {
    screen:'intro', mode:'light', selected:'line', choice:0, roleNote:false, done:false, notif:true, online:true,
    tab:'login', regStep:0, doc:'id', gender:'f', lang:'sq', toast:null, drawer:false, qrOpen:false, qrSub:'s1', mapLine:'L7', typed:false,
    paired:false, verdict:0, tmode:'hand', cam:false, camDenied:false, stTab:'live', tprod:'t-line', tStep:0, tGender:'m', tKa:false,
    subs:[{id:'s1', product:'line', scope:'L7 · Kamëz – Qendër', from:new Date(2026, 8, 12, 8, 30)}],
    primary:'s1', nr:1,
    pass:{token:null, expires:0}
  };
  state.subs.forEach(function(s){ s.to = plus30(s.from); });
  var root = document.documentElement.dataset.theme;
  if(root==='dark' || (!root && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches)) state.mode = 'dark';
  try{ var saved = localStorage.getItem('aboneja-proto-mode'); if(saved==='dark'||saved==='light') state.mode = saved; }catch(e){}
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Adresa mund ta hapë prototipin direkt te një kategori: /demo/#turist, #operator, #staf.
  // Kabina e përdor këtë për butonat «Hap dizajnin».
  var HYRJET = { qytetar:'home', turist:'thome', operator:'scan', staf:'staff', mirsevini:'welcome' };
  (function nisNgaAdresa(){
    var h = (location.hash || '').replace('#','').toLowerCase();
    if(!HYRJET[h]) return;
    state.screen = HYRJET[h];
    state.typed = true;
    if(h === 'operator'){ state.paired = true; state.cam = true; }
    if(h === 'turist'){ state.tKa = true; }
  })();

  var $screen = document.getElementById('screen'), $tabbar = document.getElementById('tabbar'), $phone = document.getElementById('phone'), $jump = document.getElementById('jump'), $overlay = document.getElementById('overlay');
  function prod(id){ for(var i=0;i<PRODUCTS.length;i++) if(PRODUCTS[i].id===id) return PRODUCTS[i]; }
  function lek(n){ return n.toLocaleString('sq-AL') + ' Lekë'; }
  function code(s){ return s.split(' · ')[0]; }
  function place(s){ return s.split(' · ')[1] || s; }
  function info(icon, html){ return '<div class="info"><span class="ii">'+icon+'</span><span>'+html+'</span></div>'; }
  // Shiriti i terminalit: kush është pajisja, cila linjë, dhe dalja.
  function opbar(){
    var bus = state.tmode==='bus';
    return '<div class="opbar"><span class="tchip">'+(bus?'BUS-L7-014':'DORE-L7-207')+'</span>'+
      '<span>'+(bus?'Autobus · L7':'Faturino · L7')+'</span>'+
      '<button class="sq" data-logout="1" style="margin-left:auto;width:40px;height:40px;border-radius:12px" aria-label="'+(bus?'Shkëputu':'Mbyll turnin')+'">'+I.logout+'</button></div>';
  }
  function backbar(to,title){ return '<div class="titlebar"><button class="sq" data-go="'+to+'" aria-label="Kthehu">'+I.back+'</button><h1 class="h" style="font-size:26px">'+title+'</h1></div>'; }
  function scopeLabel(a){ return a.product==='network' ? 'Të gjitha linjat' : (a.product==='line' ? code(a.scope)+' · '+place(a.scope) : a.scope); }
  function sub(id){ for(var i=0;i<state.subs.length;i++) if(state.subs[i].id===id) return state.subs[i]; return state.subs[0]; }
  function cur(){ return sub(state.primary); }
  // Numëruesi i abonimit — si `useCountdown` te SubscriptionCard.jsx, por me qeliza të ndara.
  function countdown(pfx){
    var cel = [['d','ditë'],['h','orë'],['m','min'],['s','sek']];
    return '<div class="count" role="timer" aria-label="Sa kohë i mbetet abonimit">'+
      cel.map(function(c){ return '<div'+(c[0]==='s'?' class="sec"':'')+'><b id="'+pfx+'-'+c[0]+'">--</b><span>'+c[1]+'</span></div>'; }).join('')+
    '</div>';
  }
  function runCountdown(){
    clearInterval(cdTick);
    // Turisti numëron biletën e vet javore; qytetari abonimin e tij.
    var turist = Boolean(document.getElementById('t-d'));
    var mbetja = (turist ? TFUND : cur().to) - NOW; // sa kohë i ka mbetur në kohën e demos
    var cel = Date.now() + mbetja;                  // e kthyer te ora e vërtetë, që të ecë vërtet
    function upd(){
      var ms = Math.max(0, cel - Date.now());
      var v = {d:Math.floor(ms/86400000), h:Math.floor(ms/3600000)%24, m:Math.floor(ms/60000)%60, s:Math.floor(ms/1000)%60};
      ['h','p','t'].forEach(function(pfx){
        Object.keys(v).forEach(function(k){
          var el = document.getElementById(pfx+'-'+k);
          if(el) el.textContent = k==='d' ? String(v[k]) : String(v[k]).padStart(2,'0');
        });
      });
    }
    if(!document.getElementById('h-d') && !document.getElementById('p-d') && !document.getElementById('t-d')) return;
    upd(); cdTick = setInterval(upd, 1000);
  }
  // Rrjedha live e skanimeve — si te salla e stafit: verdikti, linja, ora.
  var feedTick = null, lvScan = 1342;
  var EMRA = ['A. Kola','E. Hoxha','B. Leka','M. Dervishi','S. Prifti','K. Zeka','D. Boci','R. Meta'];
  function rreshtFeed(){
    var v = Math.random() < 0.82 ? VERDIKTET[0] : VERDIKTET[1 + Math.floor(Math.random()*4)];
    var ngjyra = v.k==='ok' ? '#21BFB0' : (v.k==='warn' ? '#D79A2B' : (v.k==='info' ? '#3F6FD8' : '#D2504A'));
    var tani = new Date();
    return '<div class="fitem"><span class="fdot" style="background:'+ngjyra+'"></span>'+
      '<div><b>'+EMRA[Math.floor(Math.random()*EMRA.length)]+'</b><div class="fl">'+v.res+' · L'+(Math.random()<0.7?'7':'12')+'</div></div>'+
      '<span class="ft">'+String(tani.getHours()).padStart(2,'0')+':'+String(tani.getMinutes()).padStart(2,'0')+':'+String(tani.getSeconds()).padStart(2,'0')+'</span></div>';
  }
  function runFeed(){
    clearInterval(feedTick);
    var f = document.getElementById('feed'); if(!f) return;
    f.innerHTML = [0,0,0,0].map(rreshtFeed).join('');
    feedTick = setInterval(function(){
      var el = document.getElementById('feed'); if(!el){ clearInterval(feedTick); return; }
      el.insertAdjacentHTML('afterbegin', rreshtFeed());
      while(el.children.length > 5) el.removeChild(el.lastChild);
      var n = document.getElementById('lv-scan'); if(n) n.textContent = (++lvScan).toLocaleString('sq-AL');
      var m = document.getElementById('lv-now'); if(m) m.textContent = String(5 + Math.floor(Math.random()*6));
    }, 2600);
  }
  function randTok(){ var c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789', s=''; for(var i=0;i<24;i++) s+=c[Math.floor(Math.random()*c.length)]; return s; }
  function merrPas(){ state.pass = {token: randTok(), expires: Date.now() + TTL*1000}; }
  function field(id,label,icon,value,type){ return '<div class="field"><label for="'+id+'">'+icon+' '+label+'</label><input id="'+id+'" type="'+(type||'text')+'" value="'+value+'" autocomplete="off"></div>'; }

  function mapSvg(sel){
    var s = '<svg viewBox="0 0 340 300" role="img" aria-label="Harta e linjave">';
    s += '<rect width="340" height="300" fill="'+(state.mode==='dark'?'#141B2E':'#EEF2F8')+'"/>';
    var block = state.mode==='dark' ? '#1B2338' : '#FFFFFF', road = state.mode==='dark' ? '#2A3350' : '#DCE2EC';
    [[16,16,60,44],[92,14,90,40],[200,20,70,56],[20,80,70,70],[180,92,60,50],[252,100,70,60],[40,214,110,70],[170,236,60,50],[230,160,40,40]].forEach(function(b){ s += '<rect x="'+b[0]+'" y="'+b[1]+'" width="'+b[2]+'" height="'+b[3]+'" rx="10" fill="'+block+'"/>'; });
    s += '<path d="M0 150 C 70 130, 110 160, 170 150 S 280 120, 340 140" fill="none" stroke="'+(state.mode==='dark'?'#1E3A52':'#CFE3F5')+'" stroke-width="12" stroke-linecap="round"/>';
    s += '<path d="M10 120 H330 M110 0 V300 M230 0 V300 M0 250 H340" stroke="'+road+'" stroke-width="6" fill="none"/>';
    s += '<circle cx="250" cy="70" r="26" fill="'+(state.mode==='dark'?'#1C3328':'#DDF1E4')+'"/>';
    Object.keys(LINES).forEach(function(k){
      var L = LINES[k], on = k===sel, d = 'M'+L.pts.map(function(p){return p.join(' ');}).join(' L');
      if(on) s += '<path d="'+d+'" fill="none" stroke="'+(state.mode==='dark'?'#0F1424':'#fff')+'" stroke-width="11" stroke-linejoin="round" stroke-linecap="round"/>';
      s += '<path d="'+d+'" fill="none" stroke="'+L.color+'" stroke-opacity="'+(on?1:.22)+'" stroke-width="'+(on?6:4)+'" stroke-linejoin="round" stroke-linecap="round"/>';
    });
    // Autobusët: lëvizin mbi shtegun e linjës (animateMotion). Demo — pa GPS të vërtetë.
    Object.keys(LINES).forEach(function(k){
      var L2 = LINES[k], on = k===sel, d = 'M'+L2.pts.map(function(p){return p.join(' ');}).join(' L');
      if(!on) return;
      [[0,13],[0.55,13]].forEach(function(b){
        s += '<g opacity="'+(on?1:.4)+'"><circle r="9" fill="#fff" stroke="'+L2.color+'" stroke-width="3"/>'+
          '<path d="M-4.2 -3.2h8.4v5.4h-8.4z" fill="'+L2.color+'"/>'+
          '<animateMotion dur="'+b[1]+'s" repeatCount="indefinite" rotate="0" keyPoints="'+b[0]+';1;'+b[0]+'" keyTimes="0;0.5;1" calcMode="linear" path="'+d+'"/></g>';
      });
    });
    // Qytetarët: pika anonime, që ndizen e fiken — sepse shfaqen VETËM kur app-i është hapur.
    [[74,64],[122,118],[158,92],[196,146],[214,196],[254,232],[96,196],[142,236],[268,178],[62,140],[186,58],[232,120]].forEach(function(c,i){
      s += '<circle class="dotcitizen" cx="'+c[0]+'" cy="'+c[1]+'" r="4.5" fill="#E8833A" style="animation-delay:'+(i*0.53).toFixed(2)+'s"/>';
    });
    var L = LINES[sel];
    L.stops.forEach(function(st, i){
      var p = L.pts[st[1]], end = i===0 || i===L.stops.length-1, right = p[0] < 200;
      s += '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="'+(end?8:6)+'" fill="'+(end?L.color:'#fff')+'" stroke="'+L.color+'" stroke-width="3.5"/>';
      s += '<text x="'+(p[0]+(right?12:-12))+'" y="'+(p[1]+4)+'" text-anchor="'+(right?'start':'end')+'" font-family="Inter,Arial,sans-serif" font-size="11.5" font-weight="'+(end?800:600)+'" fill="'+(state.mode==='dark'?'#E6EAF5':'#1F2937')+'" paint-order="stroke" stroke="'+(state.mode==='dark'?'#141B2E':'#EEF2F8')+'" stroke-width="3">'+st[0]+'</text>';
    });
    return s + '</svg>';
  }

  var views = {
    intro:function(){
      return '<div class="screen" style="padding:0"><div class="intro" id="intro" data-skip="1" role="img" aria-label="Aboneja Ime">'+
        '<span class="glow"></span><div class="tile">'+BUS+'<span class="road"></span></div>'+
        '<div class="name">Aboneja Ime<span class="dot"></span></div>'+
      '</div></div>';
    },
    welcome:function(){
      return '<div class="screen welcome">'+
        '<div class="ctrls">'+
          '<button class="lang" data-theme-toggle aria-label="Ndërro temën">'+(state.mode==='dark'?I.sun:I.moon)+' '+(state.mode==='dark'?'Light':'Dark')+'</button>'+
          '<button class="lang">'+I.globe+' Shqip</button>'+
        '</div>'+
        '<div class="mid"><div class="logo" role="img" aria-label="Aboneja Ime">'+BUS+'</div>'+
          '<h1 class="display">Aboneja Ime</h1>'+
          '<p class="lead type" id="t1" style="max-width:300px" aria-label="Transporti publik i Shqipërisë në dorën tuaj"></p></div>'+
        '<div class="cta"><button class="btn btn-navy" data-go="role" style="max-width:260px">Vazhdo</button>'+
          '<span class="tagline type" id="t2" aria-label="Pa radhë, pa sportele"></span></div>'+
      '</div>';
    },
    role:function(){
      return '<div class="screen">'+
        '<button class="sq" data-go="welcome" aria-label="Kthehu">'+I.back+'</button>'+
        '<h1 class="h" style="font-size:32px;margin-top:24px">Kush je?</h1>'+
        '<div class="who">'+
          '<button class="role main role--blue" data-go="login"><span class="ico">'+I.user+'</span><span><b>Qytetar</b><span class="d">Abonim mujor me identitet shqiptar</span></span></button>'+
          '<button class="role main role--mint" data-go="treg"><span class="ico">'+I.globe2+'</span><span><b>Turist</b><span class="d">Biletë javore për vizitorët</span></span><span class="badge badge-mint" style="margin-left:auto">Së shpejti</span></button>'+
          '<span class="label" style="margin:16px 0 0 4px">Stafi i transportit</span>'+
          '<button class="role minor" data-go="oplogin"><span class="ico">'+I.scan+'</span><span><b>Operator</b><span class="d">Skanon abonimet në autobus</span></span></button>'+
          '<button class="role minor" data-go="stlogin"><span class="ico">'+I.building+'</span><span><b>Staf</b><span class="d">Administrata e kompanisë</span></span></button>'+
        '</div></div>';
    },
    login:function(){
      var hyr = state.tab==='login';
      return '<div class="screen">'+
        '<button class="sq" data-go="role" aria-label="Kthehu">'+I.back+'</button>'+
        '<div style="display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:6px"><div class="logo" style="width:64px;height:64px;border-radius:18px"><span style="width:32px;height:32px;display:block">'+BUS+'</span></div><h1 class="h">'+(hyr?'Hyrje':'Krijo llogari')+'</h1></div>'+
        '<div class="tabs" role="tablist"><button role="tab" data-tab="login" aria-selected="'+hyr+'">Hyr</button><button role="tab" data-tab="new" aria-selected="'+(!hyr)+'">Krijo llogari</button></div>'+
        (hyr
          ? '<div class="card form">'+field('em','Email',I.mail,'arta.kola@shembull.al','email')+field('pw','Fjalëkalimi',I.lock,'demo-demo-demo','password')+
              '<button class="btn btn-navy" data-go="home" style="margin-top:4px">Hyr</button></div>'
          : '<div class="card form"><p style="margin:0;color:var(--ink-2);font-size:15px">Pesë hapa të shkurtër: dokumenti, numri personal, llogaria, kodi në email dhe vulosja.</p>'+
              '<button class="btn btn-electric" data-reg="0">Fillo regjistrimin</button></div>')+
      '</div>';
    },
    reg:function(){
      var n = state.regStep, bars = REG.map(function(_,i){ return '<i class="'+(i<=n?'on':'')+'"></i>'; }).join('');
      var body = '';
      if(n===0) body = '<h1 class="h">Cili dokument?</h1><div style="display:flex;flex-direction:column;gap:10px;margin-top:18px">'+
          '<button class="choice" role="radio" data-doc="id" aria-checked="'+(state.doc==='id')+'"><span class="ico">'+I.idcard+'</span>Kartë identiteti</button>'+
          '<button class="choice" role="radio" data-doc="pp" aria-checked="'+(state.doc==='pp')+'"><span class="ico">'+I.passport+'</span>Pasaportë</button></div>';
      if(n===1) body = '<h1 class="h">Identiteti</h1><p class="sub-h" style="margin-top:6px">Lexohen nga dokumenti — kontrollo dhe vazhdo.</p><div class="card form">'+
          field('nid','NID',I.hash,'J01234567A')+
          field('fn','Emri',I.person,'Arta')+field('ln','Mbiemri',I.person,'Kola')+
          field('dob','Datëlindja',I.cake,'12.04.2001')+
          '<div class="field"><span class="label" style="font-size:14px;font-weight:600;color:var(--ink-2)">Gjinia</span>'+
            '<div class="gender" role="radiogroup" aria-label="Gjinia">'+
              '<button role="radio" data-gender="f" aria-checked="'+(state.gender==='f')+'">'+I.female+' Femër</button>'+
              '<button role="radio" data-gender="m" aria-checked="'+(state.gender==='m')+'">'+I.male+' Mashkull</button>'+
            '</div></div>'+
        '</div>';
      if(n===2) body = '<h1 class="h">Llogaria</h1><div class="card form">'+field('rem','Email',I.mail,'arta.kola@shembull.al','email')+field('rpw','Fjalëkalimi',I.lock,'demo-demo-demo-2026','password')+field('rpw2','Konfirmo fjalëkalimin',I.lock,'demo-demo-demo-2026','password')+
          '<p class="cap" style="display:flex;align-items:center;gap:8px;margin-top:-4px;color:var(--mint)">'+I.check+' Fjalëkalimet përputhen</p></div>';
      if(n===3) body = '<h1 class="h">Kodi në email</h1><p class="sub-h" style="margin-top:8px">Dërguar te a•••@shembull.al</p><div class="card form"><div class="otp">'+'482915'.split('').map(function(d){return '<span class="on">'+d+'</span>';}).join('')+'</div></div>';
      if(n===4) body = '<div class="seal" data-g="'+state.gender+'">'+
          '<span class="rings" aria-hidden="true"><i></i><i></i><i></i></span>'+
          '<span class="disc"><span class="tick">'+I.bigcheck+'</span></span>'+
          '<h1 class="h">Mirë se erdhe, '+(state.gender==='f'?'Arta':'Ardit')+'</h1>'+
          '<span class="mark">LLOGARIA U VULOS</span>'+
          '<p class="sub">Identiteti u lidh me numrin personal. Tani mund të blesh abonimin.</p>'+
        '</div>';
      return '<div class="screen">'+
        '<button class="sq" '+(n===0?'data-go="login"':'data-reg="'+(n-1)+'"')+' aria-label="Kthehu">'+I.back+'</button>'+
        '<div class="steps" aria-hidden="true">'+bars+'</div><p class="stepname">Hapi '+(n+1)+' nga 5 · '+REG[n]+'</p>'+
        '<div style="margin-top:14px">'+body+'</div>'+
        '<div class="spacer" style="min-height:18px"></div>'+
        (n<4 ? '<button class="btn btn-navy" data-reg="'+(n+1)+'">'+(n===3?'Verifiko':'Vazhdo')+'</button>'
             : '<button class="btn btn-neon-'+state.gender+'" data-go="home">Hyr te Kreu</button>')+
      '</div>';
    },
    home:function(){
      var a = cur(), p = prod(a.product), left = ditetMbetur(a.to), pct = Math.round(left/30*100);
      return '<div class="screen">'+
        '<div class="head"><button class="sq" data-drawer="1" aria-label="Menuja">'+I.menu+'</button><div class="avatar" style="width:52px;height:52px;border-radius:16px">'+ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',24)+'</div><div><h1 style="font-size:20px">Mirëseerdhët,<br>Arta!</h1></div><button class="sq" data-soon="1" aria-label="Njoftimet">'+I.bell+'</button></div>'+
        '<section class="card subcard" aria-label="Abonimi aktual">'+
          '<div class="row"><span class="badge badge-mint">Aktiv</span><span class="cap">'+p.name+'</span></div>'+
          '<div class="line" style="margin-top:2px">'+(a.product==='line'?'<span class="linechip">'+code(a.scope)+'</span><span style="font-weight:700;color:var(--ink);font-size:17px">'+place(a.scope)+'</span>':'<span style="font-weight:700;color:var(--ink);font-size:17px">'+scopeLabel(a)+'</span>')+'</div>'+
          countdown('h')+
          '<div class="bar" aria-hidden="true"><i style="width:'+pct+'%"></i></div>'+
        '</section>'+
        '<div class="actions">'+
          '<button class="btn btn-qr-'+state.gender+'" data-qr="'+a.id+'">'+I.qr+' Hap QR-në</button>'+
          '<button class="btn btn-mint" data-go="buy">'+I.cart+' Rinovo abonimin</button>'+
        '</div>'+
        (state.subs.length>1 ? '<button class="mini" data-go="pass">'+I.ticketsm+' Ke '+state.subs.length+' abonime · shiko të gjitha</button>' : '')+
        
      '</div>';
    },
    map:function(){
      var k = state.mapLine, L = LINES[k];
      return '<div class="screen">'+
        '<div class="titlebar"><button class="sq" data-go="home" aria-label="Kthehu">'+I.back+'</button><h1 class="h" style="font-size:26px">Harta live</h1><span class="livebadge" style="margin-left:auto"><i></i>LIVE</span></div>'+
        '<div class="linepick" role="group" aria-label="Linja">'+Object.keys(LINES).map(function(x){ return '<button data-line="'+x+'" aria-pressed="'+(x===k)+'">'+x+'</button>'; }).join('')+'</div>'+
        '<div class="card mapbox">'+mapSvg(k)+
          '<div class="legend"><span><i style="background:'+L.color+'"></i>Linja '+k+'</span><span><i style="background:#fff;box-shadow:0 0 0 2px '+L.color+'"></i>2 autobusë</span><span><i style="background:#E8833A"></i>Qytetarë në app</span></div>'+
          '<div class="mapfoot"><span><b>'+k+'</b> · '+L.name+'</span><span>'+L.stops.length+' stacione</span></div></div>'+
        '<div style="margin-top:14px">'+info(I.route,'Qytetarët shfaqen si pika <b>vetëm kur e kanë app-in hapur</b>, pa emra.')+'</div>'+
      '</div>';
    },
    buy:function(){
      return '<div class="screen">'+
        backbar('home','Bli Abonim')+
        '<div class="card products">'+ PRODUCTS.map(function(p){
          var ka = state.subs.some(function(s){ return s.product===p.id; });
          return '<button class="product'+(ka?' current':'')+'" data-product="'+p.id+'">'+
            '<span class="pn">'+p.name+'</span>'+
            '<span class="pp"><b class="num">'+p.price.toLocaleString('sq-AL')+'</b><span>Lekë/muaj</span></span>'+
            '<span class="pd">'+p.desc+'</span>'+
            (ka?'<span class="badge badge-rose tag">E ke këtë</span>':'')+
          '</button>'; }).join('')+
        '</div>'+
        '<div style="margin-top:16px">'+info(I.clock,'Çdo abonim vlen <b>30 ditë</b> nga çasti i blerjes.')+'</div>'+
      '</div>';
    },
    detail:function(){
      var p = prod(state.selected), to = plus30(NOW);
      if(state.done){
        var neu = state.subs[state.subs.length-1];
        return '<div class="screen">'+
          '<div class="seal" data-g="ok">'+
            '<span class="rings" aria-hidden="true"><i></i><i></i><i></i></span>'+
            '<span class="disc"><span class="tick">'+I.bigcheck+'</span></span>'+
            '<h1 class="h">Abonimi u aktivizua</h1>'+
            '<span class="mark">'+p.short.toUpperCase()+' · 30 DITË</span>'+
            '<p class="sub">'+scopeLabel(neu)+'<br>Vlen deri më <b style="color:var(--ink)">'+data(to)+', '+ora(to)+'</b>.</p>'+
          '</div>'+
          '<div class="spacer" style="min-height:20px"></div>'+
          '<div style="display:flex;flex-direction:column;gap:12px">'+
            '<button class="btn btn-qr-'+state.gender+'" data-qr="'+neu.id+'">'+I.qr+' Hap QR-në</button>'+
            '<button class="btn btn-soft" data-go="pass">Abonimet e mia</button></div>'+
        '</div>';
      }
      return '<div class="screen">'+
        backbar('buy', p.name)+
        '<div class="card detail">'+
          '<div class="price num"><b>'+p.price.toLocaleString('sq-AL')+'</b><span>Lekë/muaj</span></div>'+
          '<ul class="incl">'+p.incl.map(function(x){return '<li>'+I.check+'<span>'+x+'</span></li>';}).join('')+'</ul>'+
          (p.opts.length?'<div style="display:flex;flex-direction:column;gap:8px"><span class="label">'+p.pick+'</span><div class="opts" role="radiogroup" aria-label="'+p.pick+'">'+
            p.opts.map(function(o,i){return '<button class="opt" role="radio" aria-checked="'+(i===state.choice)+'" data-choice="'+i+'"><span>'+o+'</span><span class="radio"></span></button>';}).join('')+
          '</div></div>':'')+
          '<div class="summary"><div><span>Fillon</span><b class="num">Sot, '+ora(NOW)+'</b></div><div><span>Skadon</span><b class="num">'+data(to)+', '+ora(to)+'</b></div><div><span>Totali</span><b class="num">'+lek(p.price)+'</b></div></div>'+
        '</div>'+
        '<div class="spacer" style="min-height:18px"></div>'+
        '<button class="btn btn-mint" data-confirm="1">Konfirmo · '+lek(p.price)+'</button>'+
        '<p class="paynote">Demo · asnjë kartë nuk tarifohet</p>'+
      '</div>';
    },
    pass:function(){
      return '<div class="screen">'+
        backbar('home','Abonimet e mia')+
        '<p class="sub-h" style="margin:2px 0 0 4px">'+state.subs.length+' '+(state.subs.length===1?'abonim aktiv':'abonime aktive')+'</p>'+
        '<div style="display:flex;flex-direction:column;gap:14px;margin-top:16px">'+
        state.subs.map(function(a){
          var p = prod(a.product), yne = a.id===state.primary;
          return '<article class="subitem'+(yne?' primary':'')+'">'+
            '<div class="top"><span class="st">Aktiv</span>'+(yne?'<span class="onhome">'+I.homesm+' Te Kreu</span>':'')+'</div>'+
            '<div class="pn">'+p.name+'</div><div class="ln">'+scopeLabel(a)+'</div>'+
            '<div class="dates num"><div><span>Filloi</span><b>'+data(a.from)+', '+ora(a.from)+'</b></div><div><span>Skadon</span><b>'+data(a.to)+', '+ora(a.to)+'</b></div></div>'+
            '<div class="rowbtns">'+
              '<button class="btn btn-qr-'+state.gender+'" data-qr="'+a.id+'">'+I.qr+' Hap QR-në</button>'+
              (yne ? '' : '<button class="btn btn-ghostwhite" data-primary="'+a.id+'">Vendose te Kreu</button>')+
            '</div>'+
          '</article>';
        }).join('')+
        '</div>'+
        '<button class="btn btn-mint" data-go="buy" style="margin-top:16px">'+I.cart+' Shto abonim</button>'+
        '<div style="margin-top:14px">'+info(I.wifi,'QR-ja vjen nga serveri dhe rifreskohet çdo <b>2 minuta</b>.')+'</div>'+
      '</div>';
    },
    // ── TURISTI (vetëm dizajn, jashtë demos) ────────────────────────────────
    // Turisti ka regjistrimin e vet dhe DATABAZËN E VET: pasaportë në vend të kartës
    // shqiptare, plus shtetin. Identitetet nuk përzihen me ato të qytetarëve.
    treg:function(){
      var n = state.tStep, emrat = ['Identiteti','Origjina','Emaili','Kodi','Gati'];
      var bars = emrat.map(function(_,i){ return '<i class="'+(i<=n?'on':'')+'"></i>'; }).join('');
      var body = '';
      if(n===0) body = '<h1 class="h">Kush je?</h1><p class="sub-h" style="margin-top:6px">Si te pasaporta jote.</p><div class="card form">'+
          field('tfn','Emri',I.person,'Marco')+field('tln','Mbiemri',I.person,'Rossi')+
          field('tnid','Numri i pasaportës',I.hash,'YA1234567')+
          '<div class="field"><span class="label" style="font-size:14px;font-weight:600;color:var(--ink-2)">Gjinia</span>'+
            '<div class="gender" role="radiogroup" aria-label="Gjinia">'+
              '<button role="radio" data-tgender="f" aria-checked="'+(state.tGender==='f')+'">'+I.female+' Femër</button>'+
              '<button role="radio" data-tgender="m" aria-checked="'+(state.tGender==='m')+'">'+I.male+' Mashkull</button>'+
            '</div></div></div>';
      if(n===1) body = '<h1 class="h">Nga vjen?</h1><div class="card form">'+
          field('tdob','Datëlindja',I.cake,'03.07.1994')+field('tcountry','Shteti',I.flag,'Itali')+'</div>';
      if(n===2) body = '<h1 class="h">Emaili</h1><p class="sub-h" style="margin-top:6px">Këtu të vjen bileta, dhe këtu hyn sërish nëse humbet telefonin.</p><div class="card form">'+
          field('tem','Email',I.mail,'marco.rossi@example.it','email')+field('tpw','Fjalëkalimi',I.lock,'demo-demo-demo','password')+'</div>';
      if(n===3) body = '<h1 class="h">Kodi në email</h1><p class="sub-h" style="margin-top:8px">Dërguar te m•••@example.it</p><div class="card form"><div class="otp">'+
          '713904'.split('').map(function(d){ return '<span class="on">'+d+'</span>'; }).join('')+'</div></div>';
      if(n===4) body = '<div class="seal" data-g="'+state.tGender+'">'+
          '<span class="rings" aria-hidden="true"><i></i><i></i><i></i></span>'+
          '<span class="disc"><span class="tick">'+I.bigcheck+'</span></span>'+
          '<h1 class="h">Mirë se erdhe, '+(state.tGender==='f'?'Giulia':'Marco')+'</h1>'+
          '<span class="mark">TURIST I VERIFIKUAR</span>'+
          '<p class="sub">Llogaria u ruajt. Tani zgjidh biletën javore.</p></div>';
      return '<div class="screen">'+
        '<button class="sq" '+(n===0?'data-go="role"':'data-treg="'+(n-1)+'"')+' aria-label="Kthehu">'+I.back+'</button>'+
        '<div class="steps" aria-hidden="true">'+bars+'</div><p class="stepname">Hapi '+(n+1)+' nga 5 · '+emrat[n]+'</p>'+
        '<div style="margin-top:14px">'+body+'</div>'+
        '<div class="spacer" style="min-height:18px"></div>'+
        (n<4 ? '<button class="btn btn-navy" data-treg="'+(n+1)+'">'+(n===3?'Verifiko':'Vazhdo')+'</button>'
             : '<button class="btn btn-neon-'+state.tGender+'" data-go="thome">Hyr te Kreu</button>')+
      '</div>';
    },
    thome:function(){
      var p = TURIST.filter(function(x){ return x.id===state.tprod; })[0] || TURIST[0];
      var emri = state.tGender==='f' ? 'Giulia' : 'Marco';
      return '<div class="screen">'+
        '<div class="head"><button class="sq" data-drawer="1" aria-label="Menuja">'+I.menu+'</button>'+
          '<button class="avatar" data-go="taccount" aria-label="Profili" style="all:unset;cursor:pointer;width:52px;height:52px;border-radius:16px;background:linear-gradient(100deg,#45E0A8,#23CBB4);color:#06302A;display:grid;place-items:center">'+I.globe2+'</button>'+
          '<div><h1 style="font-size:20px">Mirëseerdhe,<br>'+emri+'!</h1></div>'+
          '<button class="sq" data-soon="1" aria-label="Njoftimet">'+I.bell+'</button></div>'+
        (state.tKa
          ? '<section class="card subcard tcard">'+
              '<div class="row"><span class="badge" style="background:rgba(255,255,255,.18);color:#fff">Aktive</span><span style="font-weight:700;opacity:.85">7 ditë</span></div>'+
              '<p class="prod">'+p.name+'</p>'+
              '<div class="line" style="color:rgba(255,255,255,.85)">Skadon '+data(TFUND)+', '+ora(TFUND)+'</div>'+
              countdown('t')+
              '<button class="btn" data-qr="turist" style="margin-top:10px;background:#fff;color:#12564E">'+I.qr+' Hap QR-në</button>'+
            '</section>'
          : '<section class="card subcard" style="align-items:center;text-align:center;gap:10px">'+
              '<span class="tflag" style="align-self:center">'+I.globe2+' Vizitor</span>'+
              '<p class="prod" style="font-size:20px">Ende pa biletë</p>'+
              '<p class="cap">Zgjidh njërën nga tri biletat javore.</p>'+
              '<button class="btn btn-mint" data-go="tbuy" style="margin-top:6px">'+I.cart+' Bli biletën</button>'+
            '</section>')+
        '<div style="margin-top:16px">'+info(I.route,'Harta tregon linjat dhe stacionet e qytetit.')+'</div>'+
      '</div>';
    },
    taccount:function(){
      return '<div class="screen">'+
        backbar('thome','Profili')+
        '<div class="card me"><div class="avatar" style="background:linear-gradient(100deg,#45E0A8,#23CBB4);color:#06302A">'+(state.tGender==='f'?'GR':'MR')+'</div>'+
          '<div><b>'+(state.tGender==='f'?'Giulia Rossi':'Marco Rossi')+'</b><span class="cap">marco.rossi@example.it</span>'+
          '<div style="margin-top:6px"><span class="tflag">'+I.flag+' Itali</span></div></div></div>'+
        '<div class="card settings">'+
          '<button class="setting"><span class="si">'+I.hash+'</span>Pasaporta<span class="end">YA••••567</span></button>'+
          '<button class="setting"><span class="si">'+I.cake+'</span>Datëlindja<span class="end">03.07.1994</span></button>'+
          '<button class="setting" data-lang="1"><span class="si">'+I.lang+'</span>Gjuha<span class="end">Shqip</span></button>'+
          '<div class="setting" style="cursor:default"><span class="si">'+I.moon+'</span>Tema<div class="seg" role="group" aria-label="Tema">'+
            '<button data-setmode="light" aria-pressed="'+(state.mode==='light')+'">Light</button><button data-setmode="dark" aria-pressed="'+(state.mode==='dark')+'">Dark</button></div></div>'+
          '<button class="setting" data-soon="1"><span class="si">'+I.history+'</span>Biletat e mëparshme</button>'+
        '</div>'+
        '<div style="margin-top:14px">'+info(I.info,'Të dhënat e turistëve rrinë te <b>databaza e tyre</b>, e ndarë nga ajo e qytetarëve.')+'</div>'+
        '<div class="spacer" style="min-height:18px"></div>'+
        '<button class="btn btn-danger" data-go="welcome">Dil nga llogaria</button>'+
      '</div>';
    },
    tbuy:function(){
      return '<div class="screen">'+
        '<div class="titlebar"><button class="sq" data-go="thome" aria-label="Kthehu">'+I.back+'</button><h1 class="h" style="font-size:24px">Biletë javore</h1><span class="badge badge-mint" style="margin-left:auto">Së shpejti</span></div>'+
        '<p class="sub-h" style="margin-top:6px">Shtatë ditë udhëtime pa kufi.</p>'+
        '<div class="card products" style="margin-top:18px">'+ TURIST.map(function(p){
          return '<button class="product" data-tprod="'+p.id+'">'+
            '<span class="pn">'+p.name+'</span>'+
            '<span class="pp"><b class="num">'+p.price.toLocaleString('sq-AL')+'</b><span>Lekë / 7 ditë</span></span>'+
            '<span class="pd">'+p.scope+'</span>'+
          '</button>'; }).join('')+
        '</div>'+
        '<div style="margin-top:16px">'+info(I.info,'Turisti paguan me kartë dhe merr QR-në në çast. Nuk i kërkohet identitet.')+'</div>'+
      '</div>';
    },
    tpass:function(){
      var p = TURIST.filter(function(x){ return x.id===state.tprod; })[0] || TURIST[0];
      var nis = new Date(TFUND.getTime() - 7*86400000);
      return '<div class="screen">'+
        '<div class="titlebar"><button class="sq" data-go="thome" aria-label="Kthehu">'+I.back+'</button><h1 class="h" style="font-size:24px">Biletat e mia</h1></div>'+
        '<article class="card pass" style="margin-top:16px">'+
          '<div class="pass-top"><span class="ok">'+I.okcheck+'</span><div><b>Mund të udhëtosh tani</b><span>Skadon '+data(TFUND)+', '+ora(TFUND)+'</span></div></div>'+
          '<div class="pass-body">'+
            '<div style="padding:0 2px">'+countdown('t')+'</div>'+
            '<div class="kv">'+
              '<div><span class="label">Bileta</span><b>'+p.name+'</b></div>'+
              '<div><span class="label">Çmimi</span><b class="num">'+p.price.toLocaleString('sq-AL')+' L</b></div>'+
              '<div><span class="label">Vlen</span><b class="num">'+data(nis)+' – '+data(TFUND)+'</b></div>'+
              '<div><span class="label">Udhëtime</span><b>Pa kufi</b></div>'+
            '</div>'+
            '<button class="btn btn-neon-'+state.tGender+'" data-qr="turist">'+I.qr+' Hap QR-në</button>'+
          '</div>'+
        '</article>'+
        '<div class="actions" style="margin-top:16px"><button class="btn btn-soft" data-go="map">'+I.pin+' Harta e linjave</button></div>'+
      '</div>';
    },
    // ── OPERATORI ───────────────────────────────────────────────────────────
    oplogin:function(){
      return '<div class="screen">'+
        '<button class="sq" data-go="role" aria-label="Kthehu">'+I.back+'</button>'+
        '<div style="display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:10px">'+
          '<span class="ico" style="width:64px;height:64px;border-radius:18px;background:var(--navy-grad);color:#fff;display:grid;place-items:center">'+I.scan+'</span>'+
          '<h1 class="h">Hyrje operatori</h1><p class="sub-h">Faturino ose kontrollor</p></div>'+
        '<div class="card form">'+field('opem','Email',I.mail,'faturino@kompania-veriu.al','email')+field('oppw','Fjalëkalimi',I.lock,'demo-demo-demo','password')+
          '<button class="btn btn-navy" data-go="tmode">Hyr</button></div>'+
      '</div>';
    },
    // Dy lloje terminali — të dyja çiftëzohen njësoj, ndryshon kush e mban dhe sa zgjat.
    tmode:function(){
      return '<div class="screen">'+
        '<button class="sq" data-go="oplogin" aria-label="Kthehu">'+I.back+'</button>'+
        '<h1 class="h" style="margin-top:20px">Ç’terminal është ky?</h1>'+
        '<p class="sub-h">Zgjidhet një herë për pajisjen.</p>'+
        '<div style="display:flex;flex-direction:column;gap:12px;margin-top:20px">'+
          '<button class="choice" style="align-items:flex-start;flex-direction:column;gap:10px" data-tmode="bus">'+
            '<span style="display:flex;align-items:center;gap:14px"><span class="ico">'+I.bus+'</span>Pajisje e autobusit</span>'+
            '<span style="font-weight:500;font-size:14px;color:var(--ink-3);line-height:1.4">E fiksuar te dera. Rri e çiftëzuar edhe kur ndërrohet turni. Udhëtari e skanon vetë.</span>'+
          '</button>'+
          '<button class="choice" style="align-items:flex-start;flex-direction:column;gap:10px" data-tmode="hand">'+
            '<span style="display:flex;align-items:center;gap:14px"><span class="ico">'+I.scan+'</span>Terminal dore</span>'+
            '<span style="font-weight:500;font-size:14px;color:var(--ink-3);line-height:1.4">E mban faturino ose kontrollori. Çiftëzimi bie kur mbyllet turni.</span>'+
          '</button>'+
        '</div>'+
        '<div style="margin-top:16px">'+info(I.info,'Të dyja çiftëzohen me kod dhe sekret. Linjën e cakton administrata te terminali.')+'</div>'+
      '</div>';
    },
    pair:function(){
      var bus = state.tmode==='bus';
      return '<div class="screen">'+
        '<button class="sq" data-go="tmode" aria-label="Kthehu">'+I.back+'</button>'+
        '<span class="badge badge-mint" style="margin-top:18px;align-self:flex-start">'+(bus?'Pajisje e autobusit':'Terminal dore')+'</span>'+
        '<h1 class="h" style="margin-top:10px">Çiftëzo terminalin</h1>'+
        '<p class="sub-h">'+(bus?'Çiftëzohet një herë dhe rri ashtu.':'Kodi dhe sekreti rrinë vetëm në këtë pajisje, sa zgjat turni.')+'</p>'+
        '<div class="card form">'+field('tcode','Kodi i pajisjes',I.hash, bus?'BUS-L7-014':'DORE-L7-207')+field('tsec','Sekreti',I.lock,'••••••••••••','password')+
          '<button class="btn btn-mint" data-pair="1">Çiftëzo dhe vazhdo</button></div>'+
        '<div style="margin-top:14px">'+info(I.route,'Linja vendoset nga administrata te terminali, jo nga skanimi. Terminal pa linjë nuk lejon kalim.')+'</div>'+
      '</div>';
    },
    camera:function(){
      return '<div class="screen" style="justify-content:center;align-items:center;text-align:center">'+
        '<span class="ico" style="width:96px;height:96px;border-radius:28px;background:var(--navy-grad);color:#fff;display:grid;place-items:center">'+I.cam+'</span>'+
        '<h1 class="h" style="margin-top:20px">Aboneja kërkon kamerën</h1>'+
        '<p class="sub-h" style="max-width:300px;margin-top:8px">Kamera përdoret vetëm për të lexuar QR-në. Asnjë figurë nuk ruhet dhe nuk dërgohet.</p>'+
        '<div style="width:100%;margin-top:26px;display:flex;flex-direction:column;gap:10px">'+
          '<button class="btn btn-navy" data-cam="ok">Lejo kamerën</button>'+
          '<button class="btn btn-soft" data-cam="jo">Jo tani</button>'+
        '</div>'+
      '</div>';
    },
    scan:function(){
      if(!state.paired) return views.tmode();
      if(!state.cam) return views.camera();
      var bus = state.tmode==='bus';
      return '<div class="screen">'+
        opbar()+
        (state.camDenied ? (info(I.info,'Kamera është e bllokuar. Përdor <b>Verifiko me kod</b>, ose lejoje sërish.')+
          '<button class="btn btn-navy" style="margin-top:14px" data-cam="ok">'+I.cam2+' Lejo kamerën</button>') :
        '<div class="viewfinder"><div class="frame"><i></i><i></i><i></i><i></i><span class="laser"></span></div><p>'+(bus?'Udhëtari e afron QR-në te lexuesi':'Drejtoje kamerën nga QR-ja e udhëtarit')+'</p></div>')+
        '<span class="label" style="margin-top:18px;display:block">Demo · zgjidh përgjigjen e serverit</span>'+
        '<div class="scenarios">'+ VERDIKTET.map(function(v,i){
          return '<button class="scen" data-verdict="'+i+'">'+v.t.charAt(0)+v.t.slice(1).toLowerCase()+'<small class="v-'+v.k+'">'+v.res+'</small></button>';
        }).join('')+'</div>'+
      '</div>';
    },
    scanres:function(){
      var v = VERDIKTET[state.verdict] || VERDIKTET[0];
      return '<div class="screen">'+
        opbar()+
        '<div class="verdict '+v.k+'">'+
          '<div class="ico">'+(v.k==='ok'?I.bigcheck:(v.k==='info'?I.info:I.x))+'</div>'+
          '<h2>'+v.t+'</h2><p class="why">'+v.why+'</p>'+
          '<span class="rc">'+v.res+' · '+v.rc+'</span>'+
          (v.k==='ok' ? '<div class="who"><span class="photo" style="display:grid;place-items:center;font-weight:800">AK</span><div><b>Arta Kola</b><span>Abonim i Linjës · deri 12 tetor</span></div></div>' : '')+
        '</div>'+
        '<div style="display:flex;flex-direction:column;gap:10px;margin-top:18px">'+
          '<button class="btn btn-navy" data-go="scan">Skano tjetrin</button>'+
          (v.k!=='ok' ? '<button class="btn btn-soft" data-go="verify">Verifiko me kod</button>' : '')+
        '</div>'+
      '</div>';
    },
    verify:function(){
      return '<div class="screen">'+
        '<h1 class="h">Verifikim me kod</h1>'+
        '<p class="sub-h">Kur kamera nuk lexon dot — kodi shkruhet me dorë.</p>'+
        '<div class="card form">'+field('vcode','Kodi i abonimit',I.hash,'ABN-7Q4K-2MX9')+
          '<button class="btn btn-navy" data-verdict="0">Verifiko</button></div>'+
        '<div style="margin-top:14px">'+info(I.info,'Verifikimi manual regjistrohet njësoj si skanimi.')+'</div>'+
      '</div>';
    },
    // ── STAFI ───────────────────────────────────────────────────────────────
    stlogin:function(){
      return '<div class="screen">'+
        '<button class="sq" data-go="role" aria-label="Kthehu">'+I.back+'</button>'+
        '<div style="display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:10px">'+
          '<span class="ico" style="width:64px;height:64px;border-radius:18px;background:var(--navy-grad);color:#fff;display:grid;place-items:center">'+I.building+'</span>'+
          '<h1 class="h">Hyrje stafi</h1><p class="sub-h">Administrata e kompanisë</p></div>'+
        '<div class="card form">'+field('stem','Email',I.mail,'admin@kompania-veriu.al','email')+field('stpw','Fjalëkalimi',I.lock,'demo-demo-demo','password')+
          '<button class="btn btn-navy" data-go="staff">Hyr</button></div>'+
      '</div>';
    },
    staff:function(){
      var s = state.stTab;
      return '<div class="screen">'+
        '<div class="head"><div class="avatar" style="width:52px;height:52px;border-radius:16px">'+I.building+'</div><div><h1 style="font-size:20px">Kompania Veriu<br><span style="font-weight:600;font-size:14px;color:var(--ink-3)">Paneli i V1 · shtator 2026</span></h1></div><button class="sq" data-go="welcome" aria-label="Dil">'+I.logout+'</button></div>'+
        '<div class="sttabs" role="tablist">'+
          [['live','Live'],['para','Paratë'],['kerkesa','Kërkesat'],['term','Terminalet']].map(function(x){
            return '<button role="tab" data-sttab="'+x[0]+'" aria-selected="'+(s===x[0])+'">'+x[1]+(x[0]==='kerkesa'?'<i class="dotn">2</i>':'')+'</button>';
          }).join('')+
        '</div>'+
        (s==='live' ? (
          '<div class="stat">'+
            '<div><b class="num" id="lv-scan">1 342</b><span>Skanime sot</span></div>'+
            '<div><b class="num" id="lv-now">7</b><span>Në autobus tani</span></div>'+
            '<div><b class="num">96</b><span>Abonime aktive</span></div>'+
            '<div><b class="num">3 / 4</b><span>Terminale online</span></div>'+
          '</div>'+
          '<div style="display:flex;align-items:center;gap:10px;margin-top:18px"><span class="livebadge"><i></i>LIVE</span><span class="cap">skanimet e fundit</span></div>'+
          '<div class="feed" id="feed"></div>'
        ) : '')+
        (s==='para' ? (
          '<section class="card split" aria-label="Ndarja e të ardhurave">'+
            '<b style="font-size:17px">Ndarja e të ardhurave</b>'+
            '<div class="splitbar" aria-hidden="true"><i style="width:72%;background:#2C3D62"></i><i style="width:18%;background:#21BFB0"></i><i style="width:10%;background:#E8833A"></i></div>'+
            '<div class="row2"><i style="background:#2C3D62"></i>Kompania<b class="num">179 000 L</b></div>'+
            '<div class="row2"><i style="background:#21BFB0"></i>Poli universal<b class="num">44 700 L</b></div>'+
            '<div class="row2"><i style="background:#E8833A"></i>Komisioni i platformës<b class="num">24 900 L</b></div>'+
          '</section>'+
          '<div class="stat">'+
            '<div><b class="num">248 600 L</b><span>Bruto shtator</span></div>'+
            '<div><b class="num">179 000 L</b><span>Neto për ty</span></div>'+
            '<div><b class="num">44 700 L</b><span>Nga poli universal</span></div>'+
            '<div><b class="num">62 400 L</b><span>Gati për tërheqje</span></div>'+
          '</div>'+
          '<div style="margin-top:14px">'+info(I.info,'Komisioni sot është <b>shadow fee</b>: shifra del, paraja nuk lëviz derisa të hapet porta.')+'</div>'+
          '<button class="btn btn-mint" style="margin-top:14px" data-req="1">'+I.wallet+' Kërko tërheqje</button>'
        ) : '')+
        (s==='kerkesa' ? (
          '<div class="reqs">'+
            REQ.map(function(r,i){
              return '<article class="req"><div class="rtop"><span class="badge '+(r.st==='pret'?'badge-rose':(r.st==='ok'?'badge-mint':'badge-pink'))+'">'+(r.st==='pret'?'Pret':(r.st==='ok'?'Miratuar':'Refuzuar'))+'</span><b class="num">'+r.shuma+'</b></div>'+
                '<div class="rwho">'+r.kush+'</div><div class="cap">'+r.kur+' · '+r.lloj+'</div>'+
                (r.st==='pret' ? '<div class="rowbtns"><button class="btn btn-mint" style="min-height:44px;font-size:14px" data-req-ok="'+i+'">Mirato</button><button class="btn btn-soft" style="min-height:44px;font-size:14px" data-req-no="'+i+'">Refuzo</button></div>' : '')+
              '</article>';
            }).join('')+
          '</div>'+
          '<div style="margin-top:14px">'+info(I.info,'Çdo miratim shkruhet te regjistri i parave dhe nuk fshihet.')+'</div>'
        ) : '')+
        (s==='term' ? (
          '<div class="reqs">'+
            TERMINALET.map(function(t){
              return '<article class="req"><div class="rtop"><span class="tchip">'+t.kod+'</span><span class="badge '+(t.on?'badge-mint':'badge-pink')+'">'+(t.on?'Online':'Offline')+'</span></div>'+
                '<div class="rwho">'+t.lloj+' · Linja '+t.linja+'</div><div class="cap">'+t.info+'</div></article>';
            }).join('')+
          '</div>'+
          '<div style="margin-top:14px">'+info(I.route,'Terminal pa linjë refuzon çdo abonim linje. Linjën e cakton ti këtu.')+'</div>'+
          '<button class="btn btn-soft" style="margin-top:14px" data-soon="1">'+I.plus+' Shto terminal</button>'
        ) : '')+
      '</div>';
    },
    account:function(){
      return '<div class="screen">'+
        '<h1 class="h">Llogaria</h1>'+
        '<div class="card me"><div class="avatar">AK</div><div><b>Arta Kola</b><span class="cap">arta.kola@shembull.al</span><div style="margin-top:6px"><span class="badge badge-mint">E verifikuar</span></div></div></div>'+
        '<div class="card settings">'+
          '<button class="setting" data-lang="1"><span class="si">'+I.lang+'</span>Gjuha<span class="end">Shqip</span></button>'+
          '<div class="setting" style="cursor:default"><span class="si">'+I.moon+'</span>Tema<div class="seg" role="group" aria-label="Tema">'+
            '<button data-setmode="light" aria-pressed="'+(state.mode==='light')+'">Light</button><button data-setmode="dark" aria-pressed="'+(state.mode==='dark')+'">Dark</button></div></div>'+
          '<button class="setting" data-notif="1"><span class="si">'+I.bellsm+'</span>Njoftimet<span class="switch" data-on="'+state.notif+'"></span></button>'+
          '<button class="setting" data-soon="1"><span class="si">'+I.help+'</span>Ndihmë</button>'+
        '</div>'+
        '<div class="spacer" style="min-height:20px"></div>'+
        '<button class="btn btn-danger" data-go="welcome">Dil nga llogaria</button>'+
      '</div>';
    }
  };

  function drawer(){
    var a = cur(), p = prod(a.product), tani = state.screen;
    function mi(go,label,icon,cls){ return '<button class="mi'+(cls?' '+cls:'')+'" data-go="'+go+'"'+(go===tani?' aria-current="page"':'')+'><span class="si">'+icon+'</span>'+label+'</button>'; }
    return '<div class="drawer-bg" data-closedrawer="1"></div><nav class="drawer" aria-label="Menuja">'+
      '<div class="me2"><span class="photo">AK</span><div><b>Arta Kola</b><span class="cap">Qytetar</span></div></div>'+
      '<div class="act"><span>'+p.short+' · '+(a.product==='line'?code(a.scope):scopeLabel(a))+'</span><b class="num">'+ditetMbetur(a.to)+' ditë</b></div>'+
      '<h4>Navigimi</h4>'+
      mi('home','Kreu',I.homesm)+mi('map','Harta',I.pinsm)+mi('buy','Bli Abonim',I.plussm)+mi('pass','Abonimet e mia',I.ticketsm)+
      mi('account','Profili',I.usersm)+
      '<button class="mi sub" data-soon="1"><span class="si">'+I.history+'</span>Historiku i udhëtimeve</button>'+
      '<button class="mi sub" data-lang="1"><span class="si">'+I.lang+'</span>Gjuha · Shqip</button>'+
      '<div class="spacer" style="min-height:14px"></div>'+
      mi('welcome','Dil',I.logout,'out')+
    '</nav>';
  }
  function qrModal(){
    // Turisti hap të njëjtën dritare, me biletën e vet.
    var turist = state.qrSub === 'turist';
    var tp = TURIST.filter(function(x){ return x.id===state.tprod; })[0] || TURIST[0];
    var a = turist ? {product:'t', scope:tp.name, to:TFUND} : sub(state.qrSub);
    var p = turist ? {name:'Biletë javore', short:'Javore'} : prod(a.product);
    var qr = state.online
      ? '<div class="qrframe"><svg class="ring" viewBox="0 0 240 240" aria-hidden="true"><circle cx="120" cy="120" r="115" fill="none" stroke="var(--line-soft)" stroke-width="5"/><circle id="ring" cx="120" cy="120" r="115" fill="none" stroke="#6EB984" stroke-width="5" stroke-linecap="round" stroke-dasharray="722.6" stroke-dashoffset="0"/></svg><div class="qrwrap"><div class="qr" id="qr" role="img" aria-label="Kodi QR i abonimit"></div></div></div>'+
        '<p class="timer">'+I.clock+'<span>Rifreskohet pas <b id="secs">2:00</b></span></p>'+
        '<p class="cap" style="text-align:center;margin:-6px 0 0">QR-ja vjen nga serveri dhe kërkon internet.</p>'
      : '<div class="offline" style="align-self:center">'+I.wifioff+'<b>Pa internet</b><span>Lidhuni dhe QR-ja shfaqet vetë.</span></div>';
    return '<div class="qrmodal-bg" data-closeqr="1"><div class="qrmodal" data-g="'+state.gender+'" role="dialog" aria-label="QR e abonimit">'+
      '<div class="qh"><small>'+(turist?'Biletë javore':'Abonim mujor')+'</small><b>'+(turist?tp.name:p.name)+'</b><span>'+(turist?'7 ditë':scopeLabel(a))+'</span><button class="x" data-closeqr="1" aria-label="Mbyll">'+I.x+'</button></div>'+
      '<div class="face"><span class="photo">'+(turist?(state.tGender==='f'?'GR':'MR'):'AK')+'</span><small>Fotoja për kontrollorin</small></div>'+
      '<div class="qb">'+qr+
        '<div class="rows"><div><span>Udhëtari</span><b>'+(turist?(state.tGender==='f'?'Giulia Rossi':'Marco Rossi'):'Arta Kola')+'</b></div><div><span>Skadon</span><b class="num">'+data(a.to)+', '+ora(a.to)+'</b></div><div><span>Statusi</span><b style="color:var(--mint)">I vlefshëm</b></div></div>'+
      '</div></div></div>';
  }

  // Shiriti: Kreu · Harta · Bli · Abonimet e mia. Llogaria hapet nga cepi (avatari te Kreu).
  var TABS = [['home','Kreu',I.home],['map','Harta',I.pin],['buy','Bli',I.plus],['pass','Abonimet e mia',I.ticket]];
  var TAB_OF = {home:'home',map:'map',buy:'buy',detail:'buy',pass:'pass',account:'home'};
  // Turisti ka të njëjtën formë, me biletat e veta.
  var TABS_T = [['thome','Kreu',I.home],['map','Harta',I.pin],['tbuy','Bli',I.plus],['tpass','Biletat e mia',I.ticket]];
  var TAB_OF_T = {thome:'thome',tbuy:'tbuy',tpass:'tpass',taccount:'thome'};
  // Operatori ka dy sipërfaqe në V1 — `Scanner` dhe `VerifyTicket` (src/lib/edicioni.js).
  var TABS_OP = [['scan','Skano',I.scan],['verify','Verifiko',I.hash]];
  var TAB_OF_OP = {scan:'scan',scanres:'scan',verify:'verify'};
  var tick = null, introTimer = null, typeTimers = [], cdTick = null;

  function drawQR(){
    var q = document.getElementById('qr'); if(!q) return;
    q.innerHTML = '';
    if(window.QRCode){ new QRCode(q,{text:'aboneja:pass:'+state.pass.token,width:344,height:344,colorDark:'#2C3D62',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M}); }
    else { q.textContent = state.pass.token; }
  }
  function runTimer(){
    clearInterval(tick);
    if(!state.qrOpen || !state.online) return;
    if(!state.pass.token || state.pass.expires - Date.now() <= MARZHI*1000) merrPas();
    drawQR();
    var ring = document.getElementById('ring'), secs = document.getElementById('secs');
    function upd(){
      var left = Math.max(0, state.pass.expires - Date.now());
      if(left <= MARZHI*1000){ merrPas(); drawQR(); left = state.pass.expires - Date.now(); }
      var s = Math.ceil(left/1000);
      if(secs) secs.textContent = Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
      if(ring) ring.setAttribute('stroke-dashoffset', String(722.6 * (1 - left/(TTL*1000))));
    }
    upd(); tick = setInterval(upd, 500);
  }
  // Shkrimi: secili rresht shkruhet për 1.38 s; pas të dytit, etiketa «vuloset».
  function typeInto(el, text, ms, done){
    var i = 0, step = ms / text.length;
    el.innerHTML = '<span class="tx"></span><span class="caret"></span>';
    var tx = el.firstChild;
    (function next(){
      if(state.screen!=='welcome') return;
      tx.textContent = text.slice(0, ++i);
      if(i < text.length) typeTimers.push(setTimeout(next, step));
      else { el.classList.add('done'); if(done) done(); }
    })();
  }
  function runTyping(){
    typeTimers.forEach(clearTimeout); typeTimers = [];
    var t1 = document.getElementById('t1'), t2 = document.getElementById('t2');
    if(!t1 || !t2) return;
    var s1 = t1.getAttribute('aria-label'), s2 = t2.getAttribute('aria-label');
    if(state.lang==='en'){ s1 = EN[s1] || s1; s2 = EN[s2] || s2; }
    if(reduced || state.typed){ t1.textContent = s1; t2.textContent = s2; t2.classList.add('on'); return; }
    typeTimers.push(setTimeout(function(){
      typeInto(t1, s1, 1380, function(){
        t2.classList.add('on');
        typeInto(t2, s2, 1380, function(){ state.typed = true; });   // pa vulë — vetëm shkrim
      });
    }, 340));   // pauzë 0.34 s para se të nisë shkrimi
  }

  function renderOverlay(){
    $overlay.innerHTML = (state.drawer ? drawer() : '') + (state.qrOpen ? qrModal() : '') +
      (state.toast ? '<div class="toast2" role="status">'+I.info+'<span>'+state.toast+'</span></div>' : '');
    perkthe();
    runTimer();
  }
  var toastTimer = null;
  function thuaj(msg){
    state.toast = msg; renderOverlay();
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ state.toast = null; renderOverlay(); }, 2600);
  }
  function render(){
    $phone.dataset.mode = state.mode;
    if(state.screen==='intro') $phone.setAttribute('data-intro',''); else $phone.removeAttribute('data-intro');
    var tmp = document.createElement('div'); tmp.innerHTML = views[state.screen]();
    var fresh = tmp.firstChild; fresh.id = 'screen'; $screen.replaceWith(fresh); $screen = fresh;
    var op = TAB_OF_OP[state.screen], tu = TAB_OF_T[state.screen];
    var tab = op || tu || TAB_OF[state.screen];
    var lista = op ? TABS_OP : (tu ? TABS_T : TABS);
    $tabbar.hidden = !tab;
    $tabbar.style.gridTemplateColumns = 'repeat('+lista.length+',1fr)';
    $tabbar.innerHTML = lista.map(function(t){ return '<button class="tab'+(t[0]==='buy'?' buy':'')+'" data-go="'+t[0]+'"'+(t[0]===tab?' aria-current="page"':'')+'><span class="ic">'+t[2]+'</span><span>'+t[1]+'</span></button>'; }).join('');
    $jump.innerHTML = SCREENS.map(function(s,i){ return '<button type="button" data-go="'+s[0]+'" aria-current="'+(s[0]===state.screen)+'"><span>'+String(i).padStart(2,'0')+'</span>'+s[1]+'</button>'; }).join('');
    document.getElementById('m-light').setAttribute('aria-pressed', state.mode==='light');
    document.getElementById('m-dark').setAttribute('aria-pressed', state.mode==='dark');
    document.getElementById('net').setAttribute('aria-checked', String(state.online));
    perkthe();
    renderOverlay();
    runCountdown();
    runFeed();
    var qt = document.getElementById('qr-t');
    if(qt && window.QRCode){ qt.innerHTML = ''; new QRCode(qt,{text:'aboneja:turist:demo-7d',width:344,height:344,colorDark:'#2C3D62',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M}); }
    if(state.screen==='welcome') runTyping();
    clearTimeout(introTimer);
    if(state.screen==='intro') introTimer = setTimeout(leaveIntro, reduced ? 900 : 2400);
  }
  function leaveIntro(){
    var el = document.getElementById('intro');
    if(!el || state.screen!=='intro') return;
    el.classList.add('out');
    setTimeout(function(){ if(state.screen==='intro') go('welcome'); }, 330);
  }
  function go(s){ state.screen = s; state.drawer = false; state.qrOpen = false; if(s!=='detail') state.done=false; if(s!=='role') state.roleNote=false; render(); }
  function setMode(m){ state.mode = m; try{ localStorage.setItem('aboneja-proto-mode', m); }catch(e){} render(); }

  document.addEventListener('click', function(e){
    if(e.target.closest('[data-skip]')){ leaveIntro(); return; }
    var c = e.target.closest('[data-closeqr]');
    if(c && (c.classList.contains('x') || e.target===c)){ state.qrOpen = false; renderOverlay(); return; }
    if(e.target.closest('[data-closedrawer]')){ state.drawer = false; renderOverlay(); return; }
    var t = e.target.closest('button'); if(!t) return;
    if(t.id==='hold') return;
    if(t.dataset.themeToggle!==undefined){ setMode(state.mode==='dark'?'light':'dark'); return; }
    if(t.classList.contains('lang') || t.dataset.lang){ state.lang = state.lang==='sq' ? 'en' : 'sq'; render(); return; }
    if(t.dataset.soon){ thuaj(state.lang==='en' ? 'This part comes after the prototype.' : 'Kjo pjesë vjen pas prototipit.'); return; }
    if(t.id==='net'){ state.online = !state.online; if(state.online) state.pass.token = null; render(); return; }
    if(t.id==='replay'){ state.typed = false; go('intro'); return; }
    if(t.dataset.go){ if(t.dataset.go==='reg'){ state.regStep = 0; } go(t.dataset.go); return; }
    if(t.dataset.drawer){ state.drawer = true; renderOverlay(); return; }
    if(t.dataset.tab){ state.tab = t.dataset.tab; render(); return; }
    if(t.dataset.reg){ state.regStep = +t.dataset.reg; if(state.screen!=='reg'){ go('reg'); } else render(); return; }
    if(t.dataset.doc){ state.doc = t.dataset.doc; render(); return; }
    if(t.dataset.gender){ state.gender = t.dataset.gender; render(); return; }
    if(t.dataset.tmode){ state.tmode = t.dataset.tmode; go('pair'); return; }
    if(t.dataset.tprod){ state.tprod = t.dataset.tprod; state.tKa = true; go('tpass'); return; }
    if(t.dataset.treg){ state.tStep = +t.dataset.treg; if(state.screen!=='treg'){ go('treg'); } else render(); return; }
    if(t.dataset.tgender){ state.tGender = t.dataset.tgender; render(); return; }
    if(t.dataset.pair){ state.paired = true; go('scan'); return; }
    if(t.dataset.cam){ state.cam = true; state.camDenied = (t.dataset.cam==='jo'); go(state.camDenied ? 'verify' : 'scan'); return; }
    if(t.dataset.logout){
      var bus = state.tmode==='bus';
      state.paired = false; state.cam = false; state.camDenied = false;
      go(bus ? 'tmode' : 'oplogin');
      thuaj(bus ? 'Pajisja u shkëput nga terminali.' : 'Turni u mbyll. Çiftëzimi ra.');
      return;
    }
    if(t.dataset.sttab){ state.stTab = t.dataset.sttab; render(); return; }
    if(t.dataset.req){ thuaj('Kërkesa për tërheqje u dërgua — pret miratimin.'); return; }
    if(t.dataset.reqOk){ REQ[+t.dataset.reqOk].st = 'ok'; render(); thuaj('U miratua. Shkruhet te regjistri i parave.'); return; }
    if(t.dataset.reqNo){ REQ[+t.dataset.reqNo].st = 'jo'; render(); thuaj('U refuzua.'); return; }
    if(t.dataset.verdict){ state.verdict = +t.dataset.verdict; go('scanres'); return; }
    if(t.dataset.line){ state.mapLine = t.dataset.line; render(); return; }
    if(t.dataset.mode){ setMode(t.dataset.mode); return; }
    if(t.dataset.setmode){ setMode(t.dataset.setmode); return; }
    if(t.dataset.note){ state.roleNote = true; render(); return; }
    if(t.dataset.product){ state.selected = t.dataset.product; state.choice = 0; state.done = false; go('detail'); return; }
    if(t.dataset.choice){ state.choice = +t.dataset.choice; render(); return; }
    if(t.dataset.notif){ state.notif = !state.notif; render(); return; }
    if(t.dataset.confirm){
      var p = prod(state.selected);
      var id = 's' + (++state.nr);
      var neu = {id:id, product:p.id, scope:p.opts.length?p.opts[state.choice]:'Të gjitha linjat', from:new Date(NOW.getTime())};
      neu.to = plus30(neu.from);
      state.subs.push(neu);        // abonimet e vjetra nuk zhduken — dalin te «Abonimet e mia»
      state.primary = id;
      state.pass.token = null;
      state.done = true; render(); return;
    }
    if(t.dataset.primary){ state.primary = t.dataset.primary; render(); return; }
    if(t.dataset.qr){ state.qrSub = t.dataset.qr; state.pass.token = null; state.qrOpen = true; renderOverlay(); return; }
  });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && (state.qrOpen || state.drawer)){ state.qrOpen = false; state.drawer = false; renderOverlay(); } });
  render();
})();
