$(document).ready(function(){
	$(document).on('click', '.edit', function(){
		var id=$(this).val();
		var usuario=$('#userm'+id).text();
		var nombre=$('#namem'+id).text();
		var FechaNacimiento=$('#datem'+id).text();
        var sexo=$('#sexom'+id).text();
        var email=$('#emailm'+id).text();
        var estado=$('#estadom'+id).text();
	
		$('#edit').modal('show');
		$('#userm').val(usuario);
		$('#namem').val(nombre);
		$('#datem').val(FechaNacimiento);
        $('#sexom').val(sexo);
        $('#emailm').val(email);
        $('#estadom').val(estado);
	});
});