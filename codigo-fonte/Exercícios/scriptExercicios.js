const userName = JSON.parse(localStorage.getItem("usuarios"));
const usuario = userName[0].usuario;

const textComment = document.getElementById('comentario');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('mostrar-comentarios');

form.addEventListener('submit', (event) =>{

    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'comentario-exibido';
    p.innerHTML = `<strong>${usuario}: </strong>` + textComment.value;
    commentPost.appendChild(p);
    textComment.value = '';
    textComment.focus();
});