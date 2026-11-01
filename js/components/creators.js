/* components/creators.js: creator showcase. Filter pills appear only if #pills exists; data-limit on #grid limits the count. */
(function () {
  "use strict";
  var grid = RV.$("#grid"); if (!grid) return;
  var D = window.RIVAH, pills = RV.$("#pills"), limit = +grid.dataset.limit || D.creators.length;
  var cats = ["All"].concat(D.creators.map(function (c) { return c.category; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));

  function show(cat) {
    if (pills) {
      pills.innerHTML = cats.map(function (c) { return '<button type="button" class="' + (c === cat ? "on" : "") + '">' + c + "</button>"; }).join("");
      RV.$$("button", pills).forEach(function (b) { b.onclick = function () { show(b.textContent); }; });
    }
    grid.innerHTML = D.creators.filter(function (c) { return cat === "All" || c.category === cat; }).slice(0, limit).map(function (c, i) {
      var bg = c.image ? "background:url(" + c.image + ") center/cover" : "background:linear-gradient(150deg," + D.tints[i % 4] + ",#3B2A20)";
      return '<a class="cr" href="' + c.instagram + '" target="_blank" rel="noopener">' +
        '<div class="im" style="' + bg + '">' + (c.image ? "" : c.name[0]) + "</div>" +
        '<span class="nm">' + c.category + '</span><div class="ov"></div>' +
        '<div class="in"><b>' + c.username + "</b>" + c.followers + " followers · " + c.views + " views<br>" + c.engagement + ' engagement<span class="vb">View Profile</span></div></a>';
    }).join("");
  }
  show("All");
})();
