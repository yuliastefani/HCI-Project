// Dropdown Menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Validation
let inputUsername = document.getElementById("username");
let inputEmail = document.getElementById("email");
let inputNumber = document.getElementById("noHp");
let inputPassword = document.getElementById("password");
let inputConfirmPassword = document.getElementById("confirm");
let inputcheckbox = document.getElementById("checkbox");

function check(){
    inputUsername = document.getElementById("username").value;
    if(inputUsername.length < 5 || inputUsername.length > 15){
        alert("Username must be 5-15 characters!");
        return false;
    }
            
    inputEmail = document.getElementById("email").value;
    if(inputEmail[0]=='@'|| inputEmail[0]=='.'|| inputEmail[0]=='_'){
        alert("Invalid Email Address!");
        return false;
    }
    else if (inputEmail[inputEmail.indexOf("@") - 1] == '.' || inputEmail[inputEmail.indexOf("@") + 1] == '.'){
        alert("Invalid Email Address!");
        return false;
    }
    else if(inputEmail.endsWith(".com") == false && inputEmail.endsWith(".ac.id") == false && inputEmail.endsWith(".co.id")==false){
        alert("Invalid Email Address!");
        return false;
    }

    inputNumber = document.getElementById("noHp").value;
    if(inputNumber.length < 10 || inputNumber.length > 13){
        alert("Handphone number must be 10-13 number!");
        return false;
    }

    inputPassword = document.getElementById("password").value;
    if(inputPassword.length < 6 || inputPassword.length > 8){
        alert("Password must be 6-8 characters!");
        return false;
    }

    inputConfirmPassword = document.getElementById("confirm").value;
    if(inputConfirmPassword.length<6 || inputConfirmPassword.length>8){
        alert("Password must be 6-8 characters!");
        return false;
    }
    else if(inputConfirmPassword != inputPassword){
        alert("Confirm Password must same with Password");
        return false;
    }

    inputcheckbox = document.getElementById("checkbox").checked;
    if(inputcheckbox == false){
        alert("You must agree with the Terms & Condition!");
        return false;
    }

    alert("Register Success");
    return true;
}