const validarInputVacio = texto => texto.length > 0;

function encriptarCadena (texto, letra = 4) {
    const reemplazos = ['ufat', 'ober', 'ai', 'imes', 'enter'];
    const letras = [/u/ig, /o/ig, /a/ig, /i/ig, /e/ig];
    if (letra == 0) {
        return texto.replace(letras[0], reemplazos[0]);
    }
    return encriptarCadena(texto.replace(letras[letra], reemplazos[letra]), letra - 1)
}

function desencriptarCadena (texto, letra = 4) {
    const reemplazos = ['e', 'i', 'a', 'o', 'u'];
    const letras = [/enter/ig, /imes/ig, /ai/ig, /ober/ig, /ufat/ig];
    if (letra == 0) {
        return texto.replace(letras[0], reemplazos[0]);
    }
    return desencriptarCadena(texto.replace(letras[letra], reemplazos[letra]), letra - 1)
}

window.addEventListener('load', event => {
    cargarSalidaVacia();

    let encriptar = document.getElementById('encriptar');
    encriptar.addEventListener('click', eventoEncriptar => {
        let texto = document.getElementById('texto_usuario')

        eventoEncriptar.stopPropagation();
        eventoEncriptar.preventDefault();

        let valido = validarInputVacio(texto.value);

        if (valido) {
            let textoEncriptado = encriptarCadena(texto.value);
            salidaTexto(textoEncriptado);
            copiar();
        } else {
            alert('El mensaje a encriptar no es válido, ingrese otro.');
            texto.value = "";
            cargarSalidaVacia();
        }
    });

    let desencriptar = document.getElementById('desencriptar');
    desencriptar.addEventListener('click', eventoDesencriptar => {
        let texto = document.getElementById('texto_usuario')

        eventoDesencriptar.stopPropagation();
        eventoDesencriptar.preventDefault();

        let valido = validarInputVacio(texto.value);

        if (valido) {
            let textoDesencriptado = desencriptarCadena(texto.value);
            salidaTexto(textoDesencriptado);
            copiar();
        } else {
            alert('El mensaje a desencriptar no es válido, ingrese otro.');
            texto.value = "";
            cargarSalidaVacia();
        }
    });
});