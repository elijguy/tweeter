

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

        $(".tweets-container").empty();

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

    $($timestamp).append(`${escape(tweetobj.created_at)}`);




    return $tweet;



  });



  var renderTweets = ((arrayoftweet) => {

    arrayoftweet.forEach((object) => {


      var x = createTweetElement(object);

      $('.tweets-container').prepend(x);


    });

  });

});


