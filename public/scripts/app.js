/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 *//*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function(){

   $(".container form").on("submit",function(event){

        event.preventDefault();
        console.log( $( this ).serialize() );

    if (($('textarea').val().length) > 140) {
      alert("ERROR: Tweet too long");

    }

    if (($('textarea').val().length) === 0) {
      alert("ERROR: Tweet too short");
    } else if(($('textarea').val().length) < 140){




        function loadtweets(){
          $.ajax({
            url: "/tweets",
            method: "GET",
            success: function(data){
              renderTweets(data);

            }
          })
        }


          $.ajax({
              url: "/tweets",
              method: "POST",
              data: $(this).serialize(),
              success: function(){
                console.log("ok");
                loadtweets();
              }
          })





      }


    });



function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}





/*

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];*/


var createTweetElement = ((tweetobj) => {

var $tweet = $("<article>").addClass("article");

var $header = $("<header>").addClass("head");

var $p = $("<p>").addClass("at");

var $image = $("<img>").addClass("image").attr("src",`${tweetobj.user.avatars.small}`);

var $username = $("<h2>").addClass("name");

var $content = $("<p>").addClass("pcontent");

var $footer = $("<footer>").addClass("footer");

var $time = $("<p>").addClass("time");

var $heart = $("<img>").addClass("heart").attr("src","/images/heart.png").attr("width","15px").attr("height","15px");

var $retweet = $("<img>").addClass("retweet").attr("src","/images/retweet.png").attr("width","15px").attr("height","15px");

var $flag = $("<img>").addClass("flag").attr("src","/images/flag.png").attr("width","15px").attr("height","15px");

var $timestamp = $("<p>")


//header part of article

$($tweet).append($header);
$($header).append($p);
$($p).append(`${escape(tweetobj.user.handle)}`);
$($header).append($image);

/*$($image).append(`src= "${tweetobj.user.avatars.small}"`);
*/
$($header).append($username);
$($username).append(`${escape(tweetobj.user.name)}`);



$($tweet).append($content);
$($content).append(`${escape(tweetobj.content.text)}`);



$($tweet).append($footer);

$($footer).append($heart);


$($footer).append($retweet);


$($footer).append($flag);

$($footer).append($timestamp);
$($timestamp).append(`${escape(tweetobj.created_at)}`);

return $tweet;


});

var renderTweets = ((arrayoftweet) => {

arrayoftweet.forEach((object) => {
var x = createTweetElement(object);
$('.tweets-container').append(x);


});

});
/*
renderTweets(data);*/







/*var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
*/
});


