// TODO List
const submit = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');

submit.addEventListener('click', function () {
    const input = document.querySelector('#todo-text');
    if (input.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = input.value;
        todoList.append(li);
        input.value = '';
    }
});

todoList.addEventListener('click', function (e) {
    e.target.style.textDecoration = 'line-through';
});

todoList.addEventListener('dblclick', function (e) {
    e.target.remove();
});
