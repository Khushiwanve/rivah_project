/* components/nav.js: mobile menu, sticky navbar style, footer year. */
(function () {
  "use strict";
  var $ = RV.$, nav = $("#nav"), bg = $("#bg"), links = $(".links");
  if (bg && links) {
    bg.onclick = function () { var o = links.classList.toggle("open"); bg.setAttribute("aria-expanded", o); };
    links.onclick = function (e) { if (e.target.tagName === "A") { links.classList.remove("open"); bg.setAttribute("aria-expanded", "false"); } };
  }
  if (nav) addEventListener("scroll", function () { nav.classList.toggle("s", scrollY > 20); }, { passive: true });
  var yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();
})();
