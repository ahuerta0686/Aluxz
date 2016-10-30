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
    $('.slide-in').hide();
    $('.slide-in').slideDown();

    registerListeners();
  });
}

function registerListeners() {
  $('.slide-in-see-more').on('click', clickSlideInSeeMore);
  $('.slide-in-close').on('click', clickSlideInClose);
  // $('body').on('click', clickBody);
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

function clickSlideInSeeMore() {
  $('.slide-in-preview').slideUp();
  $('.slide-in-see-more').slideUp();

  $('.slide-in-content').slideDown();
}

function clickSlideInClose() {
  $('.slide-in').slideUp();
}

function clickBody(event) {
  if (!$.contains($(event.target[0], $('.slide-in')[0]))) {
    $('.slide-in').remove();
  }
}