'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"

// Also, the URL is missing a crutial component, find out what it is and insert it too!



var url = "https//www.reddit.com/r/nevertellmethebots";

let newurl = url.replace("bots","odds")

let newstuff = newurl.slice(0,5) + ":" + newurl.slice(5)

console.log(newstuff);