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


/* YOUTUBE */

// EDIT TO RETURN VIDEO INFO NEEDED FOR PLAYER
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

/* MEETUP */

// NOT FUNCTIONAL => Ran into issues w/ Acces-Control-Allow-Origin Error
// Will be implemented when app is rebuild w/ Node & Express

var topic = "";
var MEETUP_API = "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&topic=" + topic + "t&city=Washington&state=DC&page=20&key=68617c6b1d76f47132910394a4b3a9";
var meetupCallParams = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&topic=JavaScript&city=Washington&state=DC&page=20&key=68617c6b1d76f47132910394a4b3a9",
  "method": "GET",
  "type": "jsonp",
  "key": "68617c6b1d76f47132910394a4b3a9",
  "headers": {
    "authorization": "Basic cnlhbmJzaGVycmlsbDpJbGxzdGVhbHlvdTEzIQ==",
    "cache-control": "no-cache",
    "postman-token": "3004bc85-9e53-1c49-c0c9-6ada36a258a4"
  }
};

// SUCCESS CALLBACK => FUNCTIONAL => To Be Replaced w/ DOM Mod Function

function sendMeetupToDOM (data) {
	console.log(" Success!!! You got " + data.meta.count + " Meetup results back.");
	data.results.forEach(function (result) {
		console.log(result);
		console.log(result.name);
	});
}


/* QUOTES */

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

// SUCCESS CALLBACK => To Be Replaced w/ DOM Mod Function
function getQuote (CODING_QUOTES) {
	return CODING_QUOTES[ Math.floor(Math.random() * CODING_QUOTES.length) ];
}


/* DOM MOD FUNCTIONS */

function hideLandingPage () {
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
}


// 	$('.rp-quote-section').html(
		
// 		"<h1 class='centered'>" + quoteToSend.quote + "</h1>" +
// 		"<h3>" + "- " + quoteToSend.name + "</h3>"
// 	);
// }



/* API CALLS */
var getYouTubeData = function() {
	$.getJSON(YOUTUBE_API, youTubeCallParams, displayResults);
};

// var getMeetupData = function() {
// 	$.getJSON(MEETUP_API, meetupCallParams, sendMeetupToDOM);
// };

// var getMdnData = function() {
// 	$.getJSON(MDN_API, mdnCallParams, successCallback);
// };


/* LISTENERS */



$('.lp-search-submit').on('click', function (e) {
	e.preventDefault();

	// NEED TO MAKE => Listener for valid entry by user ***

	// get user input => youtube
	youTubeCallParams.q = $('.lp-search-input').val();
	
	// get user input => meetup
	//topic += $('.lp-search-input').val().replace(/[^a-zA-Z0-9 ]/g, "").split(' ').join('%');

	// test user input collected correctly
	//console.log(MEETUP_API);

	// api requests
	getYouTubeData();
	//getMeetupData();

	// modify dom elements 
	hideLandingPage();
	unhideResultsPage();
	// MAKE THIS FUNCTION
	// sendQuoteToDOM();
	
	

});



