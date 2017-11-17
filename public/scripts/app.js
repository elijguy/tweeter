

$(document).ready(function(){


/*on submit of new tweet in compose text area
checks the length of text input and returns error
if the value of the length is larger then 140 or if text
area is left empty*/

  $(".container form").on("submit",function(event){

    event.preventDefault();

    console.log( $( this ).serialize() );


    if (($('textarea').val().length) > 140) {

      alert("ERROR: Tweet too long");

    }


    if (($('textarea').val().length) === 0) {

      alert("ERROR: Tweet too short");

    } else if(($('textarea').val().length) < 140){

/*text data, after the tests are passed
 is sent to ajax post request which on success,
 posts the data to the /tweets URL,*/

      function loadtweets(){

        $(".tweets-container").empty();

        $.ajax({

          url: "/tweets",

          method: "GET",

          success: function(data){

            renderTweets(data);

          }

        })
      }
      /*ajax get request recieves the data from the URL
      and inserts it into a function called renderTweets(Go to line 170)*/


        $.ajax({

          url: "/tweets",

          method: "POST",

          data: $(this).serialize(),

          success: function(){

            console.log("ok");

            loadtweets();

            $(".textinput").val("");

            $(".counter").text(140);

          }

        })



      }


  });


  //security measures so script isnt used if entered into textarea
  function escape(str) {

    var div = document.createElement('div');

    div.appendChild(document.createTextNode(str));

    return div.innerHTML;

  }



  //a new tweets DOM structure

  var createTweetElement = ((tweetobj) => {

    var timefromnow = (moment(tweetobj.created_at).fromNow());

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



    $($tweet).append($header);

    $($header).append($p);

    $($p).append(`${escape(tweetobj.user.handle)}`);

    $($header).append($image);

    $($header).append($username);

    $($username).append(`${escape(tweetobj.user.name)}`);

    $($tweet).append($content);

    $($content).append(`${escape(tweetobj.content.text)}`);

    $($tweet).append($footer);

    $($footer).append($heart);

    $($footer).append($retweet);

    $($footer).append($flag);

    $($footer).append($timestamp);

    $($timestamp).append(`${(timefromnow)}`);




    return $tweet;



  });


/*rendertweets passes the data to function createTweetElement,
which runs through the data and creates the DOM structure of the tweet*/
  var renderTweets = ((arrayoftweet) => {

    arrayoftweet.forEach((object) => {


      var x = createTweetElement(object);

      $('.tweets-container').prepend(x);
//the DOM structure or "the tweet", is prepended to the section found in index.html on line 78

    });

  });

});


