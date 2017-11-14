
$( document ).ready(function() {

  $('textarea').on('keydown', function(e) {

    var char = $('textarea').val().length;

    var max = 140;

    var x = (max - char);

    if(x < 0){

      $(this).siblings('.counter').text(x).css("color","red");

    }else{

      $(this).siblings('.counter').text(x).css("color","black");

    }

  });

});



