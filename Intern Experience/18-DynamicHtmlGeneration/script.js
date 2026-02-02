const users = [
    { id: 1, name: "Elon M.", role: "Rocket Man", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Mark Z.", role: "MetaVerse Guy", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Jeff B.", role: "Book Seller", img: "https://i.pravatar.cc/150?u=3" }
];

const feed = document.querySelector("#feed-container");

// ---------------------------------------------------------
// TODO: MISSION OBJECTIVES
// ---------------------------------------------------------

// 1. Create a variable 'htmlString'.
// 2. Use users.map() to transform the data into HTML strings.
//    Inside the map:
//    Return a template literal (``) that looks like this:
/*
    <div class="profile-card">
        <img src="${user.img}" class="avatar">
        <div class="info">
            <h3>${user.name}</h3>
            <p>${user.role}</p>
        </div>
        <button>Follow</button>
    </div>
*/
const htmlString = users.map(user => {
    return `
        <div class="profile-card">
            <img src="${user.img}" class="avatar">
            <div class="info">
                <h3>${user.name}</h3>
                <p>${user.role}</p>
            </div>
            <button>Follow</button>
        </div>
    `;
// 3. Don't forget to chain .join("") at the end of the map!    
}).join("");
// 4. Set feed.innerHTML = htmlString;
feed.innerHTML = htmlString;