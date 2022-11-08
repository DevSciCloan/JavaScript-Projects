function changeBackgroundColor(e) {
    e.style.backgroundColor = "white";
}

function validateContactForm() {
    let inputs = document.forms["contact"];
    let errorInfo = document.getElementById("info");
    let fnameError = "Please enter your First Name! <br>";
    let lnameError = "Please enter your Last Name! <br>";
    let emailError = "Please enter a valid email! <br>";
    // Validate first name
    if (inputs["fname"].value == "" || inputs["fname"].value.length < 2) {
        errorInfo.innerHTML += fnameError;
        inputs["fname"].style.backgroundColor = "tomato"; 
        return false;
    } else if (errorInfo.innerHTML.search("First") != -1) {
        errorInfo.innerHTML = errorInfo.innerHTML.replace(fnameError," ");
        inputs["fname"].style.backgroundColor = "white";
    }
    // Validate last name
    if (inputs["lname"].value == "") {
        errorInfo.innerHTML += lnameError;
        inputs["lname"].style.backgroundColor = "tomato"; 
        return false;
    } else if (errorInfo.innerHTML.search("Last")!= -1) {
        errorInfo.innerHTML = errorInfo.innerHTML.replace(lnameError," ");
        inputs["lname"].style.backgroundColor = "white";
    }
    // Validate email
    if (inputs["email"].value == "" || (inputs["email"].value.search(/@/) == -1)) {
        errorInfo.innerHTML += emailError;
        inputs["email"].style.backgroundColor = "tomato"; 
        return false;
    } else if (errorInfo.innerHTML.search("email")) {
        errorInfo.innerHTML = errorInfo.innerHTML.replace(emailError," ");
        inputs["email"].style.backgroundColor = "white";
    }
    return true;
}