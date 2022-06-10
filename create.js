const htmlName = location.href.split("/").slice(-1)[0].split("?")[0];
if (htmlName == "") {
  // remove trailing slash
  location.href = location.href.slice(0, -1);
}

// === script start ===
const quoteUrl = location.href.split(htmlName)[0] + "quote.html";

function createUrl() {
  var quoteInput = document.getElementById("quote");
  if (!quoteInput.value) {
    // dummy: don't create a quote
    return quoteUrl + "?q=%20";
  }
  var authorInput = document.getElementById("author");
  var yearInput = document.getElementById("year");

  // create url
  return (
    `${quoteUrl}?q=${encodeURIComponent(quoteInput.value)}` +
    (authorInput.value == "" ? "" : `&a=${encodeURIComponent(authorInput.value)}`) +
    (yearInput.value == "" ? "" : `&y=${encodeURIComponent(yearInput.value)}`)
  );
}

function displayQuote() {
  var iframe = document.getElementById("quotePage");
  iframe.src = createUrl();
}

var timeout = null;
document.getElementById("generatorbox").addEventListener("keyup", () => {
  // using timeouts because otherwise when the user types
  // too fast the iframe takes some time to load,
  // which results in not displaying preview.
  clearTimeout(timeout);
  timeout = setTimeout(displayQuote, 100);
});

document.getElementById("openUrl").addEventListener("click", () => {
  window.open(createUrl()).focus();
});

function copyToClipboard(copyText) {
  // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
}

function copyUrl() {
  navigator.clipboard.writeText(createUrl());
}

document.getElementById("copyUrl").addEventListener("click", copyUrl);
