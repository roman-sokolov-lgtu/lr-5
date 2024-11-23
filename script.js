function toggleColorOptions() {
    const colorOptions = document.getElementById("color-options");
    colorOptions.style.display = colorOptions.style.display === "flex" ? "none" : "flex";
}


function filterTasksByColor() {
    const selectedColors = Array.from(document.querySelectorAll('.color-checkbox input:checked')).map(input => input.value);
    const tasks = document.querySelectorAll('.tasks-container .task');

    tasks.forEach(task => {
        const taskColor = task.querySelector('.color-box').style.backgroundColor;
        if (selectedColors.length === 0 || selectedColors.includes(taskColor)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}


function showLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner");
    const tasksContainer = document.getElementById("tasks-container");
    spinner.style.display = "block"; 
    tasksContainer.style.visibility = "hidden"; 
}


function hideLoadingSpinner() {
    const spinner = document.getElementById("loading-spinner");
    const tasksContainer = document.getElementById("tasks-container");
    spinner.style.display = "none"; 
    tasksContainer.style.visibility = "visible"; 
}


document.addEventListener("DOMContentLoaded", () => {
    showLoadingSpinner(); 

    
    setTimeout(() => {
        hideLoadingSpinner(); 
    }, 1000); 
});


function sortTasksByDate() {
    const tasksContainer = document.getElementById("tasks-container");
    const tasks = Array.from(tasksContainer.getElementsByClassName("task"));

    const sortOption = document.getElementById("date-sort").value;

    tasks.sort((taskA, taskB) => {
        const dateA = new Date(taskA.getAttribute("data-date"));
        const dateB = new Date(taskB.getAttribute("data-date"));

        if (sortOption === "earlier") {
            return dateA - dateB; 
        } else if (sortOption === "later") {
            return dateB - dateA; 
        } else {
            return 0; 
        }
    });

    tasks.forEach(task => tasksContainer.appendChild(task)); 
}


document.getElementById("date-sort").addEventListener("change", sortTasksByDate);


const colorCheckboxes = document.querySelectorAll('.color-checkbox input');
colorCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterTasksByColor);
});

