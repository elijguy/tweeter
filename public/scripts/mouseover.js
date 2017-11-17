$(document).ready(function(){

//compose button functionality


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


