const messages = [
    { text: 'Mensagem 1', date: '2024-05-10' },
    { text: 'Mensagem 2', date: '2024-05-11' },
    { text: 'Mensagem 3', date: '2024-05-12' }
];

function displayMessages() {
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message.date}: ${message.text}`;
        messageList.appendChild(messageElement);
    });
}

function filterMessages() {
    const dateFilter = document.getElementById('date-filter').value;
    const filteredMessages = messages.filter(message => message.date === dateFilter);
    const messageList = document.getElementById('message-list');
    messageList.innerHTML = '';
    filteredMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message.date}: ${message.text}`;
        messageList.appendChild(messageElement);
    });
}

displayMessages();