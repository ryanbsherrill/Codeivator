/* jshint esversion: 6 */

/* YOUTUBE */
const youTubeAPI = "https://www.googleapis.com/youtube/v3/search";
let youTubeCallParams = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	type: 'video',
	q: '',

};

let videoId;
programmify = () => `${youTubeCallParams.q} coding programming tutorials`;
youTubeCallback = (data) => { videoId = data.items[0].id.videoId;player.cueVideoById(videoId); };
getVideoId = () => { $.getJSON(youTubeAPI, youTubeCallParams, youTubeCallback); };

/* IFRAME
This section was mainly copied from YouTube API specs,
but was edited to suit the needs of this particular app.
Attubution goes to YouTube, and you can check the =>
"YouTube Player API Reference for iframe Embeds" here: 
https://developers.google.com/youtube/iframe_api_reference */
let tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;

onYouTubeIframeAPIReady = () => {
	player = new YT.Player('player', {
		height: '360',
		width: '640',
		videoId: '',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
};

onPlayerStateChange = (event) => {
	if (event.data == YT.PlayerState.ENDED) {
		player.loadVideoById ('4MJRS-cLozU');
	}
};

/* MEETUP */
getTopic = () => { meetupCallParams.topic = $('.lp-search-bar').val(); };

getState = () => { meetupCallParams.state = $(".lp-state").find(':selected').attr('stateid'); };

getCity = () =>  { meetupCallParams.city = $('.lp-city').val();};

let meetupCallParams = {
	"async": true,
	"crossDomain": true,
	"dataType": "jsonp",
	"url": "https://api.meetup.com/2/open_events",
	"data": {
		"sign": true,
		"photo-host": 'public',
		"country": 'US',
		"page": 5,
		"key": '68617c6b1d76f47132910394a4b3a9',
	},
	"method": "GET",
	"success": (response) => {
		console.log('success---',response);
	}
};

getAnEvent = (response) => {
	return response.results.map( (result) => {
		let event = `
			<li><a href=${result.event_url} target="_blank">${result.name}</a></li>
		`;
		console.log(event);
		return event;
	});
};

getMeetupData = () => {
	$.ajax(meetupCallParams).done((response) => {
		$('.meetup-section').append(getAnEvent(response));
	});
};

/* QUOTES */
let codingQuotes = [
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

getQuote = (codingQuotes) => {
	let newQuote = codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
	$('#the-quote').append('"' + newQuote.quote + '"');
	$('#the-person').append("=> " + newQuote.name);
};

/* DOM MODS */
let hideLandingPage = () => { $('#lp').fadeOut(0); };
let unhideResultsPage = () => { $('#rp').removeClass('hidden'); };

/* CLEARING */
let clearQuote = () => { $('#the-quote').empty(); $('#the-person').empty(); };

let clearSearch = () => { $('input').val(''); };

/* LISTENERS */
$('.a').on('click', (e) => {
	e.preventDefault();
	
	// youtube
	$('iframe').addClass('col-xs-8');
	youTubeCallParams.q += $('.lp-search-bar').val();
	programmify();
	getVideoId();

	// meetup
	getTopic();
	getState();
	getCity();
	getMeetupData();
	
	// quote
	getQuote(codingQuotes);
	hideLandingPage();
	unhideResultsPage();
});

$('.b').on('click', (e) => {
	e.preventDefault();
	clearQuote();

	// get user input => search youtube => add id to iframe
	youTubeCallParams.q = $('.rp-search-bar').val();
	programmify();
	getVideoId();

	clearSearch();
	getQuote(codingQuotes);
});