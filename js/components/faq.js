/* components/faq.js: FAQ with tabs (all questions, small business, larger business, creators). Content comes from data.js. */
(function () {
  "use strict";
  var list = RV.$("#faq-list"), pills = RV.$("#faq-pills");
  if (!list || !pills) return;
  var D = window.RIVAH;
  var tabs = [["All questions", "*"], ["Small business", "small"], ["Larger business", "big"], ["Creators", "creator"]];

  function show(k) {
    pills.innerHTML = tabs.map(function (t) { return '<button type="button" data-k="' + t[1] + '" class="' + (t[1] === k ? "on" : "") + '">' + t[0] + "</button>"; }).join("");
    RV.$$("button", pills).forEach(function (b) { b.onclick = function () { show(b.getAttribute("data-k")); }; });
    list.innerHTML = D.faq.filter(function (f) { return k === "*" || f.for.indexOf(k) > -1 || f.for.indexOf("all") > -1; })
      .map(function (f, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + f.q + "</summary><p>" + f.a + "</p></details>"; }).join("");
  }
  show("*");
})();
