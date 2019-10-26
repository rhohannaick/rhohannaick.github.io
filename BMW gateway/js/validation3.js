function resetfrm()
{
alert("Erasing all fields")
}

function validateform()
{

var nic = document.regform.nic;
var fname = document.regform.fname;
var sname = document.regform.sname;
var phone = document.regform.phone
var email = document.regform.email;
var sex = document.regform.sex;
var country = document.regform.country;
var state = document.regform.state;
var acti1 = document.regform.indoor;
var acti2 = document.regform.outdoor;
var uname = document.regform.username;
var pass = document.regform.pass;
var cpass = document.regform.cpass;

var namecheck = /^[A-Za-z]+$/;
var numbercheck = /[0-9]|\./;

if(nic.value.length == 0 || nic.value.length < 14 || nic.value.length > 14)
{
 alert("Please enter a valid NIC, it should be 14 characters");
 nic.focus();
 return false;

}

if(!fname.value.match(namecheck) || !sname.value.match(namecheck) || fname.value == "" || fname.value == null || sname.value == "" || sname.value == null)
{
  alert("Please enter a valid name, it should only contain letters");
  fname.focus();
  return false;
}

if(!phone.value.match(numbercheck) || phone.value.length == 0 || phone.value.length < 8 || phone.value.length > 8)
{
  alert("Please enter a valid phone number, it should only contain 8 digits");
  phone.focus();
  return false;
}

if(uname.value.length < 8)
{
  alert("Please enter a valid username, it should contain more than 8 characters")
  uname.focus();
  return false;
}

if(pass.value != cpass.value)
{
  alert("Passwords do not match, please enter again")
  pass.focus();
  return false;
}

function ChangeCaptcha() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 5;
	var ChangeCaptcha = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		ChangeCaptcha += chars.substring(rnum,rnum+1);
	}
	document.getElementById("randomfield").value = ChangeCaptcha;
}
function check() {
if(document.getElementById("CaptchaEnter").value == document.getElementById("randomfield").value ) {
alert("captcha verified");

}
else {
alert("Please re-check the captcha");
return false;
}
}


}

function disablestate()
{
  if(country.value.selected == "Mauritius" || country.value.selected == "MU")
  {
   document.getElementById("state").disabled = 'true';

  }
}

function activities()
{
  if(acti1.value == "in")
  {
    window.location.href='indoor.html';
  }
  else window.loaction.href = 'outdoor.html';
}
