//when the extension is loaded, this function will hide the content of the session elements,
//which has to be displayed just after click on the "Start Session" button. 
$(document ).ready(function(){
  $('#session').hide();

//when "Start Session" button is clicked the function will show the session elements
//and hide the div with the informations about area charter tester and environment 

  $(function() {
    $('#startSessionButton').click(function(){
      $('#session').show();
      $('#generalInfo').hide();
    });
  });

  $('.target').keydown(function(e){
    if (e.keyCode == 39) { 
      $(this).parent().fadeOut();
      $(this).parent().next('div').fadeIn();
      $(this).parent().next('div').find('input').val('').focus();
      return false;
    }
    else if(e.keyCode == 37){
      $(this).parent().fadeOut();
      $(this).parent().prev('div').fadeIn();
      $(this).parent().prev('div').find('input').val('').focus();
      return false;
    }
  });

  $('#next').click(function() {
    $('.current').removeClass('current').hide().next().show().addClass('current');
    if ($('.current').hasClass('last')) {
      $('#next').attr('disabled', true);
    }
    $('#prev').attr('disabled', null);
  });

  $('#prev').click(function() {
    $('.current').removeClass('current').hide().prev().show().addClass('current');
    if ($('.current').hasClass('first')) {
      $('#prev').attr('disabled', true);
    }
    $('#next').attr('disabled', null);
  });


});

