

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

  var hash = document.location.hash;
  if (hash) {
    $("#contentppal").load("noticias.html", function(){
      $("#" + hash.substring(1)).trigger('click');
    });
  } else {
    $("#contentppal").load("proyecto.html");
  }

  $(document).on('click', '.noticia', function(e) {
    e.preventDefault(); 
    var url = $(this).attr('contenido');
    var id = $(this).attr('id');
    // Solo se carga la pagina la primera vez que se accede
    if($("#" + id + "content").is(':empty')){
      $("#" + id + "content").load(url);
    } 
  });
});

$('nav li').on('click', 'a', function (e) {
  if (!$(this).hasClass("dropdown-toggle")) {
    e.preventDefault(); 
    var url = $(this).attr('href'); 
    $("#contentppal").load(url);
  }
});




 
