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


    $(".btn-nextpill").click( function(){
      var btnID = $(this).attr("category");
      $(".btn-pill[id='"+btnID+"']").click();
    });

  $("input[type=file]").change(function (){
    var file = $(this).get(0).files[0];

    var elImg = $(this).parent().parent().parent().parent().parent().find("img.card-img-top");

    if(file){
      var reader = new FileReader();

      reader.onload = function(){
          $(elImg).attr("src", reader.result);
      }

      reader.readAsDataURL(file);
    }

  });


});
