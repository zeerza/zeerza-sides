function saveMessage() {
    const message = document.getElementById('message').value;
    if (message) {
        const messageContainer = document.getElementById('message-container');
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.textContent = message;
        messageContainer.appendChild(messageItem);
        document.getElementById('message').value = '';
    }
}
