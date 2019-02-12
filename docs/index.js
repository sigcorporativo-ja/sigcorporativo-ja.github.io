$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

  $("#contentppal").load("proyecto.html");
});

$('nav li').on('click', 'a', function (e) {
  if (!$(this).hasClass("dropdown-toggle")) {
    e.preventDefault(); 
    var url = $(this).attr('href'); 
    $("#contentppal").load(url);
  }
});