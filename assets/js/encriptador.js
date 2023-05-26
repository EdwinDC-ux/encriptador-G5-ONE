const validarInputVacio = texto => texto.length > 0

function encriptarCadena (texto, letra = 4) {
    const reemplazos = ['ufat', 'ober', 'ai', 'imes', 'enter'];
    const letras = [/u/ig, /o/ig, /a/ig, /i/ig, /e/ig];
    console.log(letra, texto)
    if (letra == 0) {
        return texto.replace(letras[0], reemplazos[0]);
    }
    return encriptarCadena(texto.replace(letras[letra], reemplazos[letra]), letra - 1)
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
        } else {
            alert('El mensaje a encriptar no es válido, ingrese otro.');
            texto.value = "";
            cargarSalidaVacia();
        }
    });
});