/* CONSTANT VARIABLES */

// API Key Variables
var YOUTUBE_API = "url";
var MEETUPS_API = "url";
var MDN_API = "url";

// API Call Parameters
var youTubeCallParams = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	type: 'video'
};
var meetUpsCallParams = {};
var mdnCallParams = {};


/* API CALLS */
// RACHEL NOTE: Use success callbacks in getJSON
// functions
var getYouTubeData = function() {
	$.getJSON(YOUTUBE_API, youTubeCallParams);
};
var getMeetUpsData = function() {
	$.getJSON(MEETUPS_API, meetUpsCallParams);
};
var getMdnData = function() {
	$.getJSON(MDN_API, mdnCallParams);
};


/* CODING_QUOTES MOD FUNCTIONS */
function getQuote (n) {
	// randomly pull quote "permanently" from repo
	// and return it
	return n * n;
}
console.log(getQuote(55));


/* QUOTE REPOSITORY */
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


/* STATE: What info do you need to store? */
var state = {
	// (language, type, and problem) submitted by user
};

// RACHEL NOTE: Clear out everything on the state when
// the user hits submit -- before it's populated
// by API calls


/* STATE MOD FUNCTIONS: Everything you can do to state */
function storeSearch (state, userSearch) {
	// push 3 search terms (language, type, and problem) to state
}


/* DOM MOD FUNCTIONS: Functions that render state */
// Two arguments: state object, and a DOM element to render into
function hideLandingPage () {
	// target landing page and hide it
}
function unhideResultsPage () {
	// target results page and unhide it
}
function sendQuoteToDOM (getQuote) {
	// take getQuote as argument
	// target CODING QUOTES section of HTML
	// and add (person, quote, & source) to
}
function sendYouTubeToDOM (getYouTubeData) {
	// getYouTubeData as argument
	// target MAIN VIDEO section of HTML
	// and add content
}
function sendMeetUpsToDOM (getMeetUpsData) {
	// getMeetUpsData as argument
	// target MEETUPS section of HTML
	// amd add content
}
function sendMdnToDOM (getMdnData) {
	// getMdnData as agument
	// target CODE SNIPPET SECTION of HTML
	// and add content
}


/* EVENT LISTENERS */

// listen for user submit
// $(document).ready(function () {
// 	$(/* target #landing-page SUBMIT BUTTON */).submit(function () {
		
// 		// store user search in state

// 		// run DOM functions
// 		// sendQuoteToDOM
// 		// hideLandingPage
// 		// unhideResultsPage
// 	});
// 	$(/* target #results-page SUBMIT BUTTON */).submit(function () {
		
// 		// store user search in state

// 		// run DOM functions
// 		// sendQuoteToDOM
// 	});
// });