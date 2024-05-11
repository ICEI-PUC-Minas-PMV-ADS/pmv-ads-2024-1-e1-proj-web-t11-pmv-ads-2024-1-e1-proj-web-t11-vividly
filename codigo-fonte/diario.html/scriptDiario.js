var elem = document.getElementById('submit');
elem.addEventListener('click', function () {
alert("Enviado");
}, false);

function enviar() {
    var texto = document.getElementByclass('submit').value;
    alert('Texto digitado: ' + texto);
    // Aqui você pode enviar o texto para onde quiser
}
