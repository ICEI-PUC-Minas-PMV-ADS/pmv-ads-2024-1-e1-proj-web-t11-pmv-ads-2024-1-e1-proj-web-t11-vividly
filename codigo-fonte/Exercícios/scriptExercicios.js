const userName = JSON.parse(localStorage.getItem("usuarios"));
const usuario = userName[0].usuario;

// Vídeo 1

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

var ativarComentario = document.getElementById('container-comentarios');
var display = 1;

function ativarComentarios() {
    if (display == 1){
        ativarComentario.style.display = 'block';
        display = 0;
    }
    else {
        ativarComentario.style.display = 'none';
        display = 1;
    }

}; 

//Video2

var ativarComentario2 = document.getElementById('container-comentarios2');
var display2 = 1;

function ativarComentarios2() {
    if (display2 == 1){
        ativarComentario2.style.display = 'block';
        display2 = 0;
    }
    else {
        ativarComentario2.style.display = 'none';
        display2 = 1;
    }

}; 

//Video3

var ativarComentario3 = document.getElementById('container-comentarios3');
var display3 = 1;

function ativarComentarios3() {
    if (display3 == 1){
        ativarComentario3.style.display = 'block';
        display3 = 0;
    }
    else {
        ativarComentario3.style.display = 'none';
        display3 = 1;
    }
}; 

//Video4

var ativarComentario4 = document.getElementById('container-comentarios4');
var display4 = 1;

function ativarComentarios4() {
    if (display4 == 1){
        ativarComentario4.style.display = 'block';
        display4 = 0;
    }
    else {
        ativarComentario4.style.display = 'none';
        display4 = 1;
    }
}; 

//Video4

var ativarComentario5 = document.getElementById('container-comentarios5');
var display5 = 1;

function ativarComentarios5() {
    if (display5 == 1){
        ativarComentario5.style.display = 'block';
        display5 = 0;
    }
    else {
        ativarComentario5.style.display = 'none';
        display5 = 1;
    }
}; 



