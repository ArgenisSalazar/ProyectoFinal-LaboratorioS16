$('#resultado').hide();
$(document).ready(function(){
    $('#boton').click(function(){
        $('#resultado').slideDown();
        nombre = $('#name').val();
        apellido = $('#last-name').val();
        email = $('#inputEmail').val();
        telefono = $('#telefono').val();
        $('#mensaje1').text('Gracias por enviarnos un mensaje, trataremos de responderte lo mas rápido posible')
        $('#mensaje2').text('Nombres: ' + nombre)
        $('#mensaje3').text('Apellidos: ' + apellido)
        $('#mensaje4').text('Email: ' + email)
        $('#mensaje5').text('Teléfono: ' + telefono)
    });  
});    