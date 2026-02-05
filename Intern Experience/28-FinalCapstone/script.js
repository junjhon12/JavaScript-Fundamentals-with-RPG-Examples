const input = document.querySelector("#username-input");
const btn = document.querySelector("#search-btn");
const display = document.querySelector("#display-area");

// 1. Define a Class named 'UI' to handle the HTML generation.
class UI {
    // Static method: generateHTML(user)
    // Accepts a user object.
    // Returns a Template Literal string with the HTML for the card.
    // Use Destructuring to extract: avatar_url, login, name, public_repos, followers
    /*
        HTML Structure:
        <div class="profile-card">
            <img src="${avatar_url}" class="avatar">
            <h2>${name}</h2>
            <p>@${login}</p>
            <div class="stats">
                <div class="stat-item"><span class="stat-val">${public_repos}</span> Repos</div>
                <div class="stat-item"><span class="stat-val">${followers}</span> Followers</div>
            </div>
        </div>
    */
        static generateHTML(user) {
            const { avatar_url, login, name, public_repos, followers } = user;
            return `
                <div class="profile-card">
                    <img src="${avatar_url}" class="avatar">
                    <h2>${name}</h2>
                    <p>@${login}</p>
                    <div class="stats">
                        <div class="stat-item"><span class="stat-val">${public_repos}</span> Repos</div>
                        <div class="stat-item"><span class="stat-val">${followers}</span> Followers</div>
                    </div>
                </div>
            `;
        }
}

// 2. Add Click Listener
btn.addEventListener("click", async () => {
    const username = input.value;
    display.innerHTML = "Loading...";

    // 3. Start Try/Catch Block
    try {
        // a. Fetch `https://api.github.com/users/${username}`
        const response = await fetch(`https://api.github.com/users/${username}`);
        // b. Check if response.ok is false. If so, throw Error("User not found").
        if (!response.ok) { throw new Error("User not found");}
        // c. Parse JSON data.
        const data = await response.json();
        // d. Generate HTML using your UI class: UI.generateHTML(data)
        // e. Update display.innerHTML.
        display.innerHTML = UI.generateHTML(data);
    } catch (error) {
        // f. Display error message in display.innerHTML (use class="error")
        display.innerHTML = `<p class="error">${error.message}</p>`
    }
});