const htmlName = location.href.split("/").slice(-1)[0].split("?")[0];
if (htmlName == "") {
  // remove trailing slash
  location.href = location.href.slice(0, -1);
}
const quoteUrl = location.href.split(htmlName)[0] + "quote.html";
var generatedUrlElem = document.getElementById("quoteUrl");

function createUrl() {
  var quoteInput = document.getElementById("quote");
  if (!quoteInput.value) {
    return;
  }
  var authorInput = document.getElementById("author");
  if (!authorInput.value) {
    authorInput.value = "unknown";
  }
  var yearInput = document.getElementById("year");

  // create url
  var url =
    `${quoteUrl}?q=${encodeURIComponent(quoteInput.value)}&a=${encodeURIComponent(authorInput.value)}` +
    (yearInput.value == "" ? "" : `&y=${encodeURIComponent(yearInput.value)}`);

  generatedUrlElem.href = url;
  generatedUrlElem.innerHTML = url;

  // cleanup after yourself
  if (authorInput.value == "unknown") {
    authorInput.value = "";
  }
}

document.getElementById("createUrl").addEventListener("click", createUrl);

function copyToClipboard(copyText) {
  // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
}

function copyUrl() {
  if (!generatedUrlElem.innerHTML) {
    document.getElementById("createUrl").click();
  }
  navigator.clipboard.writeText(generatedUrlElem.href);
}

document.getElementById("copyUrl").addEventListener("click", copyUrl);
