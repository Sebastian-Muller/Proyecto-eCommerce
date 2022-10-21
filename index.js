// **Inicio validacion formulario de inicio de sesion**

function validarInicio() {
    if (document.formularioLogin.email.value.length <= 5) {
        alert("Ingrese su direccion de correo.")
        document.formularioLogin.email.focus()
        return 0;
    }

    if (document.formularioLogin.password.value.length < 6) {
        alert("Ingrese su contraseña.")
        document.formularioLogin.password.focus()
        return 0;
    }

    alert("Inicio de sesión completado con éxito!");
    document.formularioLogin.submit();
}


// **Inicio validacion formulario de registro**

function validarRegistro() {
    if (document.formularioSingin.email.value.length <= 5) {
        alert("Ingrese su direccion de correo.")
        document.formularioSingin.email.focus()
        return 0;
    }

    if (document.formularioSingin.nombApel.value.length <= 9) {
        alert("Ingrese su nombre y apellido.")
        document.formularioSingin.nombApel.focus()
        return 0;
    }

    if (document.formularioSingin.password.value.length < 6) {
        alert("Ingrese una contraseña de al menos 6 digitos.")
        document.formularioSingin.password.focus()
        return 0;
    }

    password1 = document.formularioSingin.password.value
    password2 = document.formularioSingin.passwordCheck.value

    if (password1 !== password2) {
        alert("Las contraseñas ingresadas no coindiden.")
        document.formularioSingin.password.focus()
        return 0;
    }

    alert(`${document.formularioSingin.nombApel.value}, bienvenido a nuestra comunidad! Hemos enviado un correo a ${document.formularioSingin.email.value} para validar tu identidad.`);
            document.formularioSingin.submit();
}

