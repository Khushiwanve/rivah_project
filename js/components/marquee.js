/* components/marquee.js: scrolling client names. */
(function () {
  "use strict";
  var mq = RV.$("#mq"); if (!mq) return;
  var c = window.RIVAH.clients;
  mq.innerHTML = c.concat(c).map(function (n) { return "<span>" + n + "</span>"; }).join("");
})();
