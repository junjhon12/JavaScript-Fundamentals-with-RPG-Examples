const input = document.querySelector("#task-input");
const button = document.querySelector('#add-btn');
const list = document.querySelector('#task-list');

button.addEventListener('click', () => {
    const textValue = input.value;
    
    if (textValue !== "") {
        // 1. Create the LI
        const newLi = document.createElement('li');
        
        // 2. Set the text of the LI (Add a space so the button isn't squished)
        newLi.innerText = textValue + " ";
        
        // --- NEW MISSION STARTS HERE ---
        
        // 3. Create a 'button' element.
        const deleteBtn = document.createElement('button');
        // 4. Set the button's innerText to "Delete".
        deleteBtn.innerText = "Delete";
        // 5. Add a click event listener TO THE NEW BUTTON.
        //    Inside that listener: call newLi.remove();
        deleteBtn.addEventListener('click', () => {
            newLi.remove();
        })
        // 6. Append the button TO the newLi (using appendChild).
        newLi.appendChild(deleteBtn);
        // --- NEW MISSION ENDS HERE ---
        
        // 7. Append the newLi to the main list (You already did this)
        list.appendChild(newLi);
        
        // 8. Clear input
        input.value = "";
    }
});