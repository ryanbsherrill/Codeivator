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


/* IFRAME */
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


/* LISTENERS */
$('.a').on('click', function (e) {
	e.preventDefault();
	$('iframe').addClass('col-xs-8');

	// get user input => search youtube => add id to iframe
	youTubeCallParams.q = $('.lp-search-bar').val();
	getVideoId();
	
	
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