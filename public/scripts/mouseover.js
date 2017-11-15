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
});