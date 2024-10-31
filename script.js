document.getElementById('btnContar').addEventListener('click', function() {
    const texto = document.getElementById('inputTexto').value;
    const contagem = texto.length;
    document.getElementById('contagem').innerText = `Caracteres: ${contagem}`;
});
