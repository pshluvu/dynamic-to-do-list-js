// Step 1: Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Step 2: Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Step 3: Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim input

        // Step 4: Check if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 5: Create list item for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Step 6: Create remove button for the task
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Step 7: Assign click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Step 8: Append remove button to li and li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 9: Clear the input field
        taskInput.value = "";
    }

    // Step 10: Event listener for Add Task button
    addButton.addEventListener("click", addTask);

    // Step 11: Event listener for Enter key press
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

});
