/* components/services.js: service cards. Use data-limit="6" on #sv to show only the first six. */
(function () {
  "use strict";
  var sv = RV.$("#sv"); if (!sv) return;
  var list = window.RIVAH.services, lim = +sv.dataset.limit || list.length;
  sv.innerHTML = list.slice(0, lim).map(function (s) {
    return '<div class="card rv"><i>' + s.icon + "</i><h3>" + s.title + "</h3><p>" + s.text + "</p></div>";
  }).join("");
})();
