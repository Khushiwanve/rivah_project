/* components/founder.js: if the founder photo file is missing, remove the <img> so the initial shows instead. */
(function () {
  "use strict";
  var img = RV.$("#fimg"); if (!img) return;
  img.addEventListener("error", function () { img.remove(); });
  if (img.complete && img.naturalWidth === 0) img.remove();
})();
