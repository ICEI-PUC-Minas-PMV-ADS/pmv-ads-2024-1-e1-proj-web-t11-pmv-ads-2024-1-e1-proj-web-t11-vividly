window.addEventListener('DOMContentLoaded', (event) => {
    const divsEditaveis = document.querySelectorAll('.annotation-card');
    const usuarioLogado = localStorage.getItem("usuarios");
    const username = JSON.parse(localStorage.getItem("usuarios"));
    document.querySelector('#username').innerHTML = username[0].usuario

    divsEditaveis.forEach((divEditavel) => {
        divEditavel.addEventListener('click', function(event) {
            if (event.target === divEditavel) {
                createInput(divEditavel);
            }
        });
    });

    // Recupera mensagens salvas quando a página carregar

    if (usuarioLogado) {
        const anotacoes = recuperarAnotacoes(usuarioLogado);
        for (const [cardId, texto] of Object.entries(anotacoes)) {
            const divEditavel = document.getElementById(cardId);
            if (divEditavel) {
                divEditavel.innerHTML = "<p>" + texto + "</p>";
            }
        }
    } else {
        console.log("Nenhum usuário logado. \n" + usuarioLogado);
    }
});

function createInput(divEditavel) {
    const valor_anterior = divEditavel.firstElementChild.innerHTML;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = valor_anterior;
    input.style.width = divEditavel.offsetWidth + 'px'; // Manter a mesma largura da div  
    divEditavel.innerHTML = '';
    divEditavel.appendChild(input);
    input.focus(); // Focar no campo de entrada quando ativado

    // Adiciona um listener para o evento 'keydown' no input
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const cardId = getCardId(divEditavel);
            const usuario = JSON.parse(localStorage.getItem("usuarios"));
            saveText(divEditavel, input.value, cardId, usuario);
        }
    });
}

function getCardId(divEditavel) {
    // Verifica o id da div clicada
    const id = divEditavel.id;
    if (id.startsWith('card-')) {
        return id;
    } else {
        return null;
    }
}

function recuperarAnotacoes(usuario) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuario +" " + usuarios[0].usuario)
    index = -1
    if (index !== -1) {
        console.log('Recupera Anotações: ' + usuarios)
        return usuarios[index].anotacoes;
    } else {
        return {};
    }
}

function saveText(divEditavel, newText, cardId, usuario) {
    // Salva o texto na localStorage
    const anotacoes = recuperarAnotacoes(usuario);
    anotacoes[cardId] = newText;
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const index = usuarios.findIndex(user => user.usuario === usuario);
    if (index !== -1) {
        usuarios[index].anotacoes = anotacoes;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    // Salva o novo texto na div
    divEditavel.innerHTML = "<p>" + newText + "</p>";
    console.log("Texto salvo no card com id:", cardId);
}
