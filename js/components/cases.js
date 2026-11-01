/* cases.js: case study cards and the full case study dialog. */
(function () {
  "use strict";
  var D = window.RIVAH, grid = document.getElementById("cg"), dlg = document.getElementById("cs"), box = document.getElementById("cs-b");
  if (!grid || !dlg) return;
  function kpis(c) { return c.results.map(function (r) { return "<div><b>" + r.value + "</b><span>" + r.label + "</span></div>"; }).join(""); }

  grid.innerHTML = D.cases.map(function (c, i) {
    return '<button class="case" type="button" data-i="' + i + '"><div class="cv" style="background:linear-gradient(150deg,' + D.tints[i % 4] + ',#3B2A20)">' + c.client +
      '<div class="rs">' + c.results.slice(0, 2).map(function (r) { return "<div><b>" + r.value + "</b><span>" + r.label + "</span></div>"; }).join("") + "</div></div>" +
      '<div class="bd"><small>' + c.category + "</small><h3>" + c.title + "</h3><p>" + c.summary + "</p></div></button>";
  }).join("");

  function open(i) {
    var c = D.cases[i];
    box.innerHTML = '<span class="tag">' + c.category + '</span><h2 id="cs-t">' + c.title + "</h2><h4>Overview</h4><p>" + c.overview + "</p><h4>Objective</h4><p>" + c.objective +
      "</p><h4>Strategy</h4><ul>" + c.strategy.map(function (s) { return "<li>" + s + "</li>"; }).join("") + '</ul><h4>Results</h4><div class="kp">' + kpis(c) + "</div>";
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    document.documentElement.style.overflow = "hidden";
  }
  grid.addEventListener("click", function (e) { var b = e.target.closest(".case"); if (b) open(+b.dataset.i); });
  document.getElementById("cs-x").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", function () { document.documentElement.style.overflow = ""; });
})();
