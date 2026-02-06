require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // <--- MISSING IMPORT
const User = require('./models/User');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// --- CONNECT TO MONGODB (THIS WAS MISSING) ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected!"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));
// ---------------------------------------------

app.get('/', (req, res) => {
    res.json({ message: "Server is running successfully!" });
});

app.get('/api/github/:username', async (req, res) => {
    const { username } = req.params;

    try {
        let user = await User.findOne({ username: username });

        if (user) {
            console.log(`⚡ Served ${username} from MongoDB (Cache)`);
            return res.json(user);
        }

        console.log(`🌐 Fetching ${username} from GitHub...`);
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            return res.status(response.status).json({ message: "User not found on GitHub" });
        }

        const data = await response.json();

        user = new User({
            username: data.login,
            name: data.name,
            avatar_url: data.avatar_url,
            public_repos: data.public_repos,
            followers: data.followers
        });

        await user.save();
        console.log(`💾 Saved ${username} to MongoDB`);

        res.json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});