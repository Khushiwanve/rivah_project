/* components/reveal.js: headline word reveal, scroll reveal and number counters. Load AFTER the components that render content. */
(function () {
  "use strict";
  function splitWords(el, base) {
    var i = 0;
    (function walk(n) {
      [].slice.call(n.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var f = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w.trim()) { f.appendChild(document.createTextNode(w)); return; }
            var s = document.createElement("span");
            s.className = "w";
            s.innerHTML = '<span style="transition-delay:' + (base + i++ * 0.08) + 's">' + w + "</span>";
            f.appendChild(s);
          });
          c.parentNode.replaceChild(f, c);
        } else walk(c);
      });
    })(el);
  }
  RV.$$("h1,h2").forEach(function (h) { splitWords(h, RV.loaderActive && h.closest(".hero") ? 1.7 : 0.15); });

  function countUp(b) {
    var n = +b.dataset.n, s = b.dataset.s, k = 0;
    var iv = setInterval(function () { k += n / 40; if (k >= n) { k = n; clearInterval(iv); } b.textContent = Math.round(k) + s; }, 30);
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
      RV.$$("[data-n]", e.target).forEach(countUp);
    });
  }, { threshold: 0.15 });
  RV.$$(".rv").forEach(function (el) { io.observe(el); });
})();
