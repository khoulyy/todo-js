// Get elements
let inputField = document.querySelector(".input-text");
let tbody = document.querySelector("tbody");
let addButton = document.querySelector(".add");

addButton.addEventListener("click", (e) => {
    if (inputField.value == "") {
        alert("Please Enter a Task");
    } else {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");

        let checkCell = document.createElement("td");
        checkCell.appendChild(checkbox);

        let taskCell = document.createElement("td");
        taskCell.setAttribute("class", "TaskName");

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        deleteButton.textContent = "Del";

        let deleteCell = document.createElement("td");
        deleteCell.appendChild(deleteButton);

        let tr = document.createElement("tr");
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
