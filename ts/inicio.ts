let formulario:any=document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input")


let mensaje:any=document.getElementById("mensaje");

const expresiones = {
	rut: /^[a-zA-Z0-9\_\-\.]{8,13}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

function revisarCheckbox(grupo:any){
    for(var elemento of grupo){
        if(elemento.checked)
            return true;
    }
    return false;
}


 formulario.addEventListener('submit', function (event:any) {

    let nombre:any=document.getElementById("nombre");
    let rut:any=document.getElementById("rut");
    let correo:any=document.getElementById("correo");
    let telefono:any=document.getElementById("telefono");
    let grupo1:any=document.getElementsByName("grupo1");
    let grupo2:any=document.getElementsByName("grupo2");
    let grupo3:any=document.getElementsByName("grupo3");
    let otro:any=document.getElementsByName("otro");
    let flag:boolean;
    let flag2:boolean;
    let flag3:boolean;

    if(expresiones.nombre.test(nombre.value)){
        nombre.setCustomValidity("");
    }else   nombre.setCustomValidity("incorrecto");
    if(expresiones.rut.test(rut.value)){
        rut.setCustomValidity("");
    }else  rut.setCustomValidity("incorrecto");
    if(expresiones.correo.test(correo.value)){
        correo.setCustomValidity("");
    }else   correo.setCustomValidity("incorrecto");
    if(expresiones.telefono.test(telefono.value)){
        telefono.setCustomValidity("");
    }else   telefono.setCustomValidity("incorrecto");

    flag=revisarCheckbox(grupo1);
    flag2=revisarCheckbox(grupo2);
    flag3=revisarCheckbox(grupo3);
    
    if(!flag3==false){
        if(otro.value.trim() != ""){
           flag3 = true;
        }
    }


    formulario.classList.add('was-validated');

    if(!flag || !flag2 || !flag3 || !formulario.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
    }


    formulario.style.display="none"
    mensaje.style.display="block"
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
  
}, false)



