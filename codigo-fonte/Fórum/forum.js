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

const userName = JSON.parse(localStorage.getItem("usuarios"));
const usuario = userName[0].usuario;




document.addEventListener('DOMContentLoaded', () => {
    loadTopics();
});


function loadTopics() {
    const topics = JSON.parse(localStorage.getItem('forumTopics')) || [];
    const topicContainer = document.getElementById('topic-container');
    topicContainer.innerHTML = '';

    topics.forEach(topic => {
        const topicElement = createTopicElement(topic.title, topic.messages);
        topicContainer.appendChild(topicElement);
    });
}

function saveTopics(topics) {
    localStorage.setItem('forumTopics', JSON.stringify(topics));
}

function getStoredTopics() {
    return JSON.parse(localStorage.getItem('forumTopics')) || [];
}

function addTopic() {
    const topicTitle = document.getElementById('topic-title').value;
    if (topicTitle.trim() === '') {
        alert('Por favor, insira um título para o tópico.');
        return;
    }

    const topics = getStoredTopics();
    const newTopic = { title: topicTitle, messages: [] };
    
    topics.push(newTopic);
    saveTopics(topics);

    const topicContainer = document.getElementById('topic-container');
    const topicElement = createTopicElement(newTopic.title, newTopic.messages,);
    topicContainer.appendChild(topicElement);

    document.getElementById('topic-title').value = '';
    
}

function createTopicElement(title, messages) {
    const topicElement = document.createElement('div');
    topicElement.className = 'topic';

    const topicTitleElement = document.createElement('div');
    topicTitleElement.className = 'topic-title';
    topicTitleElement.innerText = title;

    const messagesContainer = document.createElement('div');
    messagesContainer.className = 'messages';

    messages.forEach(messageText => {
        const messageElement = document.createElement('div');
        p.innerHTML = `<strong>${usuario}: </strong>` + textComment.value;
        messageElement.className = 'message';
        messageElement.innerText = messageText;
        messagesContainer.appendChild(messageElement);
    });

    const newMessageContainer = document.createElement('div');
    newMessageContainer.className = 'new-message';

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Escreva uma mensagem';
    
    const sendMessageButton = document.createElement('button');
    sendMessageButton.innerText = 'Enviar';
    sendMessageButton.onclick = function() {
        addMessage(messagesContainer, messageInput.value, title);
        messageInput.value = '';
    };

    newMessageContainer.appendChild(messageInput);
    newMessageContainer.appendChild(sendMessageButton);

    topicElement.appendChild(topicTitleElement);
    topicElement.appendChild(messagesContainer);
    topicElement.appendChild(newMessageContainer);

    return topicElement;
}

function addMessage(messagesContainer, messageText, topicTitle) {
    if (messageText.trim() === '') {
        alert('Por favor, insira uma mensagem.');
        return;
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerText = messageText;
    messageElement.innerHTML = `<strong>${usuario}: </strong>` + messageText
    messagesContainer.appendChild(messageElement);
    const topics = getStoredTopics();
    const topic = topics.find(t => t.title === topicTitle);
    if (topic) {
        topic.messages.push(messageText);
        saveTopics(topics);
    }
}

// barra pesquisa


let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})


function searchTopics() {
    const searchTerm = document.getElementById("search-bar").value.trim().toLowerCase();
    const topics = getStoredTopics();
    console.log(topics)
    const filteredTopics = topics[0].filter(topic => topic.title.toLowerCase().includes(searchTerm));
    displayTopics(filteredTopics);
}


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

    // item do menu
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
    var expandir = document.querySelector('.btn-expandir');
    var menuLateral = document.querySelector('.menu-lateral');

    expandir.addEventListener('click', function(){
        menuLateral.classList.toggle('expandir'); 
    });
    document.addEventListener('DOMContentLoaded', () => {
        loadAvatar();
        loadUsername();
        initializeMenu();
        loadTopics();
    });

    function loadAvatar() {
        const avatarImg = document.getElementById('avatarImg');
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        if (usuario && usuario.avatar) {
            avatarImg.src = usuario.avatar;
        } else {
            avatarImg.alt = 'Nenhum avatar selecionado';
        }
    }

    function loadUsername() {
        var username = localStorage.getItem('username');
        if (username) {
            document.getElementById('avatarName').innerText = username;
        }
    }

      function initializeMenu() {
        var menuItem = document.querySelectorAll('.itens-menu');
        menuItem.forEach(item => {
            item.addEventListener('click', selecionar);
        });

        var expandir = document.querySelector('.btn-expandir');
        var menuLateral= document.querySelector('.menu-lateral');

        expandir.addEventListener('click', () => {
            menuLateral.classList.toggle('expandir');
        });
    }

   // Função para obter os tópicos armazenados no localStorage
function getStoredTopics() {
    return JSON.parse(localStorage.getItem("topics")) || [];
}

function saveTopics(topics) {
    localStorage.setItem("topics", JSON.stringify(topics));
}

function loadTopics() {
    const topics = getStoredTopics();
    displayTopics(topics);
}

