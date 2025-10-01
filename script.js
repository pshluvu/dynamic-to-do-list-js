// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        const trimmedText = taskText.trim();
        if (trimmedText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = trimmedText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeTaskFromStorage(trimmedText);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(trimmedText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        taskInput.value = "";
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Event listener for Add Task button
    addButton.addEventListener("click", function () {
        addTask(taskInput.value);
    });

    // Event listener for Enter key press
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask(taskInput.value);
        }
    });

});

