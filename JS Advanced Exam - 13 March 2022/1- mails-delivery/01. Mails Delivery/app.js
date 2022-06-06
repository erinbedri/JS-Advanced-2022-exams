function solve() {
    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');

    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');
    
    let unsortedListElement = document.getElementById('list');
    let sentMailsElement = document.getElementsByClassName('sent-list')[0];
    let deletedMailsElement = document.getElementsByClassName('delete-list')[0];
    
    //let listElementListOfMails = document.createElement('li');
    let listElementSentMails = document.createElement('li');
    //let listElementDeletedMails = document.createElement('li');
    let listElementListOfMails = document.createElement('li');

    let h4TitleElement = document.createElement('h4');
    let h4RecipientElement = document.createElement('h4');
    let spanElement = document.createElement('span');

    let sendButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    let divElement = document.createElement('div');
    let deleteBtn = document.createElement('button');
    
    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (recipientInput.value !== '' && titleInput.value !== '' && messageInput.value !== '') {

            h4TitleElement.textContent = `Title: ${titleInput.value}`;
            h4RecipientElement.textContent = `Recipient Name: ${recipientInput.value}`;
            spanElement.textContent = messageInput.value;
            
            sendButton.setAttribute('type', 'submit');
            sendButton.setAttribute('id', 'send');
            sendButton.textContent = 'Send';
            
            deleteButton.setAttribute('type', 'submit');
            deleteButton.setAttribute('id', 'delete');
            deleteButton.textContent = 'Delete';

            divElement.setAttribute('id', 'list-action');
            divElement.appendChild(sendButton);
            divElement.appendChild(deleteButton);

            listElementListOfMails.appendChild(h4TitleElement);
            listElementListOfMails.appendChild(h4RecipientElement);
            listElementListOfMails.appendChild(spanElement);
            listElementListOfMails.appendChild(divElement);

            unsortedListElement.appendChild(listElementListOfMails);

            recipientInput.value = '';
            titleInput.value = '';
            messageInput.value = '';
        }
    })

    resetButton.addEventListener('click', (event) => {
        event.preventDefault();

        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    })

    sendButton.addEventListener('click', (event) => {
        event.preventDefault();

        let spanToElement = document.createElement('span');
        let spanToText = h4RecipientElement.textContent.split(': ')[1];
        spanToElement.textContent = `To: ${spanToText}`;

        let spanTitleElement = document.createElement('span');
        let spanTitleText = h4TitleElement.textContent.split(': ')[1];
        spanTitleElement.textContent = `Title: ${spanTitleText}`;

        let divBtnElement = document.createElement('div');
        divBtnElement.setAttribute('class', 'btn');

        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('class', 'delete');
        deleteBtn.textContent = 'Delete';

        divBtnElement.appendChild(deleteBtn);
        listElementSentMails.appendChild(spanToElement);
        listElementSentMails.appendChild(spanTitleElement);
        listElementSentMails.appendChild(divBtnElement);
        sentMailsElement.appendChild(listElementSentMails);

        listElementListOfMails.remove();
    })

    deleteButton.addEventListener('click', () => {
        let listElementDeletedMails = document.createElement('li');

        let spanToElement = document.createElement('span');
        let spanToText = h4RecipientElement.textContent.split(': ')[1];
        spanToElement.textContent = `To: ${spanToText}`;

        let spanTitleElement = document.createElement('span');
        let spanTitleText = h4TitleElement.textContent.split(': ')[1];
        spanTitleElement.textContent = `Title: ${spanTitleText}`;

        deletedMailsElement.appendChild(listElementDeletedMails)

        listElementDeletedMails.appendChild(spanToElement);
        listElementDeletedMails.appendChild(spanTitleElement);

        listElementListOfMails.remove();
    })

    deleteBtn.addEventListener('click', () => {
        let listElementDeletedMails = document.createElement('li');

        let spanToElement = document.createElement('span');
        let spanToText = h4RecipientElement.textContent.split(': ')[1];
        spanToElement.textContent = `To: ${spanToText}`;

        let spanTitleElement = document.createElement('span');
        let spanTitleText = h4TitleElement.textContent.split(': ')[1];
        spanTitleElement.textContent = `Title: ${spanTitleText}`;

        deletedMailsElement.appendChild(listElementDeletedMails)

        listElementDeletedMails.appendChild(spanToElement);
        listElementDeletedMails.appendChild(spanTitleElement);

        listElementSentMails.remove();
    })
}

solve()
