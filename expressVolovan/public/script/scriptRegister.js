window.addEventListener('load', function () {
    let errores = 0;
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    let nameError = document.querySelector("#nameError");
    let emailError = document.querySelector("#emailError");
    let passwordError = document.querySelector("#passwordError");

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };


    name.addEventListener("blur", function () {
        errores = 0;
        nameError.innerHTML = "";
        if ( name.value.length<2) {
            errores = errores + 1;
            name.style.borderColor = "red";
            nameError.innerHTML += "Debes escribir un nombre con más de 2 letras";
        }
        else {
            name.style.borderColor = "green";
        }
    });

    email.addEventListener("blur", function () {
        errores = 0;
        emailError.innerHTML = "";
        if (!isEmailValid(email.value)) {
            errores = errores + 1;
            email.style.borderColor = "red";
            emailError.innerHTML += "Debes escribir un correo válido";
        }
        else {
            email.style.borderColor = "green";
        }
    });

    password.addEventListener("blur", function () {
        errores = 0;
        passwordError.innerHTML = "";
        if (password.value.length < 8) {
            if(!isPasswordSecure(password.value)){
                errores = errores + 1;
                password.style.borderColor = "red";
                passwordError.innerHTML +="Debes escribir una contraseña con 8 o más caracteres fuerte";
            }

        }
        else {
            password.style.borderColor = "green";
        }
    });


    document.querySelector("form").addEventListener('submit', function (e) {
        if (errores > 0) {
            e.preventDefault();
        };
    });


});
