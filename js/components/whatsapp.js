/* components/whatsapp.js: points every [data-wa] button ("Book A Call", floating WhatsApp) at the number in core/config.js. */
(function () {
  "use strict";
  var C = window.RIVAH_CONFIG;
  RV.$$("[data-wa]").forEach(function (a) {
    var text = C.messages[a.getAttribute("data-wa")] || C.messages.chat;
    a.href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(text);
  });
})();
