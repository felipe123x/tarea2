"use strict";
var formulario = document.getElementById("formulario");
var inputs = document.querySelectorAll("#formulario input");
var mensaje = document.getElementById("mensaje");
var expresiones = {
    rut: /^[a-zA-Z0-9\_\-\.]{8,13}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};
function revisarCheckbox(grupo) {
    for (var _i = 0, grupo_1 = grupo; _i < grupo_1.length; _i++) {
        var elemento = grupo_1[_i];
        if (elemento.checked)
            return true;
    }
    return false;
}
formulario.addEventListener('submit', function (event) {
    var nombre = document.getElementById("nombre");
    var rut = document.getElementById("rut");
    var correo = document.getElementById("correo");
    var telefono = document.getElementById("telefono");
    var grupo1 = document.getElementsByName("grupo1");
    var grupo2 = document.getElementsByName("grupo2");
    var grupo3 = document.getElementsByName("grupo3");
    var otro = document.getElementsByName("otro");
    var flag;
    var flag2;
    var flag3;
    if (expresiones.nombre.test(nombre.value)) {
        nombre.setCustomValidity("");
    }
    else
        nombre.setCustomValidity("incorrecto");
    if (expresiones.rut.test(rut.value)) {
        rut.setCustomValidity("");
    }
    else
        rut.setCustomValidity("incorrecto");
    if (expresiones.correo.test(correo.value)) {
        correo.setCustomValidity("");
    }
    else
        correo.setCustomValidity("incorrecto");
    if (expresiones.telefono.test(telefono.value)) {
        telefono.setCustomValidity("");
    }
    else
        telefono.setCustomValidity("incorrecto");
    flag = revisarCheckbox(grupo1);
    flag2 = revisarCheckbox(grupo2);
    flag3 = revisarCheckbox(grupo3);
    if (!flag3 == false) {
        if (otro.value.trim() != "") {
            flag3 = true;
        }
    }
    formulario.classList.add('was-validated');
    if (!flag || !flag2 || !flag3 || !formulario.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
}, false);
