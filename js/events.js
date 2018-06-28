//define functions here
function getIt(){
  $('p').on('click', 
  function(){
    alert("Hey!");
    return;
  });
}

function framIt(){
  $('img .tasty').on('load',
  function(){
    
  }
}
$(document).ready(function(){

// call functions here
getIt();

});
