// Example => Response from Meetup API:

// call
var URL = "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&city=Washington&state=DC&page=5&key=3b2c776267d212831792c3364645c1&dataType=jsonp&topic=JavaScript";

var FULL_JS_JQ_andAJAX = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.meetup.com/2/open_events?sign=true&photo-host=public&country=US&city=Washington&state=DC&page=5&key=3b2c776267d212831792c3364645c1&dataType=jsonp&topic=JavaScript",
  "method": "GET",
  "headers": {
    "authorization": "Basic cnlhbmJzaGVycmlsbDpJbGxzdGVhbHlvdTEzIQ==",
    "cache-control": "no-cache",
    "postman-token": "981320be-c43f-9ecd-6304-a5759a606533"
  }
};

// actual call
$.ajax(settings).done(function (response) {
  console.log(response);
});

// response
var GOTBACK = {
    "results": [
        {
            "utc_offset": -14400000,
            "venue": {
                "zip": "20005",
                "country": "us",
                "localized_country_name": "USA",
                "city": "Washington",
                "address_1": "The Iron Yard, 1341 G Street Northwest",
                "lon": -77.03156,
                "phone": "(571) 733-9744",
                "name": "The Iron Yard - Washington, D.C.",
                "id": 24728607,
                "state": "DC",
                "lat": 38.898537,
                "repinned": false
            },
            "rsvp_limit": 20,
            "headcount": 0,
            "distance": 1.0088560581207275,
            "visibility": "public",
            "waitlist_count": 0,
            "created": 1485632193000,
            "maybe_rsvp_count": 0,
            "description": "<p>Join us for our Kids Classes! Taught by our instructor, <a href=\"http://blog.theironyard.com/2016/08/17/returning-classroom-tajaas-story/?utm_campaign=coschedule&amp;utm_source=facebook_page&amp;utm_medium=The%20Iron%20Yard%20-%20Washington,%20D.C.&amp;utm_content=Returning%20to%20the%20Classroom:%20Tajaa%27s%20Story\">Taj Long</a>, this class will provide a introduction to web development, exploring the fundamentals of HTML and CSS. </p> <p>Course requirement: Just your computer, an internet browser and a smile! </p> <p><b>FAQs: </b></p> <p>1. What ages are the classes open to?<br/>We welcome all ages 7-13 years old. Please remember, a parent or a guardian is required to remain with the student for the entirety of the course for students under the age of 13. </p> <p>2. Do students have to attend every class?<br/>We expect students to attend for the entirety of the course unless there is an emergency. There are many students on our waitlist, so please do not sign up if you cannot stay for the whole time. </p> <p>3. What kind of computer will the students need?<br/>Both Macs and PCs are welcome! Please bring a fully-charged laptop and a laptop charger to every class. Please make sure that the laptop is in a working shape; we don't want to spend the class trying to fix computers when we can be learning.</p> <p>4. What is the cost of the class?<br/>FREE. The Iron Yard believes strongly that programming must be accessible at all ages, and kids classes are one way we inch toward making that belief a reality.</p> <p>5. Do the students need to know how to touch-type?<br/>No, excellent typing skills are not required. </p> <p>6. What do students need to know before taking the class?<br/>The course is for beginners. Imagination and love for computers are the only requirements for the class.</p> <p>7. Are there homework/tests/grades in the class?<br/>Our goal is for students to have a great time learning and playing with new tools and ideas. There are no tests, grades or homework. That said, we do expect students to be engaged in every class.</p> <p>8. How do I register?<br/>RSVP here!  Make sure you register for any addition children after the first (your rsvp counts for one child, then 1, +2, etc for the number of additional children). </p>",
            "how_to_find_us": "Check in at the front desk- we're on the second floor!",
            "event_url": "https://www.meetup.com/The-Iron-Yard-DC/events/237273315/",
            "yes_rsvp_count": 15,
            "duration": 5400000,
            "name": "Kids Academy: HTML & CSS",
            "id": "237273315",
            "time": 1492723800000,
            "updated": 1485632193000,
            "group": {
                "join_mode": "open",
                "created": 1416344278000,
                "name": "The Iron Yard - DC",
                "group_lon": -77.02999877929688,
                "id": 18199045,
                "urlname": "The-Iron-Yard-DC",
                "group_lat": 38.90999984741211,
                "who": "Members"
            },
            "status": "upcoming"
        },
        {
            "utc_offset": -14400000,
            "venue": {
                "country": "us",
                "localized_country_name": "USA",
                "city": "Reston",
                "address_1": "11955 Democracy Drive, 11th Floor",
                "name": "Appian",
                "lon": -77.359016,
                "id": 24155671,
                "state": "VA",
                "lat": 38.958065,
                "repinned": false
            },
            "headcount": 0,
            "distance": 18.55859375,
            "visibility": "public",
            "waitlist_count": 0,
            "created": 1489068296000,
            "maybe_rsvp_count": 0,
            "description": "<p>Join us at Appian (<a href=\"http://www.appian.com/\">site</a>, <a href=\"https://www.instagram.com/appianlife/\">ig</a>)  in Reston Town Center for April's React NOVA meetup.</p> <p>Appian has spent the past year overhauling their UI so that their customers can design beautiful, responsive UIs for their business processes. The majority of the Appian engineering team has been involved in moving their front-end web code to React. They are now starting to do the same for their mobile UIs using React Native.</p> <p><b>Parking Notes</b>: Park in the Orange garage. Appian will be providing validation codes so that parking will be free, but you will want to download the RTC parking app (<a href=\"https://itunes.apple.com/us/app/parkrtc/id1114413585?mt=8\">iTunes</a>, <a href=\"https://play.google.com/store/apps/details?id=com.passportparking.mobile.ParkRTC&amp;hl=en\">Android</a>) and know your license plate #. If you have any trouble getting into the building, call Anissa at[masked]-6183.</p> <p><b>6-6:30</b></p> <p><br/>Network, mingle, and eat some <a href=\"http://mellowmushroom.com/\">Mellow Mushroom</a> provided by <a href=\"http://www.appian.com\">Appian</a>. </p> <p><b>6:30 - 6:35</b></p> <p>Brief Intro</p> <p><b>6:35 - 7:05 </b></p> <p><i>The Journey of 1,000 Li</i></p> <p>Speaker: Tom Aylesworth (<a href=\"https://twitter.com/swampthingtom\">twitter</a>, <a href=\"https://github.com/taylesworth\">gh</a>)</p> <p>Why Appian decided to adopt React Native, how we are integrating it into our existing native mobile apps, and what we have learned sharing technologies between web and mobile.</p> <p><b>7:05 - 7:35</b></p> <p><i>Scaling React: Sending UIs and other heresies</i></p> <p>Lessons learned scaling React to a department of 150 engineers. Our experience burning our ships, putting all of our eggs in one basket, and using other cliches along the way.</p>",
            "event_url": "https://www.meetup.com/React-NOVA/events/238291200/",
            "yes_rsvp_count": 61,
            "name": "React NOVA - React Native & Scaling React Development @ Appian",
            "id": "238291200",
            "time": 1492725600000,
            "updated": 1492442226000,
            "group": {
                "join_mode": "open",
                "created": 1436983683000,
                "name": "React NOVA",
                "group_lon": -77.33999633789062,
                "id": 18744030,
                "urlname": "React-NOVA",
                "group_lat": 38.959999084472656,
                "who": "Reactors"
            },
            "status": "upcoming"
        },
        {
            "utc_offset": -14400000,
            "venue": {
                "country": "us",
                "localized_country_name": "USA",
                "city": "Washington",
                "address_1": "1325 G Street, NW, 3rd Floor",
                "name": "Social Tables",
                "lon": -77.031006,
                "id": 24266346,
                "state": "DC",
                "lat": 38.898567,
                "repinned": false
            },
            "rsvp_limit": 100,
            "headcount": 0,
            "distance": 0.9889907836914062,
            "visibility": "public",
            "waitlist_count": 0,
            "created": 1491828031000,
            "maybe_rsvp_count": 0,
            "description": "<p>Casey Watts (<a href=\"http://twitter.com/kyloma\">@kyloma</a>) will teach us mind control. For benevolent purposes!</p> <p>It's a useful psychology double-whammy:</p> <p>(A) Developers are great systems thinkers. Surprise: your brain is a system too! Reframe frustration into accomplishment, and become a more effective and bubbly person using a frontal cortex feedback loop.</p> <p>(B) Want your team to be the happiest, most productive team around? Recent psychology research reveals one key attribute of the most successful teams, and it's within your influence.</p> <p>We'll have a great space courtesy of <a href=\"https://www.socialtables.com/\">Social Tables</a>, and food and drink will be provided by <a href=\"https://go.nodesource.com/nodedc\">NodeSource</a>.</p> <p>Members of the NodeDC community are expected to adhere to our <a href=\"https://github.com/NodeDC/CodeOfConduct\">Code of Conduct</a>.</p> <p><b>Schedule:</b></p> <p>6:30 pm - 7:00pm: Arrive, eat, drink, socialize</p> <p>7:00pm: Presentation</p>",
            "event_url": "https://www.meetup.com/node-dc/events/239102749/",
            "yes_rsvp_count": 86,
            "name": "A Neurobiologist's Guide to Mind Manipulation",
            "id": "239102749",
            "time": 1492727400000,
            "updated": 1492702142000,
            "group": {
                "join_mode": "open",
                "created": 1323109597000,
                "name": "node.dc",
                "group_lon": -77.04000091552734,
                "id": 2907612,
                "urlname": "node-dc",
                "group_lat": 38.91999816894531,
                "who": "Node programmers"
            },
            "status": "upcoming"
        },
        {
            "utc_offset": -14400000,
            "venue": {
                "country": "us",
                "localized_country_name": "USA",
                "city": "Washington",
                "address_1": "1015 15th St, NW",
                "name": "Hurdlr Office (6th Floor)",
                "lon": -77.034233,
                "id": 25168827,
                "state": "DC",
                "lat": 38.903061,
                "repinned": false
            },
            "headcount": 0,
            "distance": 0.9049508571624756,
            "visibility": "public",
            "waitlist_count": 0,
            "created": 1489599366000,
            "maybe_rsvp_count": 0,
            "description": "<p>Please join us at Hurdlr for our 1st Ionic Meetup of the year on Thursday April 20th at 6:30pm!</p> <p>AGENDA: <br/>6:30 - 7pm: Networking <br/>7 - 7:45pm: Presentation <br/>7:45 - 8: Wrap up/Networking </p> <p>Topic: TBD (Vote on poll below!)</p> <p><a href=\"https://www.meetup.com/DC-Ionic-Framework-Meetup/polls/1242732/\"><a href=\"https://www.meetup.com/DC-Ionic-Framework-Meetup/polls/1242732/\" class=\"linkified\">https://www.meetup.com/DC-Ionic-Framework-Meetup/polls/1242732/</a></a> </p>",
            "event_url": "https://www.meetup.com/DC-Ionic-Framework-Meetup/events/238441189/",
            "yes_rsvp_count": 22,
            "name": "Intro to Ionic 2 (Ionic 3.0.x)",
            "id": "238441189",
            "time": 1492727400000,
            "updated": 1491924607000,
            "group": {
                "join_mode": "open",
                "created": 1453652829000,
                "name": "DC Ionic Framework Meetup",
                "group_lon": -76.98999786376953,
                "id": 19426038,
                "urlname": "DC-Ionic-Framework-Meetup",
                "group_lat": 38.880001068115234,
                "who": "Ionicoders"
            },
            "status": "upcoming"
        },
        {
            "utc_offset": -14400000,
            "venue": {
                "country": "Un",
                "localized_country_name": "???common.country.un???",
                "city": "Washington",
                "address_1": "1015 15th Street Northwest",
                "name": "MakeOffices at K Street",
                "lon": -77.034233,
                "id": 25159112,
                "lat": 38.903061,
                "repinned": false
            },
            "headcount": 0,
            "distance": 0.9049508571624756,
            "visibility": "public",
            "waitlist_count": 0,
            "created": 1491505717000,
            "maybe_rsvp_count": 0,
            "description": "<p>WWC is here to help you kick off your job search, and help you find your dream job in tech.</p> <p>Join us at Make Offices on Thursday, April 20th for an opportunity to have your resume and portfolio reviewed by recruiters and experienced women currently working in the tech community.</p> <p>Here you will learn:<br/>- How to write about technical skills on your resume<br/>- How to craft a professional portfolio<br/>- How to speak to recruiters who are currently hiring about how to write about and present your skills<br/>- Have a professional headshot taken! </p> <p>\n\n\nWhat to bring: </p> <p><br/>- Computer<br/>- Resume (on your computer or hard copies)<br/>- Portfolio (on your computer)<br/>- Professional clothes (for headshot photo)</p>",
            "event_url": "https://www.meetup.com/Women-Who-Code-DC/events/239018146/",
            "yes_rsvp_count": 92,
            "name": "New Year, New Job: Resume and Portfolio Prep Workshop",
            "id": "239018146",
            "time": 1492727400000,
            "updated": 1491506090000,
            "group": {
                "join_mode": "open",
                "created": 1395616294000,
                "name": "Women Who Code DC",
                "group_lon": -77.04000091552734,
                "id": 13508462,
                "urlname": "Women-Who-Code-DC",
                "group_lat": 38.90999984741211,
                "who": "Coders"
            },
            "status": "upcoming"
        }
    ],
    "meta": {
        "next": "https://api.meetup.com/2/open_events?and_text=False&country=us&offset=1&city=Washington&dataType=jsonp&sign=True&format=json&limited_events=False&topic=JavaScript&state=dc&photo-host=public&page=5&radius=25.0&key=3b2c776267d212831792c3364645c1&desc=False&status=upcoming",
        "method": "OpenEvents",
        "total_count": 49,
        "link": "https://api.meetup.com/2/open_events",
        "count": 5,
        "description": "Searches for recent and upcoming public events hosted by Meetup groups. Its search window  is the past one month through the next three months, and is subject to change. Open Events is optimized to search for current events by location, category, topic, or text, and only lists Meetups that have **3 or more RSVPs**. The number or results returned with each request is not guaranteed to be the same as the page size due to secondary filtering. If you're looking for a particular event or events within a particular group, use the standard [Events](/meetup_api/docs/2/events/) method.",
        "lon": "None",
        "title": "Meetup Open Events v2",
        "url": "https://api.meetup.com/2/open_events?and_text=False&country=us&offset=0&city=Washington&dataType=jsonp&sign=True&format=json&limited_events=False&topic=JavaScript&state=dc&photo-host=public&page=5&radius=25.0&key=3b2c776267d212831792c3364645c1&desc=False&status=upcoming",
        "signed_url": "https://api.meetup.com/2/open_events?and_text=False&country=us&offset=0&city=Washington&dataType=jsonp&format=json&limited_events=False&topic=JavaScript&state=dc&photo-host=public&page=5&radius=25.0&desc=False&status=upcoming&sig_id=219901089&sig=c8436cfda2e9c370bd9e88c0967e577f76ee63e1",
        "id": "",
        "updated": 1492714064736,
        "lat": "None"
    }
};






