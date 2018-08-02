 function getChannels() {
    // Array of selected channels
    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var clientID = 'bd0yhbtnqprqfdwu1l9vbdb0i8rxpp';
    var urlStream;
    var htmlActive = "";
    var htmlOffline = "";
    
   for (var i = 0; i < users.length; i++) {
      // Create url
      urlStream = 'https://api.twitch.tv/kraken/streams/' + users[i] + '?client_id=' + clientID;
      // Fetch Data
     $.getJSON(urlStream, function(dataStream) {
       // Check if the channel is streaming now
       if (dataStream.stream != null) {
         // Create html for steaming channel
          htmlActive = "<li class = 'channelActive'><a href = \'" + dataStream.stream.channel.url + "\' target = \"_blank\"'><img src = " + dataStream.stream.channel.logo + " alt = " + dataStream.stream.channel.display_name + "><div><h3 class = 'channel-title'>" + dataStream.stream.channel.display_name + "</h3><p class = 'channel-stream'>" + dataStream.stream.channel.status + "</p></div></a></li>";
       $('#tab-content-2 ul').append(htmlActive);
       $('#tab-content-1 ul').append(htmlActive);
       } else {
         // Create url for not steaming channels
         var urlChannel = dataStream._links.channel + '?client_id=' + clientID;
         // Fetch data for not steaming channels
         $.getJSON(urlChannel, function(dataChannel) {
           htmlOffline = "<li class = 'channelOffline'><a href = \'" + dataChannel.url + "\' target = \"_blank\"'><img src = " + dataChannel.logo + " alt = " + dataChannel.display_name + "><div><h3 class = 'channel-title'>" + dataChannel.display_name + "</h3></div></a></li>";
           $('#tab-content-3 ul').append(htmlOffline);
           $('#tab-content-1 ul').append(htmlOffline);
        });
       }
    });
  }   
}
  
$(document).ready(function() {
  
  getChannels();

  
})