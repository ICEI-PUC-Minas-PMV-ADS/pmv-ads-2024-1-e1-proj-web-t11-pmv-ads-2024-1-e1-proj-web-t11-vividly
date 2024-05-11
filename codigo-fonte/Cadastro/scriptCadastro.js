var cadForm = document.getElementById("cadastra-usuario");

cadForm.addEventListener("submit", (e) => {

    e.preventDefault();

    var nome = document.getElementById('nome').value;
    var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;

    console.log(nome);
    console.log(usuario);
    console.log(email);
    console.log(telefone);
    console.log(senha);

    let usuarios = new Array();

    if(localStorage.hasOwnProperty("usuarios")) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    usuarios.push({nome, usuario, email, telefone, senha});

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert ("CADASTRADO COM SUCESSO")

    
});


