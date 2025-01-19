import express from 'express'; // Import express
import dotenv from 'dotenv'; // Import dotenv
import {
    clerkMiddleware,
    ClerkExpressRequireAuth,
    requireAuth,
} from '@clerk/express';

dotenv.config(); // Initialise dotenv

const app = express();
const port = process.env.PORT || 5002; // Default port is 5002

// Apply Clerk middleware
// app.use(authMiddleware); // Use the authMiddleware

// Use requireAuth middleware for protected routes:
app.use('/protected', requireAuth()); // Example of protecting a route

// Or, use ClerkExpressRequireAuth for stricter control (no redirect, only errors):
// app.use('/protected', ClerkExpressRequireAuth()); // Example of protecting a route

// Example of error handling middleware (if ClerkExpressRequireAuth or the legacy RequireAuth approach is used):
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send('Unauthenticated');
});

app.get('/', (req, res) => {
    res.send('Hello from Projectiva Backend!');
});

// Example of a protected route
app.get('/protected', (req, res) => {
    // If the middleware allows the request to proceed, user is authenticated
    res.send('This is a protected route! You are authenticated.');
}

app.listen(port, () => {
    console.log(`Projectiva backend listening at http://localhost:${port}`);
});

