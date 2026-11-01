/* components/reels.js: reel cards. Tapping a card (the video, the play button or the Instagram icon) opens that reel on Instagram.
   Use data-limit on #reels-grid to show only the first few. */
(function () {
  "use strict";
  var grid = RV.$("#reels-grid"); if (!grid) return;
  var D = window.RIVAH, limit = +grid.dataset.limit || D.reels.length;
  var IG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>';
  var HEART = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
  var PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  grid.innerHTML = D.reels.slice(0, limit).map(function (r, i) {
    var bg = r.poster ? "background:url(" + r.poster + ") center/cover" : "background:linear-gradient(160deg," + D.tints[i % 4] + ",#3B2A20)";
    var video = r.video ? '<video muted loop playsinline preload="none" src="' + r.video + '"></video>' : "";
    return '<a class="reel" href="' + r.instagram + '" target="_blank" rel="noopener" aria-label="Watch reel: ' + r.title + ' on Instagram">' +
      '<div class="rm" style="' + bg + '">' + (r.poster ? "" : r.client) + "</div>" + video +
      '<span class="ig">' + IG + '</span><span class="pl">' + PLAY + "</span>" +
      '<div class="bt"><b>' + r.title + '</b><div class="st"><span>' + HEART + r.likes + "</span><span>" + PLAY + r.views + "</span></div></div></a>";
  }).join("");

  /* preview videos play only while on screen, and not at all with reduced motion */
  var vids = RV.$$("video", grid);
  if (vids.length && !RV.reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { var p = e.target.play(); if (p && p.catch) p.catch(function () {}); } else e.target.pause();
      });
    }, { threshold: 0.6 });
    vids.forEach(function (v) { io.observe(v); });
  }
})();
