$(document).ready(function () {
  $('#myModal').modal('toggle')

  $('.cardPer').click(function () {
    var id = $(this).attr('id');

    $.ajax({
      url: 'https://swapi.co/api/people/' + id,
      type: 'GET',
    }).done(function (data) {
      console.log(data);
    })
      .fail(handleError);
  })
});


/* funcion que se ejecuta cuando ocurre algún error */
function handleError() {
  console.log('Se ha producido un error');
}



