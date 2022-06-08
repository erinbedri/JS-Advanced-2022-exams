window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;
    let likes = document.querySelector('#total-likes .likes p');

    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');

    const addBtn = document.getElementById('add-btn');

    let divHitsInfo = document.getElementsByClassName('all-hits-container')[0];
    let divSavedHits = document.getElementsByClassName('saved-container')[0];

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {
            let div = document.createElement('div');
            div.className = 'hits-info';

            let image = document.createElement('img');
            image.src = './static/img/img.png';
            div.appendChild(image);

            let h2Genre = document.createElement('h2');
            h2Genre.textContent = 'Genre: ' + `${genre.value}`;
            div.appendChild(h2Genre);

            let h2Name = document.createElement('h2');
            h2Name.textContent = 'Name: ' + `${name.value}`;
            div.appendChild(h2Name);

            let h2Author = document.createElement('h2');
            h2Author.textContent = 'Author: ' + `${author.value}`;
            div.appendChild(h2Author);

            let h3Date = document.createElement('h3');
            h3Date.textContent = 'Date: ' + `${date.value}`;
            div.appendChild(h3Date);

            let saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save song';
            div.appendChild(saveBtn);

            let likeBtn = document.createElement('button');
            likeBtn.className = 'like-btn';
            likeBtn.textContent = 'Like song';
            div.appendChild(likeBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            div.appendChild(deleteBtn);

            divHitsInfo.appendChild(div);

            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';

            likeBtn.addEventListener('click', () => {
                totalLikes++;
                likes.textContent = 'Total Likes: ' + `${totalLikes}`;
                likeBtn.disabled = true;
            })

            saveBtn.addEventListener('click', () => {
                saveBtn.remove();
                likeBtn.remove();
                divSavedHits.appendChild(div);
            })

            deleteBtn.addEventListener('click', () => {
                div.remove();
            })
        }
    })
}