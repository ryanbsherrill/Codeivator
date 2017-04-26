/* YOUTUBE */
var YOUTUBE_API = "https://www.googleapis.com/youtube/v3/search";
var youTubeCallParams = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	type: 'video',
};

function youTubeToDOM (data) {
	$('#video-and-meetup').prepend(
		"<iframe id='video-section' class='col-xs-8 video' height='360' width='640' src='https:www.youtube.com/embed/" + data.items[0].id.videoId + "'" + "frameborder='2px solid black' allowfullscreen></iframe>");
}

// ELEMENT CLEARING FUNCTIONS
function clearFrame () {
	$('#video-section').remove();
}

function clearQuote () {
	$('#the-quote').empty();
	$('#the-person').empty();
}

function clearSearch () {
	$('.rp-search-bar').text().empty();
}


function getYouTubeData () {
	$.getJSON(YOUTUBE_API, youTubeCallParams, youTubeToDOM);
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

function hideResultsPage () {
	$('#lp').fadeOut(0);
}

function unhideResultsPage () {
	$('#rp').removeClass('hidden');
}


/* EVENT LISTENERS */
$('.a').on('click', function (e) {
	e.preventDefault();

	clearFrame();
	clearQuote();

	youTubeCallParams.q = $('.lp-search-bar').val();
	
	getYouTubeData();
	getQuote(codingQuotes);


	hideLandingPage();
	unhideResultsPage();
});

$('.b').on('click', function (e) {
	e.preventDefault();

	clearFrame();
	clearQuote();
	

	youTubeCallParams.q = $('.rp-search-bar').val();
	
	getYouTubeData();
	getQuote(codingQuotes);
});
