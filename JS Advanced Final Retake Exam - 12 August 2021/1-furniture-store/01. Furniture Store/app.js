window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');

    let furnitureList = document.getElementById('furniture-list');
    let totalPriceElement = document.getElementsByClassName('total-price')[0];
    let totalPrice = 0;

    const addButton = document.getElementById('add');

    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (modelInput.value != '' && descriptionInput.value != '' && Number(yearInput.value) > 0 && Number(priceInput.value) > 0) {
            let trInfo = document.createElement('tr');
            trInfo.className = 'info';

            let modelTd = document.createElement('td');
            modelTd.textContent = modelInput.value;
            trInfo.appendChild(modelTd);

            let priceTd = document.createElement('td');
            priceTd.textContent = Number(priceInput.value).toFixed(2);
            trInfo.appendChild(priceTd);

            let buttonsTd = document.createElement('td');

            let moreButton = document.createElement('button');
            moreButton.className = 'moreBtn';
            moreButton.textContent = 'More Info';
            buttonsTd.appendChild(moreButton);

            let buyButton = document.createElement('button');
            buyButton.className = 'buyBtn';
            buyButton.textContent = 'Buy it';
            buttonsTd.appendChild(buyButton);
            trInfo.appendChild(buttonsTd);

            let trHide = document.createElement('tr');
            trHide.className = 'hide';

            let yearTd = document.createElement('td');
            yearTd.textContent = `Year: ${yearInput.value}`;
            trHide.appendChild(yearTd);

            let descriptionTd = document.createElement('td');
            descriptionTd.colSpan = 3;
            descriptionTd.textContent = `Description: ${descriptionInput.value}`;
            trHide.appendChild(descriptionTd);

            furnitureList.appendChild(trInfo);
            furnitureList.appendChild(trHide);

            modelInput.value = '';
            yearInput.value = '';
            descriptionInput.value = '';
            priceInput.value = '';

            moreButton.addEventListener('click', (event) => {
                event.preventDefault();

                if (moreButton.textContent == 'Less Info') {
                    moreButton.textContent = 'More Info'
                    trHide.style.display = 'none';
                } else {
                    moreButton.textContent = 'Less Info'
                    trHide.style.display = 'contents';
                }
            });

            buyButton.addEventListener('click', (event) => {
                event.preventDefault();

                let currentRow = event.currentTarget.parentElement.parentElement;;

                let currentPrice = event.currentTarget.parentElement.parentElement.querySelectorAll('td')[1].textContent;
                totalPrice += Number(currentPrice);
                totalPriceElement.textContent = totalPrice.toFixed(2);

                currentRow.remove();
            })
        }
    });
}
