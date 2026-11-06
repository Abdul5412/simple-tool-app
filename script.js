function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
