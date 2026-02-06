import { useState } from 'react';
import './App.css';

function App() {
  // --- STATE (The Memory) ---
  // In Vanilla JS, you checked input.value.
  // In React, we sync the input to a variable instantly.
  const [username, setUsername] = useState(""); // Default is empty string
  const [userData, setUserData] = useState(null); // Data starts as null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchUser = async () => {
    // 1. Reset State: Clear errors and show loading text
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      // 2. Fetch Data (Same logic as your Capstone)
      // We are now calling OUR server (Port 5000), not GitHub directly.
      const response = await fetch(`http://localhost:5000/api/github/${username}`);

      // 3. Handle 404 Errors
      if (!response.ok) {
        throw new Error("User not found");
      }

      // 4. Parse JSON
      const data = await response.json();

      // 5. Update State (This triggers the UI to re-render!)
      setUserData(data);

    } catch (err) {
      // 6. Handle Errors
      setError(err.message);
    } finally {
      // 7. Hide Loading (Runs whether we succeed or fail)
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>GitFinder</h1>
      
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Enter GitHub username..."
          value={username} // 1. Bind to variable
          onChange={(e) => setUsername(e.target.value)} // 2. Update variable on type
        />
        <button onClick={searchUser}>Search</button>
      </div>

      {/* CONDITIONAL RENDERING (The Magic) */}
      
      {loading && <p>Loading...</p>}
      
      {error && <p className="error">{error}</p>}

      {/* Only show this if we have data! */}
      {userData && (
        <div className="profile-card">
            <img src={userData.avatar_url} className="avatar" alt="profile" />
            <h2>{userData.name}</h2>
            <p>@{userData.login}</p>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-val">{userData.public_repos}</span> Repos
                </div>
                <div className="stat-item">
                    <span className="stat-val">{userData.followers}</span> Followers
                </div>
            </div>
        </div>
      )}
      
    </div>
  );
}

export default App;