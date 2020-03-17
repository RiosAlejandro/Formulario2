function validar(correo){
		tester = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z]+)\.)+([a-zA-Z]{2,4})+$/;
		return tester.test(correo);
	}

	function valnombre(){

		var nombre = document.getElementById('nombre').value;
		var correo = document.getElementById('correo').value;
		var contrasena = document.getElementById('contrasena').value;
	    var confirmar = document.getElementById('confirmar').value;

		if(nombre==""){
			$('#alert').html('El nombre es obligatorio').slideDown(500);
	 		$('#nombre').focus();
	 		return false;
		}
		else {
	 		$('#alert').html('').slideUp(300);
	 }
	 	if(correo==""){
			$('#alert1').html('El email es obligatorio').slideDown(500);
	 		$('#correo').focus();
	 		return false;
		}
		else {
	 		$('#alert1').html('').slideUp(300);
	 }
	 	if(validar(correo)==false){
			$('#alert1').html('ingresa un email valido').slideDown(500);
	 		$('#correo').focus();
	 		return false;
		}
		else {
	 		$('#alert1').html('').slideUp(300);
	 }
	 	if(contrasena==""){
			$('#alert2').html('ingresa una contraseña').slideDown(500);
	 		$('#contrasena').focus();
	 		return false;
		}
		else {
	 		$('#alert2').html('').slideUp(300);
	 }
	 	if(confirmar==""){
			$('#alert3').html('Debes comprobar tu contraseña').slideDown(500);
	 		$('#confirmar').focus();
	 		return false;
		}
		else {
	 		$('#alert3').html('').slideUp(300);
	 }
	 	if (contrasena!=confirmar) {
	 		$('#alert3').html('Las contraseñas no coinciden').slideDown(500);
	 		$('#contrasena').val('');
	 		$('#confirmar').val('');
	 		$('#contrasena').focus();
	 		return false;
	 	}
	 	else {
	 		$('#alert3').html('').slideUp(300);
	 	}

	}


$(function(){
	'use strict';

	if (Modernizr.input.placeholder) {
        $('body').flyLabels();
      }
});
