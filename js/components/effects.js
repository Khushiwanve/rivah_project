/* components/effects.js: custom cursor, magnetic buttons and card tilt (desktop with a mouse only). */
(function () {
  "use strict";
  var cur = RV.$("#cur"), m = RV.mouse;
  if (!RV.canHover) return;
  RV.$$(".btn").forEach(function (b) {
    b.addEventListener("mousemove", function (e) {
      var r = b.getBoundingClientRect();
      b.style.transform = "translate(" + (e.clientX - r.left - r.width / 2) * 0.25 + "px," + (e.clientY - r.top - r.height / 2) * 0.35 + "px)";
    });
    b.addEventListener("mouseleave", function () { b.style.transform = ""; });
  });
  var last = null;
  document.addEventListener("mousemove", function (e) {
    m.x = e.clientX; m.y = e.clientY; m.v = 1;
    if (cur) { cur.style.left = e.clientX + "px"; cur.style.top = e.clientY + "px"; cur.classList.toggle("h", !!e.target.closest("a,button,summary,.cr,.case")); }
    var el = e.target.closest(".sv .card,.cr");
    if (last && last !== el) { last.style.transform = ""; last = null; }
    if (!el) return;
    last = el;
    var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = "perspective(700px) rotateX(" + -y * 8 + "deg) rotateY(" + x * 8 + "deg) translateY(-4px)";
  });
})();
