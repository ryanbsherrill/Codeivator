/* jshint esversion: 6 */

/* YOUTUBE */
var youTubeAPI = "https://www.googleapis.com/youtube/v3/search";
var youTubeCallParams = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	type: 'video',
};
var videoId;

function youTubeCallback (data) {
	videoId = data.items[0].id.videoId;
	player.cueVideoById(videoId);
}

function getVideoId () {
	$.getJSON(youTubeAPI, youTubeCallParams, youTubeCallback);
}

/* CLEARING */
function clearQuote () {
	$('#the-quote').empty();
	$('#the-person').empty();
}

function clearSearch () {
	$('input').val('');
}

/* IFRAME

This section was mainly copied from YouTube specs,
but edited to suit the needs of this particular app.
Attubution goes to YouTube, and you can check the =>

"YouTube Player API Reference for iframe Embeds" here: 
https://developers.google.com/youtube/iframe_api_reference */

var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady () {
	player = new YT.Player('player', {
		height: '360',
		width: '640',
		videoId: '',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		player.loadVideoById ('4MJRS-cLozU');
	}
}

/* QUOTES */
var codingQuotes = [
	{
		name: "Steve Jobs",
		quote: "Think Different",
		source: "Apple",
	},
	{
		name: "Richard Hendricks",
		quote: "I mean, Jobs was a poser. He didn't even write code.",
		source: "Silicon Valley (HBO)",
	},
	{
		name: "Peter Gregory",
		quote: "Silicon Valley is the cradle of innovation because of dropouts.",
		source: "Silicon Valley (HBO)",
	},
];

function getQuote (codingQuotes) {
	var newQuote = codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
	$('#the-quote').append('"' + newQuote.quote + '"');
	$('#the-person').append("=> " + newQuote.name);
}

/* DOM MODS */
function hideLandingPage () {
	$('#lp').fadeOut(0);
}

function unhideResultsPage () {
	$('#rp').removeClass('hidden');
}

/* CLEARING */
function clearQuote () {
	$('#the-quote').empty();
	$('#the-person').empty();
}

function clearSearch () {
	$('input').val('');
}

/* LISTENERS */
$('.a').on('click', function (e) {
	e.preventDefault();
	$('iframe').addClass('col-xs-8');

	// get user input => search youtube => add id to iframe
	youTubeCallParams.q = $('.lp-search-bar').val();
	getVideoId();

var another = "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&topic=JavaScript&city=Washington&state=DC&page=20&key=68617c6b1d76f47132910394a4b3a9";
var topic = $('.lp-search-bar').val();
var city = 'Washington';
var state = 'DC';

var meetupCallParams = {
	"async": true,
	"crossDomain": true,
	"dataType": "jsonp",
	"url": "https://api.meetup.com/2/open_events",
	"data": {
		"sign": true,
		"photo-host": 'public',
		"country": 'US',
		"topic": topic,
		"city": city,
		"state": state,
		"page": 5,
		"key": '68617c6b1d76f47132910394a4b3a9',
	},
	"method": "GET",
	"success":function(response){
		console.log('success---',response);
	}
};

function getAnEvent (response) {
	return response.results.map(function(result) {
		var event = `
			<li><a href="${result.event_url}">${result.name}</a></li>
		`;
		console.log(event);
		return event;
	});
}


$.ajax(meetupCallParams).done(function (response) {
	
	$('.meetup-section').append(getAnEvent(response));
});
	
	getQuote(codingQuotes);
	hideLandingPage();
	unhideResultsPage();
});

$('.b').on('click', function (e) {
	e.preventDefault();
	clearQuote();

	// get user input => search youtube => add id to iframe
	youTubeCallParams.q = $('.rp-search-bar').val();
	getVideoId();

	clearSearch();
	getQuote(codingQuotes);
});