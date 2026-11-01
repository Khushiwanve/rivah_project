/* testimonials.js: auto-sliding testimonial cards with dots. Pauses on hover, focus and reduced motion. */
(function () {
  "use strict";
  var D = window.RIVAH, track = document.getElementById("tt"), dots = document.getElementById("dots"), wrap = document.getElementById("ts");
  if (!track) return;
  var n = D.testimonials.length, i = 0, paused = false, timer;
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  track.innerHTML = D.testimonials.map(function (t) {
    return '<figure class="tc"><div class="stars" aria-label="' + t.rating + ' out of 5 stars">' + "★".repeat(t.rating) + "</div><blockquote>“" + t.quote + "”</blockquote><cite>" + t.name + ", " + t.role + "</cite></figure>";
  }).join("");
  dots.innerHTML = D.testimonials.map(function (_, k) { return '<button type="button" aria-label="Show testimonial ' + (k + 1) + '"></button>'; }).join("");

  function go(k) {
    i = (k + n) % n;
    track.style.transform = "translateX(-" + i * 100 + "%)";
    [].forEach.call(dots.children, function (b, j) { b.classList.toggle("on", j === i); });
  }
  dots.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) go([].indexOf.call(dots.children, b)); });
  ["mouseenter", "focusin"].forEach(function (ev) { wrap.addEventListener(ev, function () { paused = true; }); });
  ["mouseleave", "focusout"].forEach(function (ev) { wrap.addEventListener(ev, function () { paused = false; }); });
  go(0);
  if (!reduce) timer = setInterval(function () { if (!paused && !document.hidden) go(i + 1); }, 5500);
})();
