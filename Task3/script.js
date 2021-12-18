const inputtxt= document.getElementById("pass");

function CheckPassword(inputtxt) { 
    var paswd=  /^(?=.*[0-9])(?=.*[@])[a-zA-Z0-9@]$/;
    if(inputtxt.value.match(paswd)) { 
        alert('Correct')
        return true;
    } else{ 
        alert('Password must contain an uppercasse letter a number and only @ for special characters')
        return false;
    }
}  