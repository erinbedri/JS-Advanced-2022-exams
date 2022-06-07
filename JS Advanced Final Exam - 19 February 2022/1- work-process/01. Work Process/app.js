function solve() {

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let email = document.getElementById('email');
    let dateOfBirth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    let tableBody = document.getElementById('tbody');
    let sumElement = document.getElementById('sum');
    let sum = 0;

    const hireBtn = document.getElementById('add-worker');

    hireBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (fname.value != '' && lname.value != '' && email.value != '' && dateOfBirth.value != '' && position.value != '' && salary.value != '') {
            let tr = document.createElement('tr');

            let fnameTd = document.createElement('td');
            fnameTd.textContent = fname.value;
            tr.appendChild(fnameTd);

            let lnameTd = document.createElement('td');
            lnameTd.textContent = lname.value;
            tr.appendChild(lnameTd);

            let emailTd = document.createElement('td');
            emailTd.textContent = email.value;
            tr.appendChild(emailTd);

            let dateOfBirthTd = document.createElement('td');
            dateOfBirthTd.textContent = dateOfBirth.value;
            tr.appendChild(dateOfBirthTd);

            let positionTd = document.createElement('td');
            positionTd.textContent = position.value;
            tr.appendChild(positionTd);

            let salaryTd = document.createElement('td');
            salaryTd.textContent = salary.value;
            tr.appendChild(salaryTd);

            let buttonsTd = document.createElement('td');

            let firedBtn = document.createElement('button');
            firedBtn.textContent = 'Fired';
            firedBtn.className = 'fired';
            buttonsTd.appendChild(firedBtn);

            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit';
            buttonsTd.appendChild(editBtn);

            tr.appendChild(buttonsTd);

            tableBody.appendChild(tr);

            sum += Number(salary.value);
            sumElement.textContent = sum.toFixed(2);

            fname.value = '';
            lname.value = '';
            email.value = '';
            dateOfBirth.value = '';
            position.value = '';
            salary.value = '';

            editBtn.addEventListener('click', () => {
                fname.value = fnameTd.textContent;
                lname.value = lnameTd.textContent;
                email.value = emailTd.textContent;
                dateOfBirth.value = dateOfBirthTd.textContent;
                position.value = positionTd.textContent;
                salary.value = salaryTd.textContent;

                sum -= Number(salary.value);
                sumElement.textContent = sum.toFixed(2);
                tr.remove();
            })

            firedBtn.addEventListener('click', (event) => {
                let workerSalary = event.target.parentElement.parentElement.querySelectorAll('td')[5].textContent;
                sum -= Number(workerSalary);
                sumElement.textContent = sum.toFixed(2);
                tr.remove();
            })
        }
    })
}
solve()