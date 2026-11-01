/* components/process.js: 5 step timeline with an animated terracotta progress line. */
(function () {
  "use strict";
  var pr = RV.$("#pr"); if (!pr) return;
  pr.innerHTML = window.RIVAH.process.map(function (s, i) {
    return '<div data-i="' + i + '"><b>0' + (i + 1) + "</b><h3>" + s.title + "</h3><p>" + s.text + "</p></div>";
  }).join("");
  RV.$$("div", pr).forEach(function (d) {
    d.addEventListener("mouseenter", function () { pr.style.setProperty("--pg", ((+d.dataset.i + 1) / 5 * 100) + "%"); });
  });
  new IntersectionObserver(function (es, io) {
    if (es[0].isIntersecting) { pr.style.setProperty("--pg", "100%"); io.disconnect(); }
  }, { threshold: 0.3 }).observe(pr);
})();
