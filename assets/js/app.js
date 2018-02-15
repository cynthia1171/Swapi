$(document).ready(function () {
  $('#myModal').modal('toggle')

  $('.cardPer').click(function () {
    $('.modal-title').empty()
    $('.modal-body').empty();
    var id = $(this).attr('id');

    $.ajax({
      url: 'https://swapi.co/api/people/' + id,
      type: 'GET',
    }).done(function (data) {
      $('.modal-title').text(data.name);
      $('.modal-body').append('<div class="form-group">'+
                                '<label for="inputHeight">Estatura</label>'+
                                '<input type="text" class="form-control" id="inputHeight" value="'+data.height+'">'+
                              '</div>'+
                              '<div class="form-group">' +
                                '<label for="inputMass">Peso</label>' +
                                '<input type="text" class="form-control" id="inputMass" value="'+data.mass+'">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="inputHair">Color de pelo</label>' +
                                '<input type="text" class="form-control" id="inputHair" value="'+data.hair_color+'">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="inputEye">Color de ojos</label>' +
                                '<input type="text" class="form-control" id="inputEye" value="'+data.eye_color+'">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="inputBirth">Cumpleaños</label>' +
                                '<input type="text" class="form-control" id="inputBirth" value="'+data.birth_year+'">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="inputGender">Género</label>' +
                                '<input type="text" class="form-control" id="inputGender" value="'+data.gender+'">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="inputSkin">Color de piel</label>' +
                                '<input type="text" class="form-control" id="inputSkin" value="'+data.skin_color+'">' +
                              '</div>' 
      );
    })
      .fail(handleError);
  })
});
/* funcion que se ejecuta cuando ocurre algún error */
function handleError() {
  console.log('Se ha producido un error');
}



