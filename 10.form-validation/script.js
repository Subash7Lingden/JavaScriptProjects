// JavaScript Steps
// 1 target id and classes
// 2 add event listener -> Submit
// 3 engine function 
// 4 test the system
 
// let id = (id) => document.getElementById(id);
// let classes = (classes) => document.getElementsByClassName(classes);

// let username = id("username"),
//     email = id("email"),
//     password = id("password"),
//     form = id("form"),
//     errorMsg = classes("error"),
//     successIcon = classes("success-icon"),
//     failureIcon = classes("failure-icon");


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     enigne(username, 0 , "Username can not be blank");
//     enigne(email, 1, "Email can not be blank");
//     enigne(password, 2, "Password can not be blank");

// });

// let enigne = (id, serial, message) => {
//     if(id.value.trim() === "") {
//             errorMsg[serial].innerHTML = message;
//             failureIcon[serial].style.opacity = '1';
//             successIcon[serial].style.opacity = '0';
//         }
//         else {
//             errorMsg[serial].innerHTML = "";
//             failureIcon[serial].style.opacity = '0';
//             successIcon[serial].style.opacity = '1';
//         }
//     }


// regex

// 1. Target IDs and classes
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// 2. Regex patterns
let usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// 3. Submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(
        username,
        0,
        usernameRegex,
        "Username must contain at least 3 characters (letters, numbers or underscores)"
    );

    engine(
        email,
        1,
        emailRegex,
        "Please enter a valid email address"
    );

    engine(
        password,
        2,
        passwordRegex,
        "Password must have 8 characters, uppercase, lowercase, number and special character"
    );
});


// 4. Validation engine
let engine = (input, serial, regex, message) => {

    let value = input.value.trim();

    if (value === "") {
        errorMsg[serial].innerHTML = "This field cannot be blank";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

        return false;
    }

    else if (!regex.test(value)) {
        errorMsg[serial].innerHTML = message;

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

        return false;
    }

    else {
        errorMsg[serial].innerHTML = "";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

        return true;
    }
};
