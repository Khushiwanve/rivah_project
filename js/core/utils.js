/* core/utils.js: tiny helpers shared by every component. Loaded on every page. */
window.RV = {
  $: function (s, r) { return (r || document).querySelector(s); },
  $$: function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); },
  reduce: matchMedia("(prefers-reduced-motion: reduce)").matches,
  canHover: matchMedia("(hover:hover)").matches,
  mouse: { x: -999, y: -999, v: 0 },
  loaderActive: false
};
window.RIVAH_MOUSE = window.RV.mouse; /* the river reads this to make ripples */
