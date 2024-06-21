window.addEventListener('DOMContentLoaded', (event) => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarios"));
    const username = usuarioLogado ? usuarioLogado[0].usuario : "User";
    let createCard = localStorage.getItem(`${username}_createCard`) || 0; // Recupera o valor do localStorage ou define como 0 se não estiver definido

    document.querySelector('#username').innerHTML = username;

    // Recupera mensagens salvas quando a página carregar
    const anotacoes = recuperarAnotacoes(username);
    exibirAnotacoes(anotacoes);

    teste()
    function teste() {
        if (createCard === 0) {
            // Crie uma nova anotação automaticamente ao carregar a página
            criarNovaAnotacao(); // Adiciona automaticamente uma nova caixa
            createCard = 1
            localStorage.setItem(`${username}_createCard`, createCard); // Salva o valor atualizado no localStorage
        }
    }


    const btnAddAnotacao = document.getElementById('btnAddAnotacao');
    btnAddAnotacao.addEventListener('click', function() {
        criarNovaAnotacao();
    });

    const annotationCards = document.querySelector('.annotation-cards');
    annotationCards.addEventListener('click', function(event) {
        const btnEditar = event.target.closest('.btnEditarAnotacao');
        if (btnEditar) {
            const cardId = btnEditar.parentElement.id;
            const divEditavel = document.getElementById(cardId);
            createInput(divEditavel);
        }

        const btnApagar = event.target.closest('.btnApagarAnotacao');
        if (btnApagar) {
            const cardId = btnApagar.parentElement.id;
            apagarAnotacao(cardId, username);
        }
    });
});




function createInput(divEditavel) {
    const valor_anterior = divEditavel.querySelector('p').innerHTML;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = valor_anterior;
    input.style.width = '220px'; // Por exemplo, definindo uma largura de 200 pixels
    input.style.margin = '10px'
    input.style.height = '40px'; // Por exemplo, definindo uma largura de 200 pixels
    
    input.maxLength = 460; // Definindo o limite de caracteres para 50

    divEditavel.innerHTML = 'Presione enter para atulizar.'; // Limpa apenas o conteúdo da div
    divEditavel.appendChild(input);

    input.focus(); // Focar no campo de entrada quando ativado

    // Adiciona um listener para o evento 'keydown' no input
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const cardId = getCardId(divEditavel);
            const usuario = JSON.parse(localStorage.getItem("usuarios"))[0].usuario;
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
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (usuarios) {
        const index = usuarios.findIndex(user => user.usuario === usuario);
        if (index !== -1) {
            return usuarios[index].anotacoes || {};
        }
    }
    return {}; // Retorna um objeto vazio se nenhum usuário estiver logado ou não houver anotações
}

