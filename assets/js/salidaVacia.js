const cargarSalidaVacia = () => {
    const salidaVacia = '<div class="resultado__logo-pc"><img src="./assets/img/munieco.png" alt="logo pc sin resultados"></div><div class="resultado__texto"><h2>Ningún mensaje fue encontrado</h2><p>Ingresa el texto que desees encriptar o desencriptar.</p></div>'
    let salida = document.getElementById('salida');
    salida.innerHTML = salidaVacia;
}