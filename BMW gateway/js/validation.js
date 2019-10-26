function validateForm() {
                         var check = /^[\w\._-]+@[\w\._-]+\.[a-zA-Z]{2,7}$/;
                         var emailcheck= thisForm.email.value;

                         var pass = thisForm.pass.value;
                         var cpass = thisForm.cpass.value;

                         var namecheck = /^[A-Za-z]+$/;
                         var f = document.getElementById('fname').value;
                         var s = thisForm.sname.value;

                         var niccheck =thisForm.nic.value.length;

                         var phonenum = /^\+(?:[0-9].?){6,14}[0-9]$/;
                         var contactnum = thisForm.phone.value;

                         var countrycheck = thisForm.country.value;
                         var statecheck = thisForm.state.value;

                         var unamecheck = thisForm.username.value;
                         var unamelength =thisForm.username.value.length;

                         if (!f.match(namecheck))
                         {
    	                    alert("There's an error in the First Name field");
                          document.getElementById('fname').select();

		                      return false;

                          }

                          else if (!sname.match(namecheck) || sname=="" || sname==null)
                          {
    	                     alert("There's an error in the Surname field");
                           thisForm.sname.select();

		                       return false;

                          }


    }

    function resetfrm()
{
	alert("erasing all")
}

