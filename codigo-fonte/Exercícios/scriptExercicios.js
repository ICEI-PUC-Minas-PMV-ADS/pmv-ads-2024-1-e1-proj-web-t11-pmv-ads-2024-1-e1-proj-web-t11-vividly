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

const textComment2 = document.getElementById('comentario2');
const form2 = document.getElementById('formulario2');
const commentPost2 = document.getElementById('mostrar-comentarios2');

form2.addEventListener('submit', (event) =>{

    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'comentario-exibido';
    p.innerHTML = `<strong>${usuario}: </strong>` + textComment2.value;
    commentPost2.appendChild(p);
    textComment2.value = '';
    textComment2.focus();
});


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

const textComment3 = document.getElementById('comentario3');
const form3 = document.getElementById('formulario3');
const commentPost3 = document.getElementById('mostrar-comentarios3');

form3.addEventListener('submit', (event) =>{

    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'comentario-exibido';
    p.innerHTML = `<strong>${usuario}: </strong>` + textComment3.value;
    commentPost3.appendChild(p);
    textComment3.value = '';
    textComment3.focus();
});

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

const textComment4 = document.getElementById('comentario4');
const form4 = document.getElementById('formulario4');
const commentPost4 = document.getElementById('mostrar-comentarios4');

form4.addEventListener('submit', (event) =>{

    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'comentario-exibido';
    p.innerHTML = `<strong>${usuario}: </strong>` + textComment4.value;
    commentPost4.appendChild(p);
    textComment4.value = '';
    textComment4.focus();
});

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

//Video5

const textComment5 = document.getElementById('comentario5');
const form5 = document.getElementById('formulario5');
const commentPost5 = document.getElementById('mostrar-comentarios5');

form5.addEventListener('submit', (event) =>{

    event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'comentario-exibido';
    p.innerHTML = `<strong>${usuario}: </strong>` + textComment5.value;
    commentPost5.appendChild(p);
    textComment5.value = '';
    textComment5.focus();
});

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



