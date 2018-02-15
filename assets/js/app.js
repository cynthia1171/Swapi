$(document).ready(function () {
  
  $.ajax({
    url: 'https://swapi.co/api/people',
    type: 'GET',
    success: function (results) {
      console.log(results);
      var largo = results.results.length;
      for (var i = 0; i<=largo; i++) {
        var nombre = $('<p  id="' + i + '" class="card">' + results.results[i].name + '</p>');
        $('.monitos').append(nombre);
      }
    }
  });
})

$('.card').click(function(){
  var idPersonaje = $(this).attr('id');
  console.log(idPersonaje);
})