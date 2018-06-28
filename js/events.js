//define functions here
function getIt(){
  $('p').on('click', 
  function(){
    alert("Hey!");
    return;
  });
}

function frameIt(){
  $('.tasty').on('load',
  function(){
    $(this).css('border', "solid 2px red");
  });
}

$(document).ready(function(){

// call functions here
getIt();

});
