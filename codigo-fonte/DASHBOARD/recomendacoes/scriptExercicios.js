document.addEventListener('DOMContentLoaded', () => {
    const userName = JSON.parse(localStorage.getItem("usuarios"));
    const usuario = userName ? userName[0].usuario : 'Guest';

    // Função para carregar comentários do localStorage
    function loadComments(containerId) {
        let comments = JSON.parse(localStorage.getItem(containerId)) || [];
        const container = document.getElementById(containerId);
        comments.forEach(comment => {
            let p = document.createElement('p');
            p.classList = 'comentario-exibido';
            p.innerHTML = `<strong>${comment.usuario}: </strong>` + comment.text;
            container.appendChild(p);
        });
    }

    // Função para salvar comentários no localStorage
    function saveComment(containerId, usuario, text) {
        let comments = JSON.parse(localStorage.getItem(containerId)) || [];
        comments.push({ usuario, text });
        localStorage.setItem(containerId, JSON.stringify(comments));
    }

    const forms = document.querySelectorAll('.formulario');
    forms.forEach((form, index) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const textComment = form.querySelector('.comentario');
            const commentsContainerId = `mostrar-comentarios-${index + 1}`;

            let p = document.createElement('p');
            p.classList = 'comentario-exibido';
            p.innerHTML = `<strong>${usuario}: </strong>` + textComment.value;
            document.getElementById(commentsContainerId).appendChild(p);

            // Salvar comentário no localStorage
            saveComment(commentsContainerId, usuario, textComment.value);

            textComment.value = '';
            textComment.focus();
        });

        // Carregar comentários ao carregar a página
        loadComments(`mostrar-comentarios-${index + 1}`);
    });
});

function ativarComentarios(containerId) {
    const container = document.getElementById(containerId);
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
}
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