const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


//show input error message

function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

//check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input)
    }else {
        showError(input, "Email is not valid")
    }
}

//check required fileds
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        console.log(input.value);
        if(input.value.trim() === ""){
            showError(input, ` ${getFieldName(input)} is required`);
        } else {
            showSuccess(input)
        }
    });

}

//check input length
function checkLength(input, min, max) {
    if(input.value.length < min ) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

// event listeners

form.addEventListener("submit", function(e){
    e.preventDefault();

    checkRequired([username,email,password,confirmPassword]);
    checkLength(username, 3, 15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password, confirmPassword)

})

//check passwords match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "passwords do not match");
    }
}


//get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     // console.log("submit");
//     console.log(username.value)
//     if (username.value === "") 
//     {showError(username, "username required")}
//          else {
//         showSuccess(username);
//     }
//     if (email.value === "") {
//         showError(email, "Email required")
//     }  
//  else if (!isValidEmail(email.value)){
//     showError(email, "email is not vaild")
// } else {
//         showSuccess(email);
//     }
//     if (password.value === "") {
//         showError(password, "Password required")
//     } else {
//         showSuccess(password);
//     }
//     if (confirmPassword.value === "") {
//         showError(confirmPassword, "confirm password required")
//     } else {
//         showSuccess(confirmPassword);
//     }
// })