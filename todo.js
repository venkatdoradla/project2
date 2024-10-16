// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new list item (li) element
    let li = document.createElement("li");

    // Add the task text inside the list item
    li.textContent = taskInput;

    // Create a delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };

    // Mark task as completed when clicked
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Add the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    document.getElementById("taskInput").value = "";
}
