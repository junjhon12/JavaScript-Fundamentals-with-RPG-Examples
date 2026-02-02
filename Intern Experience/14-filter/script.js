const comments = [
    { text: "Great post!", isSpam: false },
    { text: "CLICK HERE FOR FREE MONEY", isSpam: true },
    { text: "I learned a lot, thanks.", isSpam: false },
    { text: "L0sEr", isSpam: true },
    { text: "Nice work.", isSpam: false }
];

const btn = document.querySelector("#filter-btn");
const list = document.querySelector("#comment-list");

// Helper function to render the list (I wrote this for you)
function render(arrayToRender) {
    list.innerHTML = "";
    arrayToRender.forEach(item => {
        const div = document.createElement("div");
        div.className = "comment";
        div.innerText = item.text;
        list.appendChild(div);
    });
}

// Initial Render (Shows everything, including spam)
render(comments);

btn.addEventListener("click", () => {
    
    // ---------------------------------------------------------
    // TODO: MISSION OBJECTIVES
    // ---------------------------------------------------------
    
    // 1. Create a new variable 'cleanComments'.
    // 2. Use .filter() on the 'comments' array.
    //    Inside the filter function, return TRUE only if 'comment.isSpam' is FALSE.
    //    (Try using the implicit return syntax! e.g. arrow function with no brackets)
    const cleanComments = comments.filter(comment => !comment.isSpam);
    // 3. Call the render() function and pass it your new 'cleanComments' array.
    render(cleanComments);
});