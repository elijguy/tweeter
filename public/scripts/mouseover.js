$(document).ready(function(){
    $("article").mouseover(function(){
        $("article").css("border-color", "black");
        $(".retweet").show();
        $(".heart").show();
        $(".flag").show();
    });
    $("article").mouseout(function(){
        $("article").css("border-color", "#919191");
        $(".retweet").hide();
        $(".heart").hide();
        $(".flag").hide();
    });
//compose button


    $("#nav-bar button").click(function(){

        $(".new-tweet").slideToggle();
        $(".new-tweet textarea").focus();


    });
    $("#nav-bar button").mouseover(function(){
        $("#nav-bar button").css("background-color", "#b1e0dd")



    });
    $("#nav-bar button").mouseout(function(){
        $("#nav-bar button").css("background-color", "#ccfffc")



    });

});


