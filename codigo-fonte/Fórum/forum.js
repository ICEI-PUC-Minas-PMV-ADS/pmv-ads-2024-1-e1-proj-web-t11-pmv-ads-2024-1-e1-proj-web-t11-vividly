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
// Função para obter os tópicos armazenados no localStorage
function getStoredTopics() {
    return JSON.parse(localStorage.getItem("topics")) || [];
}

// Função para salvar os tópicos no localStorage
function saveTopics(topics) {
    localStorage.setItem("topics", JSON.stringify(topics));
}

// Carregar tópicos salvos do localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    loadTopics();
    document.querySelector(".btn-fechar").addEventListener("click", function() {
        document.querySelector(".buscar-box").classList.remove("ativar");
    });
    document.querySelector(".lupa-buscar").addEventListener("click", function() {
        document.querySelector(".buscar-box").classList.add("ativar");
    });
});

// Adicionar um novo tópico
function addTopic() {
    const topicTitle = document.getElementById("topic-title").value.trim();
    if (topicTitle) {
        let topics = getStoredTopics();
        topics.push(topicTitle);
        saveTopics(topics);
        displayTopics(topics);
        document.getElementById("topic-title").value = ""; // Limpar campo de entrada
    }
}

// Carregar tópicos do localStorage
function loadTopics() {
    const topics = getStoredTopics();
    displayTopics(topics);
}

// Exibir tópicos na página
function displayTopics(topics) {
    const topicContainer = document.getElementById("topic-container");
    topicContainer.innerHTML = ""; // Limpar contêiner antes de exibir novos tópicos

    topics.forEach(topic => {
        let topicDiv = document.createElement("div");
        topicDiv.className = "topic";
        topicDiv.innerHTML = `<div class="topic-title">${topic}</div>`;
        topicContainer.appendChild(topicDiv);
    });
}

// Pesquisar tópicos
function searchTopics() {
    const searchTerm = document.getElementById("search-bar").value.trim().toLowerCase();
    const topics = getStoredTopics();
    const filteredTopics = topics.filter(topic => topic.toLowerCase().includes(searchTerm));
    displayTopics(filteredTopics);
}

// Adicionar mensagem a um tópico
function addMessage(messagesContainer, messageText, topicTitle) {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    if (!usuario || !usuario.nome) {
        alert('Usuário não identificado. Por favor, faça login para enviar uma mensagem.');
        return;
    }

    if (messageText.trim() === '') {
        alert('Por favor, insira uma mensagem.');
        return;
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<strong>${usuario.nome}: </strong>${messageText}`;
    messagesContainer.appendChild(messageElement);

    const topics = getStoredTopics();
    const topic = topics.find(t => t.title === topicTitle);
    if (topic) {
        topic.messages.push(messageText);
        saveTopics(topics);
    }
}
