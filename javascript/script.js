let parent = document.querySelector('#task-list');
let input = document.querySelector('#valueInput');

function addTask() {

    if (input.value == '') {
        alert('Enter something in task box');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;

        parent.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);

    }
    input.value = "";
    saveData();
}

parent.addEventListener('click', function (e) {
    if (e.target.tagName == 'SPAN') {
        e.target.parentNode.remove();
        saveData();
    } else if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
})


function saveData() {
    localStorage.setItem('data', parent.innerHTML);
}

function loadData(){
    parent.innerHTML = localStorage.getItem('data');
}

loadData();