const userName = JSON.parse(localStorage.getItem("usuarios"));
const usuario = userName[0].usuario;

//Exibir localStorage

// Vídeo 1
// Criar comentário

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

// Mostrar comentários

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

// Salvar comentario no localStorage 

var comentarioSalvo = [];

function addComment() {
    if(localStorage.comentarios){
        comentarioSalvo = JSON.parse(localStorage.getItem('comentarios'));
    }

    let novoComentario = textComment.value;
    comentarioSalvo.push({usuario, novoComentario});
    localStorage.comentarios = JSON.stringify(comentarioSalvo);
}

// Exibir comentário salvo

function showComment(){
    
    if(localStorage.comentarios){
        comentarioSalvo = JSON.parse(localStorage.getItem('comentarios'));
    } 

    for(var i in comentarioSalvo){
        let p = document.createElement('p');
        p.classList = 'comentario-exibido';
        p.innerHTML = `<strong>${comentarioSalvo[i].usuario}: </strong>${comentarioSalvo[i].novoComentario}`;
        commentPost.append(p);
    }
}

btn.addEventListener("click", showComment);

//Video2
// Criar comentário

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

// Mostrar comentários

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

// Salvar comentario no localStorage 

var comentarioSalvo2 = [];

function addComment2() {
    if(localStorage.comentarios2){
        comentarioSalvo2 = JSON.parse(localStorage.getItem('comentarios2'));
    }

    let novoComentario2 = textComment2.value;
    comentarioSalvo2.push({usuario, novoComentario2});
    localStorage.comentarios2 = JSON.stringify(comentarioSalvo2);
}

// Exibir comentário salvo

function showComment2(){
    
    if(localStorage.comentarios2){
        comentarioSalvo2 = JSON.parse(localStorage.getItem('comentarios2'));
    } 

    for(var i in comentarioSalvo2){
        let p = document.createElement('p');
        p.classList = 'comentario-exibido';
        p.innerHTML = `<strong>${comentarioSalvo2[i].usuario}: </strong>${comentarioSalvo2[i].novoComentario2}`;
        commentPost2.append(p);
    }
}

btn2.addEventListener("click", showComment2);


//Video3
// Criar comentário

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

// Mostrar comentários

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

// Salvar comentario no localStorage 

var comentarioSalvo3 = [];

function addComment3() {
    if(localStorage.comentarios3){
        comentarioSalvo3 = JSON.parse(localStorage.getItem('comentarios3'));
    }

    let novoComentario3 = textComment3.value;
    comentarioSalvo3.push({usuario, novoComentario3});
    localStorage.comentarios3 = JSON.stringify(comentarioSalvo3);
}

// Exibir comentário salvo

function showComment3(){
    
    if(localStorage.comentarios3){
        comentarioSalvo3 = JSON.parse(localStorage.getItem('comentarios3'));
    } 

    for(var i in comentarioSalvo3){
        let p = document.createElement('p');
        p.classList = 'comentario-exibido';
        p.innerHTML = `<strong>${comentarioSalvo3[i].usuario}: </strong>${comentarioSalvo3[i].novoComentario3}`;
        commentPost3.append(p);
    }
}

btn3.addEventListener("click", showComment3);


//Video4
// Criar comentário

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

// Mostrar comentários

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

// Salvar comentario no localStorage 

var comentarioSalvo4 = [];

function addComment4() {
    if(localStorage.comentarios4){
        comentarioSalvo4 = JSON.parse(localStorage.getItem('comentarios4'));
    }

    let novoComentario4 = textComment4.value;
    comentarioSalvo4.push({usuario, novoComentario4});
    localStorage.comentarios4 = JSON.stringify(comentarioSalvo4);
}

// Exibir comentário salvo

function showComment4(){
    
    if(localStorage.comentarios4){
        comentarioSalvo4 = JSON.parse(localStorage.getItem('comentarios4'));
    } 

    for(var i in comentarioSalvo4){
        let p = document.createElement('p');
        p.classList = 'comentario-exibido';
        p.innerHTML = `<strong>${comentarioSalvo4[i].usuario}: </strong>${comentarioSalvo4[i].novoComentario4}`;
        commentPost4.append(p);
    }
}

btn4.addEventListener("click", showComment4);

//Video5
// Criar comentário

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

// Mostrar comentários

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

// Salvar comentario no localStorage 

var comentarioSalvo5 = [];

function addComment5() {
    if(localStorage.comentarios5){
        comentarioSalvo5 = JSON.parse(localStorage.getItem('comentarios5'));
    }

    let novoComentario5 = textComment5.value;
    comentarioSalvo5.push({usuario, novoComentario5});
    localStorage.comentarios5 = JSON.stringify(comentarioSalvo5);
}

// Exibir comentário salvo

function showComment5(){
    
    if(localStorage.comentarios5){
        comentarioSalvo5 = JSON.parse(localStorage.getItem('comentarios5'));
    } 

    for(var i in comentarioSalvo5){
        let p = document.createElement('p');
        p.classList = 'comentario-exibido';
        p.innerHTML = `<strong>${comentarioSalvo5[i].usuario}: </strong>${comentarioSalvo5[i].novoComentario5}`;
        commentPost5.append(p);
    }
}

btn5.addEventListener("click", showComment5);

// Função para selecionar item do menu
var menuItem = document.querySelectorAll('.itens-menu');

function selecionar() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((item) =>
    item.addEventListener('click', selecionar)
);

// Expandir menu
var expandir = document.querySelector('.btn-expandir');
var menuLateral = document.querySelector('.menu-lateral');

expandir.addEventListener('click', function(){
    menuLateral.classList.toggle('expandir'); 
});
 // avatar no menu 
 document.addEventListener('DOMContentLoaded', function() {
    const avatarImg = document.getElementById('avatarImg');
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.avatar) {
        avatarImg.src = usuario.avatar;
    } else {
        avatarImg.alt = 'Nenhum avatar selecionado';
    }
});
window.onload = function() {
    var username = localStorage.getItem('username');
    if (username) {
        document.getElementById('avatarName').innerText = username;
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const btnExpandir = document.querySelector('.btn-expandir');
    const menuLateral = document.querySelector('.menu-lateral');

    btnExpandir.addEventListener('click', () => {
        menuLateral.classList.toggle('expandido');
    });
});
