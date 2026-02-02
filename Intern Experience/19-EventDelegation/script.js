const feedContainer = document.querySelector("#feed-container");

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

// 1. Add a 'click' event listener to the 'feedContainer' (NOT the buttons).
feedContainer.addEventListener("click", (e) => {
    
    // 2. CHECK: Did the user click an element with the class "follow-btn"?
    //    Hint: Use e.target.classList.contains("follow-btn")
        if(e.target.classList.contains("follow-btn")){
            const id = e.target.dataset.id;
            const name = e.target.dataset.name;
            alert(`Following ${name} (ID: ${id})`);
        }
    
        // 3. IF YES:
        //    a. Get the 'id' from the button using e.target.dataset.id
        //    b. Get the 'name' from the button using e.target.dataset.name
        
        //    c. Alert the message: "Following [Name] (ID: [id])"
        
});