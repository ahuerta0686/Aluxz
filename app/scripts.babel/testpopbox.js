$(document).ready(main);

var templates = {
  popin: undefined,
};

function main() {
  loadTemplates()
  .done(() => {
    /*showPopIn('Hello World', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, beatae!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quidem culpa possimus nostrum assumenda sequi iure quod inventore minima quisquam. Alias modi eveniet adipisci, perspiciatis.',
      'warning');*/

    registerListeners();
  });
}

function registerListeners() {
  $(document).on('click', '.slide-in-see-more', clickSlideInSeeMore);
  $(document).on('click', '.slide-in-close', clickSlideInClose);
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

// Levels: warning, danger, severe
function showPopIn(title, preview, content, level) {
  var popIn = $(templates.popin);
  popIn.find('.slide-in-preview > h1').text(title);
  popIn.find('.slide-in-preview > p').text(preview);
  popIn.find('.slide-in-content > p').text(content);
  popIn.find('.slide-in-bar').addClass(level);
  $('body').append(popIn);
}
