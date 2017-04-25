/* MEETUP */
// NOT FUNCTIONAL => Ran into issues w/ Acces-Control-Allow-Origin Error
// Will be implemented when app is rebuild w/ Node & Express
// var topic = "";
// var MEETUP_API = "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&topic=" + topic + "t&city=Washington&state=DC&page=20&key=68617c6b1d76f47132910394a4b3a9";
// var meetupCallParams = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&topic=JavaScript&city=Washington&state=DC&page=20&key=68617c6b1d76f47132910394a4b3a9",
//   "method": "GET",
//   "type": "jsonp",
//   "key": "68617c6b1d76f47132910394a4b3a9",
//   "headers": {
//     "authorization": "Basic cnlhbmJzaGVycmlsbDpJbGxzdGVhbHlvdTEzIQ==",
//     "cache-control": "no-cache",
//     "postman-token": "3004bc85-9e53-1c49-c0c9-6ada36a258a4"
//   }
// };

// SUCCESS CALLBACK => FUNCTIONAL => To Be Replaced w/ DOM Mod Function
// function sendMeetupToDOM (data) {
// 	console.log(" Success!!! You got " + data.meta.count + " Meetup results back.");
// 	data.results.forEach(function (result) {
// 		console.log(result);
// 		console.log(result.name);
// 	});
// }


/* STATE */
var stateObject = {
	// What info do you need to store?
	// (language, type, and problem) submitted by user
	// RACHEL NOTE: Clear out everything on the state when
	// the user hits submit -- before it's populated
	// by API calls
};

function storeSearch (stateObject, userSearch) {
	// push search inquiry & results to state in a new obj
}


/* YOUTUBE */
var YOUTUBE_API = "https://www.googleapis.com/youtube/v3/search";
var youTubeSRC = "https://www.youtube.com/embed/";
var youTubeCallParams = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	type: 'video'
};

var youTubeToDOM = function (data) {
	console.log(data.items[0].id.videoId);
	youTubeSRC += data.items[0].id.videoId;

	$('iframe').attr('src', youTubeSRC);
};

var getYouTubeData = function() {
	$.getJSON(YOUTUBE_API, youTubeCallParams, youTubeToDOM);
};


/* QUOTES */
var CODING_QUOTES = [
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

var getQuote = function (CODING_QUOTES) {
	return CODING_QUOTES[Math.floor(Math.random() * CODING_QUOTES.length)];
};

var sendQuoteToDOM = function (getQuote) {
	var quoteToSend = getQuote(CODING_QUOTES);
	
	console.log(quoteToSend.name);
	console.log(quoteToSend.quote);
	console.log(quoteToSend.source);
};


/* DOM MODS */
var hideLandingPage = function () {
	$('#lp').toggleClass('hidden');
};

var unhideResultsPage = function () {
	$('#rp').toggleClass('hidden');
};


/* LISTENERS */
$('.lp-search-submit').on('click', function (e) {
	e.preventDefault();

	// NEED TO MAKE: Listener => Valid Entry
	$(/* which selector??? */).on('submmit', function () {
		// somethingsomethingsomethingdarkside
	});

	// USER INPUT
	youTubeCallParams.q = $('.lp-search-input').val();

	// API CALLS
	getYouTubeData();

	// DOM MODS
	hideLandingPage();
	unhideResultsPage();

	// MAKE THIS FUNCTION
	sendQuoteToDOM();
});