function solve() {
    const recipientInput = document.getElementById('recipientName');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');

    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');

    let listMails = document.querySelector('.list-mails ul');
    let sentMails = document.querySelector('.sent-mails ul');
    let deletedMails = document.querySelector('.trash ul');

    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (recipientInput.value !== '' && titleInput.value !== '' && messageInput.value !== '') {
            
            let li = document.createElement('li');

            let h4Title = document.createElement('h4');
            h4Title.textContent = 'Title: ' + `${titleInput.value}`;
            li.appendChild(h4Title);

            let h4Recipient = document.createElement('h4');
            h4Recipient.textContent = 'Recipient Name: ' + `${recipientInput.value}`;
            li.appendChild(h4Recipient);

            let span = document.createElement('span');
            span.textContent = messageInput.value;
            li.appendChild(span);

            let div = document.createElement('div');
            div.id = 'list-action';

            let sendButton = document.createElement('button');
            sendButton.textContent = 'Send';
            sendButton.type = 'Submit';
            sendButton.id = 'send';
            div.appendChild(sendButton);

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.type = 'Submit';
            deleteButton.id = 'delete';
            div.appendChild(deleteButton);

            li.appendChild(div);
            listMails.appendChild(li);

            recipientInput.value = '';
            titleInput.value = '';
            messageInput.value = '';

            sendButton.addEventListener('click', (event) => {
                event.preventDefault();

                let liEl = document.createElement('li');

                let spanTo = document.createElement('span');
                let recipientName = h4Recipient.textContent.split(': ')[1];
                spanTo.textContent = 'To:' + recipientName;
                liEl.appendChild(spanTo);

                let spanTitle = document.createElement('span');
                let titleText = h4Title.textContent.split(': ')[1];
                spanTitle.textContent = 'Title:' + titleText;
                liEl.appendChild(spanTitle);

                let divBtn = document.createElement('div');
                divBtn.className = 'btn';

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.type = 'Submit';
                deleteBtn.id = 'delete';
                divBtn.appendChild(deleteBtn);
                liEl.appendChild(divBtn);
                sentMails.appendChild(liEl);
                
                li.remove();

                deleteBtn.addEventListener('click', () => {
                    deleteBtn.parentElement.remove();
                    deletedMails.appendChild(liEl);
                })
            })

            deleteButton.addEventListener('click', () => {
                let liDel = document.createElement('li');

                let spanTo = document.createElement('span');
                let recipientName = h4Recipient.textContent.split(': ')[1];
                spanTo.textContent = 'To:' + recipientName;
                liDel.appendChild(spanTo);

                let spanTitle = document.createElement('span');
                let titleText = h4Title.textContent.split(': ')[1];
                spanTitle.textContent = 'Title:' + titleText;
                liDel.appendChild(spanTitle);

                li.remove();
                deletedMails.appendChild(liDel);
            })
        }
    })

    resetButton.addEventListener('click', (event) => {
        event.preventDefault();

        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    })

}


solve()
