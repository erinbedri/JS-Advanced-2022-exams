function solve() {
	const createButton = document.querySelector('.create');

	createButton.addEventListener('click', createHtmlElement);


	function createHtmlElement(e) {
		e.preventDefault();
		
		let posts = document.querySelector('main section');

		let authorInput = document.getElementById('creator');
		let titleInput = document.getElementById('title');
		let categoryInput = document.getElementById('category');
		let contentInput = document.getElementById('content');

		//if (authorInput.value != '' && titleInput.value != '' && categoryInput.value != '' && contentInput.value != '') {
			let article = document.createElement('article');

			let h1 = document.createElement('h1');
			h1.textContent = titleInput.value;
			article.appendChild(h1);

			let categoryP = document.createElement('p');
			categoryP.textContent = 'Category:'
			let categoryStrong = document.createElement('strong');
			categoryStrong.textContent = categoryInput.value;
			categoryP.appendChild(categoryStrong);
			article.appendChild(categoryP);

			let creatorP = document.createElement('p');
			creatorP.textContent = 'Creator:'
			let creatorStrong = document.createElement('strong');
			creatorStrong.textContent = authorInput.value;
			creatorP.appendChild(creatorStrong);
			article.appendChild(creatorP);

			let contentP = document.createElement('p');
			contentP.textContent = contentInput.value;
			article.appendChild(contentP);

			let buttonsDiv = document.createElement('div');
			buttonsDiv.classList.add('buttons');

			let deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			deleteButton.classList.add('btn');
			deleteButton.classList.add('delete');
			buttonsDiv.appendChild(deleteButton);
			deleteButton.addEventListener('click', deletePost);

			let archiveButton = document.createElement('button');
			archiveButton.textContent = 'Archive';
			archiveButton.classList.add('btn');
			archiveButton.classList.add('archive');
			buttonsDiv.appendChild(archiveButton);
			archiveButton.addEventListener('click', archivePost);

			article.appendChild(buttonsDiv);

			posts.appendChild(article);

			authorInput.value = '';
			titleInput.value = '';
			categoryInput.value = ''
			contentInput.value = '';

			console.log(document.querySelectorAll(".buttons")[0].children[1])
		//}
	};

	function deletePost(e) {
		e.preventDefault();

		let target = e.target;
		let elementToDelete = target.parentElement.parentElement;

		elementToDelete.remove();
	};

	function archivePost(e) {
		e.preventDefault();

		let archive = document.querySelector('.archive-section ol')

		let target = e.target;
		let elementToDelete = target.parentElement.parentElement;
		let elementToArchive = target.parentElement.parentElement.querySelector('h1');

		let li = document.createElement('li');
		li.textContent = elementToArchive.textContent;
		archive.appendChild(li);

		const items = [...archive.querySelectorAll('li')];
		archive.innerHTML = '';
   
		items.sort((a, b) => a.textContent.localeCompare(b.textContent))
		   .forEach(e => archive.appendChild(e));

		elementToDelete.remove();
	};


}
