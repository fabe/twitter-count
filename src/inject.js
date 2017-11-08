// Get counter container.
var $counter = $('.js-character-counter');

// Insert our custom counter and save it to a variable.
$counter.append('<span id="extension-counter" class="tweet-counter">0</span>');
var $count = $('#extension-counter');

// Set up a MutationObserver (only for the main editor for now)
const target = document.getElementById('tweet-box-home-timeline');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    updateCount();
  });
});

var config = { attributes: true, childList: true, characterData: true };
observer.observe(target, config);

// Update the count number when the editor field changes.
// TODO: Bug: Sometimes shows +1.
var updateCount = function() {
  $tweets = $('#tweet-box-home-timeline div');
  var text = '';

  if ($tweets.length > 1) {
    $tweets.each(function() {
      text += $(this).text() + '\n';
    });
  } else {
    text += $tweets.text();
  }

  $count.html(twttr.txt.getTweetLength(text));
};
