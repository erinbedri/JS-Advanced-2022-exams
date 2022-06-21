window.addEventListener('load', solution);

function solution() {
	let fullNameElement = document.getElementById('fname');
	let emailElement = document.getElementById('email');
	let phoneNumberElement = document.getElementById('phone');
	let addressElement = document.getElementById('address');
	let postalCodeElement = document.getElementById('code');

	let listElement = document.getElementById('infoPreview');
	let blockDiv = document.getElementById('block');

	const submitButton = document.getElementById('submitBTN');
	const editButton = document.getElementById('editBTN');
	const continueButton = document.getElementById('continueBTN');

	submitButton.addEventListener('click', () => {
		if (fullNameElement.value != '' && emailElement.value != '') {
			submitButton.disabled = true;
			editButton.disabled = false;
			continueButton.disabled = false;

			let nameLi = document.createElement('li');
			nameLi.textContent = `Full Name: ${fullNameElement.value}`;
			listElement.appendChild(nameLi);

			let emailLi = document.createElement('li');
			emailLi.textContent = `Email: ${emailElement.value}`;
			listElement.appendChild(emailLi);

			let phoneNumberLi = document.createElement('li');
			phoneNumberLi.textContent = `Phone Number: ${phoneNumberElement.value}`;
			listElement.appendChild(phoneNumberLi);

			let addressLi = document.createElement('li');
			addressLi.textContent = `Address: ${addressElement.value}`;
			listElement.appendChild(addressLi);

			let postalCodeLi = document.createElement('li');
			postalCodeLi.textContent = `Postal Code: ${postalCodeElement.value}`;
			listElement.appendChild(postalCodeLi);

			fullNameElement.value = '';
			emailElement.value = '';
			phoneNumberElement.value = '';
			addressElement.value = '';
			postalCodeElement.value = '';

			editButton.addEventListener('click', () => {
				submitButton.disabled = false;
				editButton.disabled = true;
				continueButton.disabled = true;

				fullNameElement.value = nameLi.textContent.split(': ')[1];
				emailElement.value = emailLi.textContent.split(': ')[1];
				phoneNumberElement.value = phoneNumberLi.textContent.split(': ')[1];
				addressElement.value = addressLi.textContent.split(': ')[1];
				postalCodeElement.value = postalCodeLi.textContent.split(': ')[1];

				Array.from(listElement.querySelectorAll('li')).forEach(li => li.remove())
			});

			continueButton.addEventListener('click', () => {
				while (blockDiv.firstChild) {
					blockDiv.removeChild(blockDiv.lastChild);
				};

				let h3 = document.createElement('h3');
				h3.textContent = 'Thank you for your reservation!';
				blockDiv.appendChild(h3);
			})
		}
	})
}
