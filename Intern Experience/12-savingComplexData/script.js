const input = document.querySelector("#task-input");
const btn = document.querySelector("#add-btn");
const list = document.querySelector("#task-list");

// 1. Initialize State: Try to load tasks from localStorage.
//    If nothing is found, start with an empty array [].
//    HINT: Use JSON.parse() here.
let myTasks = JSON.parse(localStorage.getItem("todos")) || [];

// 2. Define a function 'renderList' that updates the screen.
function renderList() {
    // a. Clear the current list HTML (list.innerHTML = "")
    list.innerHTML = "";
    
    // b. Loop through 'myTasks' array.
    //    For each task text:
    //    i. Create an 'li'.
    //    ii. Set text.
    //    iii. Append to list.
    myTasks.forEach(taskText => {
        const li = document.createElement("li");
        li.innerText = taskText;
        list.appendChild(li);
    });
}

// 3. Call renderList() immediately so the user sees saved tasks on page load.
renderList();

// 4. Add Click Listener to Button
btn.addEventListener("click", () => {
    const text = input.value;
    
    if (text !== "") {
        // a. Add the new text to the 'myTasks' array (push).
        myTasks.push(text);
        // b. Save the updated array to localStorage.
        //    REMEMBER: Use JSON.stringify()!
        localStorage.setItem("todos", JSON.stringify(myTasks));
        // c. Run 'renderList()' again to update the screen.
        renderList();
        // d. Clear input box.
        input.value = "";
    }
});