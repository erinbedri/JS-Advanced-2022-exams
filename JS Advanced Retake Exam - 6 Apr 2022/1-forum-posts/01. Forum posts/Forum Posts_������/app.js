window.addEventListener("load", solve);

function solve() {
	const publishButton = document.getElementById('publish-btn');
	const clearButton = document.getElementById('clear-btn');
	
	const reviewListElement = document.getElementById('review-list');
	const publishedListElement = document.getElementById('published-list');
	const postTitleInputElement = document.getElementById('post-title');
	const postCategoryInputElement = document.getElementById('post-category');
	const postContentInputElement = document.getElementById('post-content');
	
	let liElement = document.createElement('li');
	liElement.classList.add('rpost');

	let articleElement = document.createElement('article');
	let paragraphCategoryElement = document.createElement('p');
	let paragraphContentElement = document.createElement('p');
	let h4Element = document.createElement('h4');
	let editButton = document.createElement('button');
	let approveButton = document.createElement('button');
	
	
	publishButton.addEventListener('click', () => {
		if (postTitleInputElement.value !== '' && postCategoryInputElement.value !== '' && postContentInputElement.value !== '') {
			h4Element.textContent = postTitleInputElement.value;
			paragraphCategoryElement.textContent = `Category: ${postCategoryInputElement.value}`;
			paragraphContentElement.textContent = `Content: ${postContentInputElement.value}`;
			
			editButton.className = 'action-btn edit';
			editButton.textContent = 'Edit';
			approveButton.className = 'action-btn approve';
			approveButton.textContent = 'Approve';
			
			liElement.appendChild(articleElement);
			liElement.appendChild(approveButton);
			liElement.appendChild(editButton);
			
			articleElement.appendChild(h4Element);
			articleElement.appendChild(paragraphCategoryElement);
			articleElement.appendChild(paragraphContentElement);
			reviewListElement.appendChild(liElement);

			postTitleInputElement.value = '';
			postCategoryInputElement.value = '';
			postContentInputElement.value = '';
		}
	})

	editButton.addEventListener('click', () => {
		postTitleInputElement.value = h4Element.textContent;

		let postCategoryContent = paragraphCategoryElement.textContent.split(': ')[1];
		postCategoryInputElement.value = postCategoryContent;

		let postContentContent = paragraphContentElement.textContent.split(': ')[1];
		postContentInputElement.value = postContentContent;

		liElement.remove();
	})

	approveButton.addEventListener('click', () => {
		liElement.appendChild(articleElement);
		liElement.removeChild(editButton);
		liElement.removeChild(approveButton);
		publishedListElement.appendChild(liElement);
	})

	clearButton.addEventListener('click', () => {
		liElement.remove()
	})
}