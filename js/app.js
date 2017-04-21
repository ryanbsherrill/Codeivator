/* YOUTUBE FUNCTIONALITY */

// FUNCTIONAL => Returning Proper Data
var YOUTUBE_API = "https://www.googleapis.com/youtube/v3/search";
var youTubeCallParams = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	type: 'video'
};

// SUCCESS CALLBACK => FUNCTIONAL => To Be Replaced w/ DOM Mod Function
function sendYouTubeToDOM (data) {
	console.log("Success!!! You got " + data.items.length + " YouTube results back.");
	data.items.forEach(function (item) {
		console.log(item);

		// DOM MOD PLACEHOLDER
		$('.rp-video-display').append(jawn);
	});
}

// DISPLAY VIDEO
var displayResults = function(data){
		$('.rp-video-section').append(
			'<a href="https://www.youtube.com/watch?v=' + data.items[0].id.videoId +
			'" target="_blank"><img src=' + data.items[0].snippet.thumbnails.high.url + 
			' class="centered"></a>');
};

// video
var jawn =  "<video width='320' height='240' controls>" +
 				"<source src='' type=''>" +
  				"<source src='' type=''>" +
  				"Your browser does not support the video tag" +
			"</video>";



/* MEETUP FUNCTIONALITY */

// NOT FUNCTIONAL => Need to figure out how to use OAUTH

// var city = "";
// var state = "";
// var topic = "";
// var MEETUP_API = "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&page=5&key=3b2c776267d212831792c3364645c1&dataType=jsonp" + 
// 	"&city=" + city + "&state=" + state + "&topic=" + topic + "";
// var MEETUP_API = "";

// var meetupCallParams = {
// 	dataType: 'jsonp',
// 	method: 'get',
// 	key: '3b2c776267d212831792c3364645c1'
// };


// SUCCESS CALLBACK => FUNCTIONAL => To Be Replaced w/ DOM Mod Function

// function sendMeetupToDOM (data) {
// 	console.log(" Success!!! You got " + data.meta.count + " Meetup results back.");
// 	data.results.forEach(function (result) {
// 		console.log(result);
// 		console.log(result.name);

// 		// DOM MOD PLACEHOLDER
// 		$('.rp-meetup-section').append("<p>" + result.name + "</p>");
// 		$('.rp-meetup-section').append("<p>" + result.event_url + "</p>");
// 	});
// }



/* QUOTE FUNCTIONALITY */

// FUNCTIONAL => Random Pull From Quote Repo Is Working
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

// SUCCESS TEST => To Be Replaced w/ DOM Mod Function
function getQuote (CODING_QUOTES) {
	return CODING_QUOTES[ Math.floor(Math.random() * CODING_QUOTES.length) ];
}



/* STATE OBJECT */
var stateObject = {
	// What info do you need to store?
	// (language, type, and problem) submitted by user
	// RACHEL NOTE: Clear out everything on the state when
	// the user hits submit -- before it's populated
	// by API calls
};



/* STATE MOD FUNCTIONS: Everything you can do to state */
function storeSearch (stateObject, userSearch) {
	// push 3 search terms (language, type, and problem) to state
}

/* DOM MOD FUNCTIONS: Functions that render state */
// Two arguments: state object, and a DOM element to render into
function hideLandingPage () {
	// target landing page and hide it
	$('#lp').toggleClass('hidden');
}
function unhideResultsPage () {
	$('#rp').toggleClass('hidden');
}
function sendQuoteToDOM (quote) {
	var quoteToSend = getQuote(CODING_QUOTES);
	console.log(quoteToSend.name);
	console.log(quoteToSend.quote);
	console.log(quoteToSend.source);


	$('.rp-quote-section').html(
		
		"<h1 class='centered'>" + quoteToSend.quote + "</h1>" +
		"<h3>" + "- " + quoteToSend.name + "</h3>"
	);
}




/* API CALLS */
var getYouTubeData = function() {
	$.getJSON(YOUTUBE_API, youTubeCallParams, displayResults);
};

var getMeetupData = function() {
	$.getJSON(MEETUP_API, meetupCallParams, sendMeetupToDOM);
};

var getMdnData = function() {
	$.getJSON(MDN_API, mdnCallParams, successCallback);
};

/* EVENT LISTENERS */

// NEED TO MAKE => Listener for valid entry by user
$('.lp-search-submit').on('click', function (e) {
	e.preventDefault();
	
	// GET USER INPUT FOR VIDEOS
	youTubeCallParams.q = $('.lp-search-input').val();
	

	// GET USER INPUT FOR MEETUP API CALL => MODIFY MEETUP_API value

	// city += $('.lp-city').val().replace(/[^a-zA-Z0-9 ]/g, "").split(' ').join('%');
	// state += $('.lp-state').val().replace(/[^a-zA-Z0-9 ]/g, "").split(' ').join('%');
	// topic += $('.lp-search-input').val().replace(/[^a-zA-Z0-9 ]/g, "").split(' ').join('%');

	//var MEETUP_API = "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&city=Washington&state=DC&page=5&key=3b2c776267d212831792c3364645c1&dataType=jsonp&topic=" + topic + "";
	// console.log(MEETUP_API);

	// MAKE REQUESTS
	getYouTubeData();
	// getMeetupData();



	// MODIFY THE DOM
	hideLandingPage();
	unhideResultsPage();
	sendQuoteToDOM();

});














// $(document).ready(function () {


// 		// RUN API CALLS:

// 		// YouTube
// 		console.log(getYouTubeData());
// 	}

// 		// meetup
// 		// MDN

// 		// store user search in state

// 		// run DOM functions
// 		// sendQuoteToDOM
// 		// hideLandingPage
// 		// unhideResultsPage
// });
		

// // $(/* target #results-page SUBMIT BUTTON */).submit(function () {
		
// // 		// store user search in state

// // 		// run DOM functions
// // 		// sendQuoteToDOM
// // 	});
// // });