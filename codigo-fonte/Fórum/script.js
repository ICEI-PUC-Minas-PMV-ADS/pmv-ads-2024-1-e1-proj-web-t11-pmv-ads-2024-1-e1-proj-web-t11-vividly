const userName = JSON.parse(localStorage.getItem("usuarios"));
const usuario = userName[0].usuario;
const INPUT_BUSCA = document.getElementById('input-busca');
const topic = document.getElementById('topic-title');



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

