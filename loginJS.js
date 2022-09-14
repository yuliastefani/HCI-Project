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
let inputPassword = document.getElementById("password");

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

    inputPassword = document.getElementById("password").value;
    if(inputPassword.length < 6 || inputPassword.length > 8){
        alert("Password must be 6-8 characters!");
        return false;
    }

    alert("Login Success");
    return true;
}