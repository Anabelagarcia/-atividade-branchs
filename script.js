
document.getElementById('btnAlerta').addEventListener('click', function() {
    const texto = document.getElementById('inputTexto').value;
    alert(texto);

document.getElementById('btnCor').addEventListener('click', function() {
    const divResultado = document.getElementById('resultado');
    divResultado.style.color = divResultado.style.color === 'red' ? 'black' : 'red';

});
