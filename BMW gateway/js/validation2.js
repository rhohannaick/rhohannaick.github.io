$(document).ready(function()
{
$("#rform").validate(

    {

        rules:{
            nic: {required: true, maxlength: 14},
            fname:{required: true, number: false},
            sname:{required: true, number: false},
            phone:{required: true, number: true minlength: 8, maxlength: 8},
            email:{required: true, },
            country:{required: true},
            state: {required: true},
            username: {required: true},
            pass: {required: true},
            cpass: {required: true},

        },

        messages: {
                    nic: {maxlength: jQuery.format("Please enter a valid nic, it should only contain 14 characters.")},
                    fname: {number: jQuery.format("The first name field should only contain letters")},
                    sname: {number: jQuery.format("The surname field should only contain letters")},
                    phone: {minlength: jQuery.format("The phone field should only contain 8 numbers")},
                    phone: {maxlength: jQuery.format("The phone field should only contain 8 numbers")},
        },

        errorPlacement: function(error, element){
                if (element.is("[name=radio]"))
                error.appendTo($("p#color"));
                else if (element.is("[name=season]"))
                error.appendTo($("p#season"));
                else
                  error.insertAfter(element);

        }

  }

);
});
function validatenic(){
     var n = document.forms["rform"]["nic"].length;
     if ( n >14 || n <14){
       alert("Please enter a valid nic, it should only contain 14 characters.");
       return false;
     }
   }
