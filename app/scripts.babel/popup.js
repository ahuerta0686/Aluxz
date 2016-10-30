$(document).ready(main);

function main() {
  registerListeners();
}

function registerListeners() {
  $('#show-popup').on('click', clickShowPopup);
}

function clickShowPopup() {
  console.log('Test');
}