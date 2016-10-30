$(document).ready(main);

var templates = {
  popin: undefined,
};

function main() {
  loadTemplates()
  .done(() => {
    var popin = $(templates.popin);
    popin.find('.slide-in-bar').addClass('danger');
    // console.log($(templates.popin).find('.slide-in-preview'));
    $('body').append(popin);
  });
}

function loadTemplates() {
  return $.ajax({
    method: 'GET',
    url: chrome.extension.getURL('/templates/slidein.html'),
  }).done((data) => {
    // console.log(data);
    templates.popin = data;
  }).promise();
}
