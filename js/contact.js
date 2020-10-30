function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var message = document.contactForm.message.value;


    var nameErr = true;
    var emailErr = true;
    var mobileErr = true;
    var messErr = true;


    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex1 = /^\S+@\S+\.\S+$/;
        if (regex1.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex2 = /^[1-9]\d{9}$/;
        if (regex2.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }


    // Validate massage
    if (message == "") {
        printError("messErr", "Please enter your message");
    } else {
        var regex3 = /^[a-zA-Z\s]+$/;
        if (regex3.test(message) === false) {
            printError("messErr", "Please enter a valid message");
        } else {
            printError("messErr", "");
            messErr = false;
        }
    }


    if (nameErr || emailErr || mobileErr || messErr == true) {
        return false;
    } else {
        alert('You have submitted the form..');
    }


}