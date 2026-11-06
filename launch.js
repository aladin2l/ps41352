/* The landing page: start the run on click.
 *
 * Leaving this page has to be a real navigation from it -- the referrer guard
 * in jb.js arms the chain only when the run page was reached from here. */

var TARGET = "log=1&afterglow=run&mode=goldhen";

var form = document.getElementById("pick");
var countEl = document.getElementById("count");

function start() {
  location.href = "jb.html?" + TARGET;
}

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  start();
});

/* A run that reached the kernel swaps the address for this page and leaves
   the marker behind (jb.js, at the end of the chain). Coming up on that
   address means the browser restored a finished run. */
var DONE = false;
try {
} catch (e) {}

if (DONE) {
  // If patch is active, replace the button inside the element container with status text
  if (countEl) countEl.textContent = "kernel already patched";
}
