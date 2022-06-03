"use strict";

const params = new URLSearchParams(document.location.search);

var args = {
  quote: params.get("q"),
  author: params.get("a"),
  year: params.get("y"),
};
if (args.quote) {
  document.getElementById("quote").innerHTML = args.quote;
}
if (args.author && args.year) {
  document.getElementById("origin").innerHTML = `- ${args.author}, ${args.year}`;
} else if (args.author) {
  document.getElementById("origin").innerHTML = `- ${args.author}`;
} else if (args.year) {
  document.getElementById("origin").innerHTML = `- unknown, ${args.year}`;
}
