var cadForm  = document.getElementById("cadastra-usuario");
const campos = document.querySelectorAll('.required');
const span   = document.querySelectorAll('.span');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

cadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    userValidate();
    emailValidate();
    passwordValidate();
});

function setError (index) {
    span[index].style.visibility = 'visible';
}

function removeError (index) {
    span[index].style.visibility = 'hidden';
}

function nameValidate () {
    if(campos[0].value.length < 3){
            setError(0);
        }
    else {
            removeError(0);
        }
}

function userValidate () {
    if(campos[1].value.length < 3){
            setError(1);
        }
    else {
            removeError(1);
        }
}

function emailValidate () {
    if(emailRegex.test(campos[2].value)){
            removeError(2);
        }
    else {
            setError(2);
        }
}

function passwordValidate () {
    if(campos[3].value.length < 4){
            setError(3);
        }
    else {
            removeError(3);
        }
}


cadForm.addEventListener("submit", (e) => {

    localStorage.removeItem("usuarios");

    var nome = document.getElementById('nome').value;
    var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;

    let usuarios = new Array();

    if(localStorage.hasOwnProperty("usuarios")) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    usuarios.push({nome, usuario, email, telefone, senha});

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert ("CADASTRADO COM SUCESSO \nVOCÊ SERÁ REDIRECIONADO PARA A PÁGINA DE LOGIN");
    location.href = "../Login/login.html";

});



