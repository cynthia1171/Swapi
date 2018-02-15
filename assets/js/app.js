$(document).ready(function() {
  $('#myModal').modal('toggle')

  var id = 0;
  $.ajax({
    url: 'https://swapi.co/api/people',
    type: 'GET',
  }).done(function (data) {
    var arr = data.results;
    for (var i in arr) {
      var datos = arr[i];
      $('.monitos').append('<div class="col-md-4 cardPer" id="' + i +'" data-toggle="modal" data-target="#modal">' + datos.name + '</div>' +
        '');
    }

    $('.cardPer').click(function () {
      var valor = parseInt($(this).attr('id'));
      id = valor +1;
      alert(id);
    })
  })
    .fail(handleError);
});


/* funcion que se ejecuta cuando ocurre algún error */
function handleError() {
  console.log('Se ha presentado un error');
}

