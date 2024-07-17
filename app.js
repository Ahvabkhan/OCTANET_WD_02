document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
}
