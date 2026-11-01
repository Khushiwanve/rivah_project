/* components/loader.js: logo reveal on the home page, shown once per visit. */
(function () {
  "use strict";
  var ld = RV.$("#ld");
  if (!ld) return;
  var seen = false;
  try { seen = !!sessionStorage.getItem("rv-loaded"); sessionStorage.setItem("rv-loaded", "1"); } catch (e) {}
  if (seen) { ld.remove(); return; }
  RV.loaderActive = true;
  setTimeout(function () { ld.classList.add("x"); }, RV.reduce ? 0 : 1900);
})();