// Adicionar um novo tópico
function addTopic() {
    const topicTitle = document.getElementById('topic-title').value.trim();
    if (topicTitle) {
        const topic = {
            id: Date.now(),
            title: topicTitle,
            comments: []
        };
        console.log('Novo tópico:', topic); 
        saveTopic(topic); 
        addTopicToDOM(topic);
        document.getElementById('topic-title').value = '';
    }
}

// Função para salvar
function saveTopic(topic) {
    const topics = getStoredTopics();
    topics.push(topic);
    saveTopics(topics);
    console.log('Tópicos salvos:', topics); 
}

function displayTopics(topics) {
    const topicContainer = document.getElementById('topic-container');
    topicContainer.innerHTML = "";
    topics.forEach(topic => {
        addTopicToDOM(topic);
    });
}


function addTopicToDOM(topic) {
    const topicContainer = document.getElementById('topic-container');
    const topicElement = document.createElement('div');
    topicElement.className = 'topic';
    topicElement.id = `topic-${topic.id}`;
    topicElement.innerHTML = `
        <h3 class="topic-title" id="topic-${topic.id}" contenteditable="false">${topic.title}</h3>
        <div class="comments-container" id="comments-${topic.id}">
            ${topic.comments && Array.isArray(topic.comments) ? topic.comments.map(comment => `
                <div class="comment">
                    <img src="${comment.avatar}" alt="Avatar" class="avatar">
                    <strong>${comment.username}:</strong>
                    <p>${comment.text}</p>
                </div>
            `).join('') : ''}
        </div>
        <input type="text" placeholder="Escreva um comentário" id="comment-input-${topic.id}">
        <button onclick="addComment(${topic.id})">Adicionar Comentário</button>
        <button class="edit-topic" onclick="editTopic(${topic.id})">Editar</button>
        <button class="save-topic" onclick="saveTopicEdit(${topic.id})" style="display: none;">Salvar</button>
        <button class="delete-topic" onclick="deleteTopic(${topic.id})">Excluir</button>
    `;
    topicContainer.appendChild(topicElement);
}

function addComment(topicId) {
    const commentInput = document.getElementById(`comment-input-${topicId}`);
    const commentText = commentInput.value.trim();

    if (commentText) {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        
        if (!usuario || !usuario.nome || !usuario.avatar) {
            alert('Usuário não identificado. Por favor, faça login para enviar uma mensagem.');
            return;
        }

        const comment = {
            username: usuario.nome,
            avatar: usuario.avatar,
            text: commentText
        };

        const topics = getStoredTopics();
        const topic = topics.find(t => t.id === topicId);
        if (topic) {
            topic.comments.push(comment);
            saveTopics(topics);
            const commentsContainer = document.getElementById(`comments-${topicId}`);
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <img src="${comment.avatar}" alt="Avatar" class="avatar">
                <strong>${comment.username}:</strong>
                <p>${comment.text}</p>
            `;
            commentsContainer.appendChild(commentElement);
            commentInput.value = '';
        }
    }
}

function searchTopics() {
    const searchTerm = document.getElementById("search-bar").value.trim().toLowerCase();
    const topics = getStoredTopics();
    const filteredTopics = topics.filter(topic => topic.title.toLowerCase().includes(searchTerm));
    displayTopics(filteredTopics);
}

function editTopic(topicId) {
    const topicElement = document.getElementById(`topic-${topicId}`);
    const topicTitleElement = topicElement.querySelector('.topic-title');
    topicTitleElement.contentEditable = true;
    topicTitleElement.focus();
    const editButton = topicElement.querySelector('.edit-topic');
    const saveButton = topicElement.querySelector('.save-topic');
    editButton.style.display = 'none';
    saveButton.style.display = 'inline-block';
}

function saveTopicEdit(topicId) {
    const topicElement = document.getElementById(`topic-${topicId}`);
    const topicTitleElement = topicElement.querySelector('.topic-title');
    const newTitle = topicTitleElement.innerText;
    
    topicTitleElement.contentEditable = false;
    const editButton = topicElement.querySelector('.edit-topic');
    const saveButton = topicElement.querySelector('.save-topic');
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
    loadTopics();
}

function deleteTopic(topicId) {
    const topics = getStoredTopics();
    const updatedTopics = topics.filter(topic => topic.id !== topicId);
    saveTopics(updatedTopics);
    loadTopics();
}

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchTopics();
    }
}

function saveTopicEdit(topicId) {
    const topicElement = document.getElementById(`topic-${topicId}`);
    const topicTitleElement = topicElement.querySelector('.topic-title');
    const newTitle = topicTitleElement.innerText;

    const topics = getStoredTopics();
    const topicIndex = topics.findIndex(t => t.id === topicId);
    if (topicIndex !== -1) {
        topics[topicIndex].title = newTitle;
        saveTopics(topics);
    }


    topicTitleElement.contentEditable = false;
    const editButton = topicElement.querySelector('.edit-topic');
    const saveButton = topicElement.querySelector('.save-topic');
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
    loadTopics();
}