// Example: All-In-One Call =>
function fetchGroups(url, cb, data) {
    if(!data) data = [];
    
    $.ajax({
        
        dataType:'jsonp',
        method:'get',
        url:url,
        success:function(result) {
            console.log('back with ' + result.data.length +' results');
            console.dir(result);
            //add to data
            data.push.apply(data, result.data);
            if(result.meta.next_link) {
                var nextUrl = result.meta.next_link;
                fetchGroups(nextUrl, cb, data);
            } else {
                cb(data);   
            }
        }
    }); 
    
}






























/*
$(document).ready(function() {
    
    var $results = $("#results");

    $results.html("<p>Finding meetups with Ionic in the description.</p>");

    fetchGroups("https://api.meetup.com/find/groups?&photo-host=public&page=50&text=ionic&sig_id=2109318&radius=global&order=newest&sig=ad335a79ccce2b1bb65b27fe10ea6836305e5533&callback=?", function(res) {
        console.log("totally done");
        console.dir(res);   

        var s = "";
        for(var i=0;i<res.length; i++) {
            var group = res[i];
            s += "<h2>"+(i+1)+" <a href='"+group.link+"'>"+group.name+"</a></h2>";
            if(group.group_photo && group.group_photo.thumb_link) {
                s += "<img src=\"" + group.group_photo.thumb_link + "\" align=\"left\">";
            }
            s += "<p>Location: "+group.city + ", " + group.state + " " + group.country + "</p><br clear=\"left\">";
        }
        $results.html(s);
        
        
    });
        
});
*/