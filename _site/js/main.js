 $(document).ready(function() {
	
	//Tooltips for posts
	$('[data-toggle="popover"]').popover();   

		
		
	//Get top artists from lastfm account
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=smitteyyyy&period=1month&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=5&format=json&callback=?", function(json) {
        var html = '';
        $.each(json.topartists.artist, function(i, item) {
            
			/*var songName = item.name;
			var url = item.url;

			html += "<a href='" + url + "?date_preset=LAST_30_DAYS' target='_blank'>" + songName + "</a>, ";*/
			
			var n = item.url.lastIndexOf('/');
 			var result = item.url.substring(n + 1);
 			var songName = item.name;
 			var url = item.url;
  
 			html += "<a href='http://www.last.fm/user/Smitteyyyy/library/music/" + result + "?date_preset=LAST_30_DAYS' target='_blank'>" + item.name + "</a>, ";
        });
		
		//Strip out the final comma
		html = html.substring(0, html.length - 2) + ".";
		
		//Add result to page
        $('#topArtists').append(html);
    });
	
		
	//If applicable, get the track that I'm currently listening to.
	//Start by returning the last track that I listened to
	getNowPlaying();
	setInterval(getNowPlaying, 10*1000);
	
});

var currentSongName;
function getNowPlaying() 
{
	$.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=smitteyyyy&api_key=9ddaab7dc99dbcfb3f2ed8204ef965ce&limit=1&format=json&callback=?", function(json) {
        $.each(json.recenttracks.track, function(i, item) {
            			
			//Limit to the first iteration. Lastfm seems to want to return at least 2
			if(i == 0)
			{
				//Does the result have the attribute containing the 'nowplaying' attribute?
				if($(this).attr('@attr') != undefined)
				{
					var songName = item.name;

					//Does the return result match the same name as the previously changed song name? If not, we want to change the html to reflect the new song
					if(songName != currentSongName)
					{			
						var html = 'Listening to right now: <img src="img/sound-balance.gif"> ';

						var artist = item.artist['#text'];
						var url = item.url;
						
						currentSongName = songName;
						
						html += "<a href='" + url + "' target='_blank'>" + artist + " - " + songName + "</a>.";
						
						//Add result to page
						$('#currentlyListeningTo').html(html);
					}
				}
				else
				{
					$('#currentlyListeningTo').empty();
				}
			}
        });
    });
}

$(window).load(function() {
    var height = $("#signature-text").height();
	
	$('.avatar').attr('src', 'http://www.gravatar.com/avatar/2336ccd6a816e8582b8e9770f3eacadd?s=' + height);

});