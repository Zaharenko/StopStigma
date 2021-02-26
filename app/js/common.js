$(document).ready(function () {
  $(".btn-sidebar .btn-icon1").click(function(e) {
    e.preventDefault();
    $(".sidebar").addClass('sidebar-close');
    $(".mini-sidebar").addClass('mini-sidebar-active');
    $(".sidebar-close .btn-icon1").css("display", "none");
    $(".sidebar-close .btn-icon2").css("display", "inline-block");
    $(".content").addClass('max-width');
  });

  $(".btn-sidebar .btn-icon2").click(function(e) {
    e.preventDefault();
    $(".sidebar").removeClass('sidebar-close');
    $(".mini-sidebar").removeClass('mini-sidebar-active');
    $(".sidebar .btn-icon1").css("display", "inline-block");
    $(".sidebar .btn-icon2").css("display", "none");
    $(".content").removeClass('max-width');
  })

  $(".btn-icon-search").click(function(e) {
    e.preventDefault();
    $(".sidebar").removeClass('sidebar-close');
    $(".mini-sidebar").removeClass('mini-sidebar-active');
    $(".sidebar .btn-icon1").css("display", "inline-block");
    $(".sidebar .btn-icon2").css("display", "none");
    $(".content").removeClass('max-width');
    $(".search-form input").focus();
  })
  
});  




