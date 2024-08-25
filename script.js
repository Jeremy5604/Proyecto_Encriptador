
function eventosSeActivanConClick() {
    let primerTextarea = document.getElementById('textoAingresar');
    let encriptarButton = document.querySelector('.encriptar');
    let desencriptarButton = document.querySelector('.desencriptar');
    encriptarButton.addEventListener('click', () => {
        primerTextarea.value = '';
        primerTextarea.placeholder = 'Ingrese el texto aquí';
    });
    desencriptarButton.addEventListener('click', () => {
        primerTextarea.value = '';
        primerTextarea.placeholder = 'Ingrese el texto aquí';
    });
}
function encriptar() {

    // validación de entrada
    textoCapturado = document.getElementById("textoAingresar").value;
    patron = /^[a-zñ\n\s]+$/;
    verificacion = patron.test(textoCapturado);
    if (!verificacion) {
        alert('Por favor considere solo palabras minúsculas y sin acento');
        return;
    }

    // proceso de encriptación
    textoCapturado = document.getElementById("textoAingresar").value;
    textoNuevoArray2 = textoCapturado.split("");
    arrayReceptor = [];
    for (i = 0; i < textoNuevoArray2.length; i++) {
        caracter = aplicarEncriptacion(textoNuevoArray2[i]);
        arrayReceptor.push(caracter);
    } nuevoTextoEncriptado = arrayReceptor.join('');
    texto = document.getElementById('mostrarResultado');
    texto.innerHTML = nuevoTextoEncriptado;

    // aparecer y desaparecer elementos
    let oculto = document.querySelector('.contenedorOculto');
    let noOculto = document.querySelector('.contenedorAOcultar');
    let modificar = document.querySelector('.panelSalida');
    let modificartextarea = document.getElementById('mostrarResultado');
    oculto.style.display = 'flex';
    noOculto.style.display = 'none';
    modificar.style.height = '100%';
    modificartextarea.style.height = '300px';
}

function aplicarEncriptacion(valor) {
    let resultado;
    switch (valor) {
        case 'a':
            resultado = 'ai';
            break;
        case 'e':
            resultado = 'enter';
            break;
        case 'i':
            resultado = 'imes';
            break;
        case 'o':
            resultado = 'ober';
            break;
        case 'u':
            resultado = 'ufat';
            break;
        default:
            resultado = valor;
            break;
    }
    return resultado;
}

function desencriptar() {
    // DECLARACION Y ASIGNACION
    let subCadenasDeFuncion = ["enter", "ai", "ober", "ufat", "imes"];
    let subCadenasReemplazoDeFuncion = ["e", "a", "o", "u", "i"];
    let subCadenai = [];
    let reemplazoi = [];

    textoCapturado2 = document.getElementById("textoAingresar").value;
    //alert("¡Texto desencriptado!");
    for (let i = 0; i < subCadenasDeFuncion.length; i++) {
        subCadenai = subCadenasDeFuncion[i];
        reemplazoi = subCadenasReemplazoDeFuncion[i];
        let regex = new RegExp(subCadenai, "g");
        textoCapturado2 = textoCapturado2.replace(regex, reemplazoi);
    }
    //alert(textoCapturado2);
    let texto = document.getElementById('mostrarResultado');
    texto.innerHTML = textoCapturado2;

    // CAMBIANDO EL DISEÑO CAJA DE TEXTO ENCRIPTADO
    let oculto = document.querySelector('.contenedorOculto');
    let noOculto = document.querySelector('.contenedorAOcultar');
    let modificar = document.querySelector('.panelSalida');
    let modificartextarea = document.getElementById('mostrarResultado');
    oculto.style.display = 'flex';
    noOculto.style.display = 'none';
    modificar.style.height = '100%';
    modificartextarea.style.height = '300px';

}


function copiarTexto() {
    //alert('Texto Copiado');
    textoCopiado = document.getElementById("mostrarResultado").value;
    navigator.clipboard.writeText(textoCopiado);
}
eventosSeActivanConClick();