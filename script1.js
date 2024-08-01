document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector("#newtask input");
    const taskSection = document.querySelector('.tasks');

    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            createTask();
        }
    });

    document.querySelector('#push').onclick = function () {
        createTask();
    };

    function createTask() {
        if (taskInput.value.length == 0) {
            alert("The Task field is blank. Enter a task name and try again.");
        } else {
            const task = document.createElement('div');
            task.className = 'task';
            task.innerHTML = `
                <label id="taskname">
                    <input onclick="updateTask(this)" type="checkbox" id="check-task">
                    <p>${taskInput.value}</p>
                </label>
                <div class="delete">
                    <i class="uil uil-trash"></i>
                </div>
            `;
            taskSection.appendChild(task);
            taskInput.value = ''; // Clear the input

            var currentTasks = document.querySelectorAll('.delete');
            for (var i = 0; i < currentTasks.length; i++) {
                currentTasks[i].onclick = function () {
                    this.parentNode.remove();
                };
            }

            if (taskSection.offsetHeight >= 300) {
                taskSection.classList.add("overflow");
            } else {
                taskSection.classList.remove("overflow");
            }
        }
    }

    window.updateTask = function(task) {
        let taskItem = task.parentElement.lastElementChild;
        if (task.checked) {
            taskItem.classList.add("checked");
        } else {
            taskItem.classList.remove("checked");
        }
    };
});
