$(document).ready(function(){
	var fieldFirstName = '#txtFirstName';
	var fieldSurname = '#txtSurname';
	var fieldEmail = '#txtEmail';
	var fieldPhone = '#txtPhone';

	var msgFirstName = 'Invalid first name';
	var msgSurname = 'Invalid surname';
	var msgEmail = 'Invalid email';
	var msgPhone = 'Invalid Phone number'

	// click on register
	$('#btnRegister').click(function(event){
		// prevent page to refresh
		event.preventDefault();
		var valid = false;
		valid = validTextbox(fieldFirstName, msgFirstName, /^[a-zA-Z]+$/);
		valid = validTextbox(fieldSurname, msgSurname, /^[a-zA-Z]+$/);
		valid = validTextbox('#txtNic', 'Invalid NIC', /^[a-zA-Z0-9]+$/);
		valid = validTextbox('#txtUsername', 'Invalid Username', /^[a-zA-Z0-9]+$/);
		valid = validTextbox(fieldEmail, msgEmail, /^\S+@\S+\.\S+$/);
		valid = validTextbox('#txtPhone', 'msgPhone', /^[0-9]+$/);

		if (valid) {
			//$('form')[0].submit();
			document.location.href = 'puzzel-game.html';
		}
	});

	$('#btnReset').click(function(event){
		event.preventDefault();
		$('form')[0].reset();
	});


	// on value change
	$(fieldFirstName).keyup(function(){
		validTextbox(fieldFirstName, msgFirstName, /^[a-zA-Z]+$/);
	});
	$(fieldSurname).keyup(function(){
		validTextbox(fieldSurname, msgSurname, /^[a-zA-Z]+$/);
	});

	$(fieldEmail).keyup(function(){
		validTextbox(fieldEmail, msgEmail, /^\S+@\S+\.\S+$/);
	});
	$(fieldPhone).keyup(function(){
		validTextbox(fieldPhone, msgPhone, /^[0-9]+$/);
	});
});


function validTextbox(field, message, validator) {
	var fieldValue = $(field).val();
	var valid = fieldValue.match(validator) != null;
	var messageElement = $(field).parent().find('small');
	if (!valid) {
		messageElement.text(message);
		messageElement.css('display', 'block');
	} else {
		messageElement.text(null);
		messageElement.css('display', 'none');
	}

	return valid;
}