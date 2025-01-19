import express from 'express'; // Import express
import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Initialise dotenv

// const authMiddleware = require('./middlewares/authMiddleware'); // Import the authMiddleware
const app = express();
const port = process.env.PORT || 5002; // Default port is 5002

// app.use(authMiddleware); // Use the authMiddleware

app.get('/', (req, res) => {
    res.send('Hello from Projectiva Backend!');
});

app.listen(port, () => {
    console.log(`Projectiva backend listening at http://localhost:${port}`);
});

