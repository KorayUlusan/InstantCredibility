(function () {
  "use strict";

  const params = new URLSearchParams(document.location.search);

  var args = {
    quote: params.get("q"),
    author: params.get("a"),
    year: params.get("y"),
  };

  var displayQuote = document.getElementById("quote");
  var origin = document.getElementById("origin");

  if (!args.quote) {
    return;
  }

  displayQuote.innerHTML = args.quote;

  origin.innerHTML = "- ";
  origin.innerHTML += args.author ? `${args.author}` : "unknown";
  origin.innerHTML += args.year ? `, ${args.year}` : "";
})();
