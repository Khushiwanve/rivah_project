/* components/contact-form.js: "Send on WhatsApp". The form builds a ready message and opens WhatsApp chat with the number in core/config.js. */
(function () {
  "use strict";
  var C = window.RIVAH_CONFIG, f = document.getElementById("f"), msg = document.getElementById("ok");
  if (!f) return;
  document.getElementById("sel").innerHTML = "<option value=''>Service</option>" + window.RIVAH.services.map(function (s) { return "<option>" + s.title + "</option>"; }).join("");

  function say(text, good) { msg.textContent = text; msg.className = good ? "ok" : "err"; }
  function val(n) { return (f.elements[n].value || "").trim(); }

  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (val("company")) return; /* honeypot: bots fill this hidden field */
    var d = { name: val("name"), email: val("email"), phone: val("phone"), service: val("service"), budget: val("budget"), message: val("message") };
    if (!d.name) { say("Please enter your name.", false); return; }
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) { say("That email does not look right.", false); return; }
    if (!d.message) { say("Please write a short message.", false); return; }

    var lines = ["Hi Rivah Studios, I am " + d.name + "."];
    if (d.service) lines.push("Service: " + d.service);
    if (d.budget) lines.push("Budget: " + d.budget);
    if (d.phone) lines.push("Phone: " + d.phone);
    if (d.email) lines.push("Email: " + d.email);
    lines.push("", d.message);
    var url = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));

    var w = window.open(url, "_blank", "noopener");
    if (!w) location.href = url; /* popup blocked: open in this tab instead */
    say("Opening WhatsApp… press send there to reach us.", true);
  });
})();
