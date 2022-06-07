window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let name = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');

    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    const sendBtn = document.querySelector('#right form button');
    const clearBtn = document.getElementsByClassName('clear-btn')[0];

    sendBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (productType.value != '' && description.value != '' && name != '' && phone != '') {
            let div = document.createElement('div');
            div.className = 'container';

            let h2 = document.createElement('h2');
            h2.textContent = 'Product type for repair: ' + productType.value;
            div.appendChild(h2);

            let h3 = document.createElement('h3');
            h3.textContent = 'Client information: ' + name.value + ', ' + phone.value;
            div.appendChild(h3);

            let h4 = document.createElement('h4');
            h4.textContent = 'Description of the problem: ' + description.value;
            div.appendChild(h4);

            let startBtn = document.createElement('button');
            startBtn.textContent = 'Start repair';
            startBtn.className = 'start-btn';
            div.appendChild(startBtn);

            let finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish repair';
            finishBtn.className = 'finish-btn';
            finishBtn.disabled = true;
            div.appendChild(finishBtn);

            receivedOrders.appendChild(div);

            //productType.value = '';
            description.value = '';
            name.value = '';
            phone.value = '';

            startBtn.addEventListener('click', () => {
                startBtn.disabled = true;
                finishBtn.disabled = false;

                finishBtn.addEventListener('click', () => {
                    startBtn.remove();
                    finishBtn.remove();
                    completedOrders.appendChild(div);
                })
            })

            clearBtn.addEventListener('click', () => {
                let completed = Array.from(document.querySelectorAll('#completed-orders div'));

                completed.forEach(el => {
                    el.remove();
                });
            })
        }
    })
}