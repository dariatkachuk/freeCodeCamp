$(document).ready(function() {
  // Press Search button
  $('.fa-search').click(function(){
    $("form p").fadeOut('fast');
    if ($(".search-wiki").css('width') !== '250px') {
      $('.fa-search').css('left', '115%');
      $(".search-wiki").css('width', "250px").css('border-color', "#ff4500");
      $(".fa-close").fadeIn('fast');
      $(".search-input").fadeIn('fast').focus();
    } else {
      searchWiki();
    }
  })
  // Press Close Button
  $('.fa-close').on('click', function() {
    $('.fa-search').fadeIn('fast').css('left', '50%').css({"-webkit-transform": "translate(-50%, -50%)"});
    $(".search-wiki").css('width', "0").css('border-color', "transparent");
    $(".fa-close").fadeOut('fast');
    $(".search-input").val('').fadeOut('fast');
    $("form p").fadeIn('slow');
    $(".info").fadeOut('slow');
    $(".articles").fadeOut('slow');
    $(".content").css('height', '100vh');
  })
   // Form Submit  
  $("form").on("submit", function() {
    event.preventDefault ();
    event.stopImmediatePropagation ();
    searchWiki();
  })

})

// Search function
  function searchWiki(){
      var searchVal = $(".search-input").val();
      var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchVal + "&srwhat=text&srprop=snippet&format=json&origin=*&continue=";
      // Check empty input value
      if (searchVal === "") {
        var errHtml = "<div class = 'info'><p>Ooops... Please, enter something...</p></div>";
        $(".err").html(errHtml);
        $(".content").css('height', 'initial');
        $(".aticles").fadeOut('slow');
      } else {
      // Get JSON if not empty
        $.getJSON(url, function(json) {
          $('.info').fadeOut('fast');
          var html = "";
          var resUrl = [];
          // For NULL result
          if (json.query.search.length == 0) {
             html = "<div class = 'info'><p>Ooops... There are no articles in Wikipedia on such search word. Please, try something else.</p></div>";
          } else {
            for (var i = 0; i < json.query.search.length; i++) {
              resUrl[i] = 'https://en.wikipedia.org/?curid=' +  json.query.search[i].pageid;
              html += "<div class = 'article'><a href = \'" + resUrl[i] + "\' target = \"_blank\"'><h2 class = 'article-title'>" + json.query.search[i].title + "</h2><p class = 'article-content'>" + json.query.search[i].snippet + "</p></a></div>";
            }
          }
        $(".articles").html(html).fadeIn('fast');
        $(".content").css('height', 'initial');
        $("form p").fadeOut('fast');
      })
    }
  }