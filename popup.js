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


    //navigate between textboxes after starting the session,using up-down arrows
   var first_element=$("#textboxes li:first-child");
   var last_element=$("#textboxes li:last-child");

   //var first-icon=$("#icons-list li:first-child");
   //var last-icon=$("#icons-list li:last-child");

   first_element.addClass("current").fadeIn();
  // first-icon.addClass("current-icon").css("background","red");

  $('.target').keydown(function(e){
    if (e.keyCode == 39) { 
    var current_div=$("#textboxes li.current");
    current_div.removeClass("current").fadeOut();

    if(!current_div.is("#textboxes li:last-child")){
      current_div=current_div.next('li').addClass("current").fadeIn().find('input').val('').focus();
    
    }else{
      current_div=first_element.addClass("current").fadeIn().find('input').val('').focus();
    }
  }

   else if(e.keyCode == 37){
  var current_div=$("#textboxes li.current");
    current_div.removeClass("current").fadeOut();

    if(!current_div.is("#textboxes li:first-child")){
      current_div=current_div.prev('li').addClass("current").fadeIn().find('input').val('').focus();
      
    }else{
      current_div=last_element.addClass("current").fadeIn().find('input').val('').focus();
    }
       }
   });
//navigation ends

//icons
// $(function(){
//   $("#input-setup").focus(function(){
//     $(".circle-icon").css("background","red");
//   })
//   .blur(function(){
//     $(this).css("background","transparent");
//   })
 });




//progress bar
// function progress(timeleft, timetotal, $element) {
//     var progressBarWidth = timeleft * $element.width() / timetotal;
//     $element.find('div').animate({ width: progressBarWidth }, 2500).html(timeleft + "");
//     if(timeleft > 0) {
//         setTimeout(function() {
//             progress(timeleft - 1, timetotal, $element);
//         }, 60000);
//     }
// };

// progress(60, 60, $('#progressBar'));
    

//   });
  