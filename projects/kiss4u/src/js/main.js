/*
  [JS Index - main]
  
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
    
    //RZ-Start
    $('.rz-select').material_select('destroy');
    $('.rz-select').material_select();
    $('.hiddendiv.common').remove();
    
    //Side-Nav
    $(document).ready(function () {
      $('#slide-in').on('click', function () {
        $('#sidebar, #gallery').toggleClass('active');
      });
    });

    //Button to top
    var btn = $('#btn-top');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
    }
    });
    $(btn).click(function () {
      $('html, body').animate({
         scrollTop: $("body").offset().top
      }, 1000);
   });
    
    //Filter-Form
    $(".frm-a").click( function() {
      var el = $(this).attr("category");
      $(".pill-btn[id='pill-"+el+"']").click();
    });

    //Filter-SideNav
    $("#side-menu a.filter-el-a").click(function(){
      var el1 = $(this).attr("id");
      $("div.filter-el-card").hide();
      $("div.filter-el-card."+el1+"").show();
    });

    //Location-SideNav
    $("#side-menu a.filter-el-a").click(function(){
      var el1 = $(this).text();
      $("#plswt").remove();
      $("#marker").remove();
      $("#ul_marker").append('<li id="plswt" class="nav-item"><a class="nav-link" href="#">></a></li><li id="marker" class="nav-item"><a class="nav-link" href="#">'+el1+'</a></li>');
    });

    //Filter-Columns
    $(".col-filter").click(function(){
      var el1 = $(this).attr("id");
      $("div.filter-el-card").removeClass("col-lg-2 col-lg-3 col-lg-4 col-lg-6").removeClass("col-xl-2 col-xl-3 col-xl-4 col-xl-6");
      if (el1 == "thum_small") {
        $("div.filter-el-card").addClass("col-lg-3").addClass("col-xl-2");
      } else if (el1 == "thum_med"){
        $("div.filter-el-card").addClass("col-lg-4").addClass("col-xl-4");
      } else if (el1 == "thum_big"){
        $("div.filter-el-card").addClass("col-lg-6").addClass("col-xl-6");
      }
    });

    $(document).ready(function() {
      $("#sidebar #side-menu .menu-item .collapsible-body").css({"display":"block"});
      $("#sidebar #side-menu .menu-item .collapsible-header.arrow-r").addClass("active");
    });

    $(".ul-tabs.nav a.lock").click(function (){
      $(".ul-tabs.nav a.btn-custom").addClass("lock");
      $(this).removeClass("lock");
    });
    $("#atab1, #atabModel1").removeClass("lock");
    
    $("#form-accModal, #form-modelModal").on('hidden.bs.modal', function(){
      $(".ul-tabs.nav a.btn-custom").addClass("lock");
      $("#atab1, #atabModel1").addClass("btn-custom");
      $("#atab1, #atabModel1").removeClass("lock");
      $(".tab-pane.fade.w-100").removeClass("in show active");
      $("#payment1, #model1").addClass("in show active");
    });
}); 
