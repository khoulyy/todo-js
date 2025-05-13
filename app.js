// Get elements
const inputField = document.querySelector(".input-text");
const tbody = document.querySelector("tbody");
const addButton = document.querySelector(".add");

addButton.addEventListener("click", (e) => {
    if (inputField.value == "") {
        alert("Please Enter a Task");
    } else {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        const checkCell = document.createElement("td");
        checkCell.appendChild(checkbox);

        const taskCell = document.createElement("td");
        taskCell.setAttribute("class", "TaskName");

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.textContent = "Del";

        const deleteCell = document.createElement("td");
        deleteCell.appendChild(deleteButton);

        const tr = document.createElement("tr");
        taskCell.textContent = inputField.value;
        tr.append(checkCell, taskCell, deleteCell);
        tbody.appendChild(tr);

        // Checkbox
        checkbox.addEventListener("click", (e) => {
            taskCell.style.textDecoration;

            if (taskCell.style.textDecoration == "") {
                taskCell.style.textDecoration = "line-through";
            } else {
                taskCell.style.textDecoration = "";
            }
        });
        // Delete
        deleteButton.addEventListener("click", (e) => {
            tr.remove();
        });
    }
});
