  $(document).ready(function() {
   //Getting lat and long of current position
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
    //Creating Url
      var weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
        
      //Get weather from json
      $.getJSON(weatherUrl, function(json) {
      var obj = JSON.parse(JSON.stringify(json));
      $(".region").html(obj.name);
      $(".temp-content").html(obj.main.temp  + "&#x2103;");
      $(".icon").html("<img src=" + obj.weather[0].icon + " alt=" + obj.weather[0].description + ">");
      $(".sky").html(obj.weather[0].main);
      console.log(obj);
      // Change background picture
      var skyVal = $(".sky").html();
      switch (skyVal) {
          case "Clouds":
          $("body").css('background-image', 'url(' + 'http://drive.google.com/uc?export=view&id=1p7QZC896UBCIHAtTUAN_ZsfWHouPJi78' + ')');
          break;
        case "Clear":
          $("body").css('background-image', 'url(' + 'https://drive.google.com/open?id=1CQW6d7nozagYI8PjmfXZqVKYvIytpWTN' + ')');
          break;
        case "Rain":
          $("body").css('background-image', 'url(' + 'https://drive.google.com/open?id=13wC2L7PE5WVlYl8T4BEbRhIyR87_ZQc5' + ')');
          break;
        case "Snow":
          $("body").css('background-image', 'url(' + 'https://drive.google.com/open?id=15QyDbxSGg0_6uBjbqsmaVxHLzRZoWdtc' + ')');
          break;
    
  }
    });
       
  });
 }

    
      
// Change Celsius to Fahrenheit
$('.changeTemp').click(function(){
  var tempF, tempC;
  if  ($('.changeTemp').html() === "℉") {
      tempC = parseFloat($(".temp-content").text());
      tempF = tempC*9/5 + 32;
      tempF = tempF.toFixed(2); 
      $('.changeTemp').html('&#x2103;');
      $('.temp-content').html(tempF + "&#x2109;");
  } else {
    tempF = parseFloat($(".temp-content").text());
    tempC = 5/9*(tempF - 32);
    tempC = tempC.toFixed(2);  
    $('.changeTemp').html('&#x2109;');
    $('.temp-content').html(tempC + "&#x2103;");
  }
})
//Change background 
    
  

});