window.addEventListener("load", solve);

function solve() {
	let makeElement = document.getElementById('make');
	let modelElement = document.getElementById('model');
	let yearElement = document.getElementById('year');
	let fuelElement = document.getElementById('fuel');
	let originalCostElement = document.getElementById('original-cost');
	let sellingPriceElement = document.getElementById('selling-price');

	const publishButton = document.getElementById('publish');

	let tableBody = document.getElementById('table-body');
	let carList = document.getElementById('cars-list');

	let profitElement = document.getElementById('profit');
	let totalProfit = 0;

	publishButton.addEventListener('click', (e) => {
		e.preventDefault();

		if (makeElement.value != '' &&
			modelElement.value != '' &&
			yearElement.value != '' &&
			fuelElement.value != '' &&
			originalCostElement.value != '' &&
			sellingPriceElement.value != '' &&
			Number(originalCostElement.value) <= Number(sellingPriceElement.value)) {

			
			let tr = document.createElement('tr');
			tr.classList.add('row');
			
			let tdMake = document.createElement('td');
			tdMake.textContent = makeElement.value;
			tr.appendChild(tdMake);

			let tdModel = document.createElement('td');
			tdModel.textContent = modelElement.value;
			tr.appendChild(tdModel);

			let tdYear = document.createElement('td');
			tdYear.textContent = yearElement.value;
			tr.appendChild(tdYear);

			let tdFuel = document.createElement('td');
			tdFuel.textContent = fuelElement.value;
			tr.appendChild(tdFuel);

			let tdOriginalCost = document.createElement('td');
			tdOriginalCost.textContent = originalCostElement.value;
			tr.appendChild(tdOriginalCost);

			let tdSellingPrice = document.createElement('td');
			tdSellingPrice.textContent = sellingPriceElement.value;
			tr.appendChild(tdSellingPrice);
			
			let tdButtons = document.createElement('td');

			let editButton = document.createElement('button');
			editButton.textContent = 'Edit';
			editButton.classList.add('action-btn');
			editButton.classList.add('edit');
			tdButtons.appendChild(editButton);

			let sellButton = document.createElement('button');
			sellButton.textContent = 'Sell'
			sellButton.classList.add('action-btn');
			sellButton.classList.add('sell');
			tdButtons.appendChild(sellButton);
			
			tr.appendChild(tdButtons);

			tableBody.appendChild(tr);

			makeElement.value = '';
			modelElement.value = '';
			yearElement.value = '';
			fuelElement.value = '';
			originalCostElement.value = '';
			sellingPriceElement.value = '';

			editButton.addEventListener('click', (e) => {
				e.preventDefault();

				makeElement.value = tdMake.textContent;
				modelElement.value = tdModel.textContent;
				yearElement.value = tdYear.textContent;
				fuelElement.value = tdFuel.textContent;
				originalCostElement.value = tdOriginalCost.textContent;
				sellingPriceElement.value = tdSellingPrice.textContent;

				e.target.parentElement.parentElement.remove();
			})

			sellButton.addEventListener('click', (e) => {
				e.preventDefault();

				let li = document.createElement('li');
				li.classList.add('each-list');

				let spanCarInfo = document.createElement('span');
				spanCarInfo.textContent = `${tdMake.textContent} ${tdModel.textContent}`;
				li.appendChild(spanCarInfo);

				let spanCarYear = document.createElement('span');
				spanCarYear.textContent = `${tdYear.textContent}`;
				li.appendChild(spanCarYear);

				let spanCarPriceDifference = document.createElement('span');
				let currentProfit = Number(tdSellingPrice.textContent) - Number(tdOriginalCost.textContent);
				spanCarPriceDifference.textContent = `${currentProfit}`;
				li.appendChild(spanCarPriceDifference);

				carList.appendChild(li);

				e.target.parentElement.parentElement.remove();

				totalProfit += currentProfit;
				profitElement.textContent = totalProfit.toFixed(2);
			})
		}

	})
}
