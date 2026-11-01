/* river.js: WebGL setup for the river background. The shader itself lives in river-shader.js. */
(function () {
  "use strict";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cv = document.getElementById("c");
  var gl = cv.getContext("webgl");
  if (!gl || !window.RIVER_FRAG) return; /* page still works on the plain cream background */

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(s)); return null; }
    return s;
  }
  var vs = compile(gl.VERTEX_SHADER, "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}");
  var fs = compile(gl.FRAGMENT_SHADER, window.RIVER_FRAG);
  if (!vs || !fs) return;

  var prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs);
  gl.linkProgram(prog); gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(prog, "a");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  var U = {};
  ["R", "dpr", "sy", "t", "H", "Wd", "N", "ms", "mv"].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
  var M = window.RIVAH_MOUSE || { x: -999, y: -999, v: 0 };

  function resize() {
    var W = innerWidth, H = document.documentElement.scrollHeight;
    var d = Math.min(devicePixelRatio || 1, W < 700 ? 1 : 1.25); /* cap resolution for speed */
    var cw = Math.round(W * d), ch = Math.round(innerHeight * d);
    if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; gl.viewport(0, 0, cw, ch); }
    gl.uniform2f(U.R, W, innerHeight);
    gl.uniform1f(U.dpr, d);
    gl.uniform1f(U.H, H);
    gl.uniform1f(U.Wd, W);
    gl.uniform1f(U.N, Math.max(3, Math.round(H / (innerHeight * 1.15)))); /* number of bends */
    if (reduce) draw(0);
  }

  function draw(ms) {
    M.v *= 0.975;
    gl.uniform2f(U.ms, M.x, M.y + scrollY);
    gl.uniform1f(U.mv, M.v);
    gl.uniform1f(U.sy, scrollY);
    gl.uniform1f(U.t, reduce ? 0 : ms / 1000);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    if (!reduce && !document.hidden) requestAnimationFrame(draw);
  }

  document.addEventListener("visibilitychange", function () { if (!document.hidden && !reduce) requestAnimationFrame(draw); });
  addEventListener("resize", resize);
  addEventListener("load", resize);
  if (window.ResizeObserver) new ResizeObserver(resize).observe(document.body);
  if (reduce) addEventListener("scroll", function () { draw(0); }, { passive: true });
  resize();
  if (!reduce) requestAnimationFrame(draw);
})();
