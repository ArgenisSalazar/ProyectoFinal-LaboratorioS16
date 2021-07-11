$('#respuesta').hide();
$(document).ready(function(){
    $('#click').click(function(){
        $('#respuesta').slideDown();
        email=$('#email').val();
        mensaje=$('#texto').val();
        $('#floatingTextarea2').text(mensaje)
        $('#respuesta').text(email+' tu mensaje fue enviado.')
    });
});