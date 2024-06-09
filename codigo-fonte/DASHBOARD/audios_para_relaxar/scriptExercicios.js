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