function saveText(divEditavel, newText, cardId, usuario) {
    // Salva o texto na localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const index = usuarios.findIndex(user => user.usuario === usuario);
    if (index !== -1) {
        if (!usuarios[index].anotacoes) {
            usuarios[index].anotacoes = {};
        }
        const cor = divEditavel.style.backgroundColor;
        usuarios[index].anotacoes[cardId] = { texto: newText, cor: cor };
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    // Salva o novo texto na div
    divEditavel.innerHTML = "<p>" + newText + "</p>";

    // Cria novamente os botões de editar e apagar
    const btnEditar = document.createElement('button');
    btnEditar.classList.add('btnEditarAnotacao');
    btnEditar.textContent = 'Editar';
    btnEditar.id = 'editar-' + cardId;

    const btnApagar = document.createElement('button');
    btnApagar.classList.add('btnApagarAnotacao');
    btnApagar.textContent = 'Apagar';
    btnApagar.id = 'apagar-' + cardId;

    divEditavel.appendChild(btnEditar);
    divEditavel.appendChild(btnApagar);
}

function criarNovaAnotacao() {
    const annotationCards = document.querySelector('.annotation-cards');
    const novaAnotacaoId = 'card-' + (annotationCards.childElementCount + 1);
    const novaAnotacao = document.createElement('div');
    novaAnotacao.classList.add('annotation-card');
    novaAnotacao.id = novaAnotacaoId;
    const corAleatoria = getRandomDarkColor(); // Cor escura aleatória
    novaAnotacao.style.backgroundColor = corAleatoria;
    novaAnotacao.innerHTML = `
        <p>Nova anotação</p>
        <button class="btnEditarAnotacao" id="editar-${novaAnotacaoId}">Editar</button>
        <button class="btnApagarAnotacao" id="apagar-${novaAnotacaoId}">Apagar</button>
    `;
    annotationCards.appendChild(novaAnotacao);
    
    console.log("Nova anotação criada:", novaAnotacaoId);
    // Salva a nova anotação no localStorage
    const usuario = JSON.parse(localStorage.getItem("usuarios"))[0].usuario;
    const anotacoes = recuperarAnotacoes(usuario);
    anotacoes[novaAnotacaoId] = { texto: 'Nova anotação', cor: corAleatoria };
    salvarAnotacoes(usuario, anotacoes);
}

function salvarAnotacoes(usuario, anotacoes) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const index = usuarios.findIndex(user => user.usuario === usuario);
    if (index !== -1) {
        usuarios[index].anotacoes = anotacoes;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

function exibirAnotacoes(anotacoes) {
    const annotationCards = document.querySelector('.annotation-cards');
    annotationCards.innerHTML = ''; // Limpa as anotações existentes antes de exibir as novas
    
    for (const [cardId, anotacao] of Object.entries(anotacoes)) {
        const novaAnotacao = document.createElement('div');
        novaAnotacao.classList.add('annotation-card');
        novaAnotacao.id = cardId;
        novaAnotacao.style.backgroundColor = anotacao.cor; // Cor mantida
        
        const textoAnotacao = document.createElement('p');
        textoAnotacao.textContent = anotacao.texto; // Texto da anotação
        
        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btnEditarAnotacao');
        btnEditar.textContent = 'Editar';
        btnEditar.id = 'editar-' + cardId;

        const btnApagar = document.createElement('button');
        btnApagar.classList.add('btnApagarAnotacao');
        btnApagar.textContent = 'Apagar';
        btnApagar.id = 'apagar-' + cardId;

        novaAnotacao.appendChild(textoAnotacao);
        novaAnotacao.appendChild(btnEditar);
        novaAnotacao.appendChild(btnApagar);
        
        annotationCards.appendChild(novaAnotacao);
    }
}


function apagarAnotacao(cardId, usuario) {
    // Remove a anotação do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const index = usuarios.findIndex(user => user.usuario === usuario);
    if (index !== -1) {
        const anotacoes = usuarios[index].anotacoes;
        delete anotacoes[cardId];
        usuarios[index].anotacoes = anotacoes;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    // Remove a anotação do DOM
    const anotacaoElement = document.getElementById(cardId);
    if (anotacaoElement) {
        anotacaoElement.remove();
    }
}

function getRandomDarkColor() {
    let color;
    do {
        // Gera uma cor aleatória
        const letters = '0123456789ABCDEF';
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        // Verifica se a cor é suficientemente escura
    } while (!isDarkColor(color) || color === '#000000');
    return color;
}

function isDarkColor(color) {
    // Converte a cor hexadecimal para RGB
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    // Calcula a luminância da cor
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    // Retorna true se a cor for escura (luminância < 128)
    return luminance < 128;
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
function selectAvatar(imgElement) {
    const selectedAvatarImg = document.getElementById('selectedAvatarImg');
    let avatarSrc = imgElement.src;

    // Verifica se o src da imagem é vazio
    if (!avatarSrc) {
        avatarSrc = '../Imagens/Configuração/padrao.jpg'; // Caminho do avatar padrão
    }

    selectedAvatarImg.src = avatarSrc;

    // Armazena o avatar selecionado no localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
    usuario.avatar = avatarSrc;
    localStorage.setItem('usuario', JSON.stringify(usuario));
}
