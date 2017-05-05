/* jshint esversion: 6 */

/* YOUTUBE */
let youTubeAPI = "https://www.googleapis.com/youtube/v3/search";
let youTubeCallParams = {
  part: 'snippet',
  key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
  type: 'video',
  q: ''
};

let programmify = () => `${youTubeCallParams.q} coding programming tutorials`;
let videoId;
let youTubeCallback = (data) => {
  videoId = data.items[0].id.videoId;
  player.cueVideoById(videoId);
};

let getVideoId = () => $.getJSON(youTubeAPI, youTubeCallParams, youTubeCallback);

/* IFRAME
This section was mainly copied from YouTube API specs,
but was edited to suit the needs of this particular app.
Attubution goes to YouTube, and you can check the =>
"YouTube Player API Reference for iframe Embeds" here: 
https://developers.google.com/youtube/iframe_api_reference */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
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
    player.cueVideoByUrl('blob:https://www.youtube.com/91bca02d-45fa-47c4-b8c4-063558b189e7');
  }
}

/* QUOTES */
let codingQuotes = [{
  name: "Steve Jobs",
  quote: "Think Different",
  source: "Apple",
}, {
  name: "Richard Hendricks",
  quote: "I mean, Jobs was a poser. He didn't even write code.",
  source: "Silicon Valley (HBO)",
}, {
  name: "Peter Gregory",
  quote: "Silicon Valley is the cradle of innovation because of dropouts.",
  source: "Silicon Valley (HBO)",
}, ];

let getQuote = (codingQuotes) => {
  let newQuote = codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
  $('#the-quote').append('"' + newQuote.quote + '"');
  $('#the-person').append("=> " + newQuote.name);
};

/* DOM MODS */
let hideLandingPage = () => $('#lp').fadeOut(0);
let unhideResultsPage = () => $('#rp').removeClass('hidden');

/* CLEARING */
let clearQuote = () => {
  $('#the-quote').empty();
  $('#the-person').empty();
};

/* MEETUP */
let fakeData = [
  `<li><a href=https://www.meetup.com/gdg-dc/events/238315290/ target="_blank">DevFestDC - 2017 May 5/6 - @Sheraton Tysons</a></li>`,
  `<li><a href=https://www.meetup.com/NoVA-Code-Coffee/events/239218854/ target="_blank">Code & Coffee [71]</a></li>`,
  `<li><a href=https://www.meetup.com/Women-Who-Code-DC/events/239302708/ target="_blank">Business Model Bootcamp (STARTUP HACKATHON WORKSHOP PT. 2)</a></li>`,
  `<li><a href=https://www.meetup.com/Women-Who-Code-DC/events/238559009/ target="_blank">Front End Lab</a></li>`,
  `<li><a href=https://www.meetup.com/Baltimore-MongoDB-Users-Group/events/239657139/ target="_blank">Technology Over Bagels: Microservices with MongoDB </a></li>`
];

/* LISTENERS */
$('.a').on('click', (e) => {
  e.preventDefault();

  /* YOUTUBE */
  $('iframe').addClass('col-xs-8');
  youTubeCallParams.q += $('.lp-search-bar').val();
  programmify();
  getVideoId();

  /* MEETUP */
  let sourceString = $(".lp-state").find(':selected').attr('stateid');
  let outString = sourceString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  let state = outString;
  let city = $('.lp-city').val();
  let topic = $('.lp-search-bar').val();

  let settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&topic=${topic}&city=${city}&state=${state}&page=5&key=68617c6b1d76f47132910394a4b3a9`,
    "method": "GET",
    "dataType": "jsonp"
  };

  $.ajax(settings).done(function(response) {
    if (response.results === undefined ||
      response.results === null ||
      response.results.length === 0) {
      fakeData.forEach(function(byte) {
        $('.meetup-section').append(byte);
      });
    } else {
      return response.results.map(function(result) {
        let event = `<li><a href=${result.event_url} target="_blank">${result.name}</a></li>`;
        return $('.meetup-section').append(event);
      });
    }
  });

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

  getQuote(codingQuotes);
});