const salidaTexto = (texto) => {
    const salidaCodificada = '<div class="resultado__texto-codificado"><textarea class="texto-codificado" id="texto-codificado" disabled>'+texto+'</textarea></div><div class="texto__boton-copiar"><input type="button" value="Copiar" id="copiar"></div>'
    let salida = document.getElementById('salida');
    salida.style = 'display:grid; grid-template-rows: 1fr auto; gap: 1rem;';
    salida.innerHTML = salidaCodificada;
}