// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get trimmed input

        // Alert if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button with inline styles
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.backgroundColor = "#ff6347";
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.borderRadius = "4px";
        removeBtn.style.padding = "5px 10px";

        // Remove the task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the task and the task to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add task when Add button is clicked
    addButton.addEventListener("click", addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

});

