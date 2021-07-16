/*
  [JS Index - Model Center / Single]
  
  ---
  
  Author:   RZ
*/

/*

*/

$(function() {
    "use strict";
    $(document).ready(function() {
        setTimeout(function(){ 
        }, 2000);
    });

    $("#categoryNameWrapper").hide();
    $("#selectCategory").hide();

    $("#categoryWrapper a").click( function (){
      var addCheck =  $(this).find("input");
      $(addCheck).click();
      $(".categoryCard").removeClass("active");
      if ( $('input:radio[name=groupOfCategoryRadios]:checked').val() == 'flirt' ){
        $('#cardFlirt').addClass("active");
        $("#selectCategory").hide();
        $("#categoryNameWrapper").show();
      }else {
        $('#cardNude').addClass("active");
        $("#categoryNameWrapper, #selectCategory").show();
      }
    });

    $("#dateOfBirth").click( function(){
      
    });

});
