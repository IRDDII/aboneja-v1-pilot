// ── Hyrja e demos: tekst → mbajtje → tretje (6,70 s) ─────────────────────────────
//
// Skript klasik në <head>: klasa `me-hyrje-demo` duhet të jetë te <html> para vizatimit
// të parë, përndryshe demoja shfaqet një çast dhe mbulohet.
//
// Kohët rrinë te hyrja-demo.css (:root, `--hd-*`). Ky skedar i lexon që andej; ora e vetme
// është animacioni i vetë mbulesës — numëruesi lexon kohën e tij, jo një orë të dytë,
// prandaj numri dhe tretja nuk ndahen kurrë.
//
// Nuk shfaqet kur: kërkohet më pak lëvizje · adresa hap një ekran direkt (#qytetar,
// #turist… — Kabina i përdor këto) · është parë një herë në këtë sesion.
// `?hyrja` e shfaq sërish për provë. Çdo klik, tast, rrotullim ose prekje e kalon.
(function () {
  var html = document.documentElement;
  var shfaq = false;
  try {
    var detyruar = /(?:^|[?&])hyrja(?:[=&]|$)/.test(location.search.slice(1));
    var paLevizje = Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    shfaq = !paLevizje && (detyruar || !(location.hash && location.hash.length > 1));
    if (shfaq && !detyruar) {
      try {
        if (window.sessionStorage.getItem('aboneja-demo-hyrja')) shfaq = false;
        else window.sessionStorage.setItem('aboneja-demo-hyrja', '1');
      } catch { /* dritare private: shfaqet, pa kujtesë */ }
    }
    if (shfaq) html.classList.add('me-hyrje-demo');
  } catch { shfaq = false; }

  function ms(vlera, rezerve) {
    var v = String(vlera || '').trim();
    var n = parseFloat(v);
    if (!isFinite(n)) return rezerve;
    return /ms$/.test(v) ? n : n * 1000;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var mbulesa = document.querySelector('[data-hyrja-demo]');
    if (!mbulesa) return;
    if (!shfaq) { mbulesa.parentNode.removeChild(mbulesa); return; }

    var stil = getComputedStyle(html);
    var TOTALI = ms(stil.getPropertyValue('--hd-totali'), 6700);
    var DALJA_NIS = ms(stil.getPropertyValue('--hd-dalja-nis'), 5320);
    var numeruesi = mbulesa.querySelector('[data-numeruesi]');
    // Prototipi e ka nisur tashmë animacionin e vet të hyrjes nën mbulesë (2,4 s); kur teksti
    // nis të tretet, e rinisim — që njeriu ta shohë, jo ta humbasë pas mbulesës.
    var telefoni = document.getElementById('phone');
    var nisiMeHyrje = Boolean(telefoni && telefoni.hasAttribute('data-intro'));
    var ririsur = false;
    var mbaroi = false;
    var ngjarjet = ['pointerdown', 'keydown', 'wheel', 'touchstart'];

    function riniHyrjenETelefonit() {
      if (ririsur) return;
      ririsur = true;
      var b = nisiMeHyrje ? document.getElementById('replay') : null;
      if (b) b.click();
    }
    function ora() {
      var a = mbulesa.getAnimations ? mbulesa.getAnimations().filter(function (x) { return x.animationName === 'hd-mbaro'; })[0] : null;
      return a && a.currentTime != null ? Number(a.currentTime) : null;
    }
    function tik() {
      if (mbaroi) return;
      var t = ora();
      if (t === null) { requestAnimationFrame(tik); return; }
      if (numeruesi) numeruesi.textContent = (Math.max(0, TOTALI - t) / 1000).toFixed(2);
      if (t >= DALJA_NIS) riniHyrjenETelefonit();
      if (t < TOTALI) requestAnimationFrame(tik);
    }
    function hiq() {
      mbaroi = true;
      ngjarjet.forEach(function (n) { window.removeEventListener(n, kalo); });
      if (mbulesa.parentNode) mbulesa.parentNode.removeChild(mbulesa);
      html.classList.remove('me-hyrje-demo', 'hd--kaloi');
    }
    function kalo() {
      html.classList.add('hd--kaloi');
      riniHyrjenETelefonit();
    }
    ngjarjet.forEach(function (n) { window.addEventListener(n, kalo, { passive: true, once: true }); });
    mbulesa.addEventListener('animationend', function (e) {
      if (e.target === mbulesa && (e.animationName === 'hd-mbaro' || e.animationName === 'hd-kalo')) hiq();
    });
    requestAnimationFrame(tik);
  });
})();
