$(document).ready(function(){
var quotes = [
  {
    cite: "Political correctness is tyranny with manners.",
    autor: "Charlton Heston"
  },
    {
    cite: "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
    autor: "Galileo Galilei"
  },
      {
    cite: "Try to learn something about everything and everything about something.",
    autor: "Thomas Henry Huxley"
  }
]
function changeQuote() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var ind = Math.floor(Math.random() * quotes.length);
  var newQuote = quotes[ind];
 
  $('.quote-box').html('<p class="new-quote"> ' + newQuote.cite + '</p><span class="autor">- ' + newQuote.autor + '</span>').fadeIn();

  
    $('body').css('background-color', hue); 
    $('.quote-box p').css('color', hue); 
    $('.quote-box span').css('color', hue); 
    $('.get-quote').css('backgroundColor', hue);
    $('.tweet').css('backgroundColor', hue); 
};
    changeQuote();  
  
    $('.get-quote').click(function(){
      changeQuote();
    });
  
  $('.tweet').click(function(){
    var hashtag = "quotes";
    var message = "\"" + $('.quote-box p').text().substr(1) + "\"" + " " + $('.quote-box span').text();
    console.log(message);
  //  var message = "\"" + newQuote.cite + "\" " + newQuote.autor + " #quotes" + hashtag; 
    var url = "https://twitter.com/intent/tweet?text=" + message + "&hashtags=" + hashtag;
    $(".twitter-share-button").attr('href', url);
  });
  
})