$(document).ready(main);
var extensionEnabled = false;
function main() {
  chrome.storage.sync.get('enabled',function(enabled){
    extensionEnabled = enabled;
  })
  registerListeners();
}

function registerListeners() {
  $('#show-popup').on('click', clickShowPopup);
}

function clickShowPopup() {
  console.log('Test');
}
