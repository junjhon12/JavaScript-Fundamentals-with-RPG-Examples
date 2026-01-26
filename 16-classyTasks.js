const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

class TaskManager {
    constructor(tasks, render) {
       this.tasks = [];
    }

    add(taskText) {
        if (!taskText) return;
        const task = {
            id: Date.now(),
            text: taskText,
            isCompleted: false
        };
        this.tasks.push(task);
        this.render();
    }

    delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.render();
    }

    toggle(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.isCompleted = !task.isCompleted; // Flip true/false
        }
        this.render();
    }

    render() {
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
            // A. Create the list item
            const li = document.createElement('li');
            // B. Create the Text (Span)
            const textSpan = document.createElement('span');
            textSpan.textContent = task.text;
            if (task.isCompleted) {
                textSpan.classList.add('completed'); // Add CSS class
            }
            // C. Click text to Toggle
            textSpan.addEventListener('click', () => {
                this.toggle(task.id);
            });
            // D. Create Delete Button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add('delete-btn');
            // E. Click button to Delete
            deleteBtn.addEventListener('click', () => {
                this.delete(task.id);
            });
            // F. Assemble (Put parts inside the LI, LI inside the List)
            li.appendChild(textSpan);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    
};

const myManager = new TaskManager();

// 4. EVENTS
addBtn.addEventListener('click', () => {
    myManager.add(taskInput.value);
    taskInput.value = ''; // Clear input box
});