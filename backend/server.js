// import express from 'express'; // Import express
// import 'dotenv/config'; // Load environment variables
// import cors from 'cors'; // Import cors

// // Import routes
// import projectRoutes from './routes/projectRoutes.js'; // Import projectRoutes
// import taskRoutes from '.routes/taskRoutes.js';
// import subtaskRoutes from '.routes/subtaskRoutes.js';
// import clientRoutes from './routes/clientRoutes.js'; // Import clientRoutes
// import technicianRoutes from './routes/technicianRoutes.js'; // Import technicianRoutes
// import equipmentRoutes from './routes/equipmentRoutes.js'; // Import equipmentRoutes
// import toolRoutes from './routes/toolRoutes.js'; // Import toolRoutes
// import notificationRoutes from './routes/notificationRoutes.js'; // Import notificationRoutes
// import landingContentRoutes from './routes/landingContentRoutes.js'; // Import landingContentRoutes
// import aboutRoutes from './routes/aboutRoutes.js'; // Import aboutRoutes
// import analyticsRoutes from './routes/analyticsRoutes.js'; // Import analyticsRoutes
// import settingRoutes from './routes/settingRoutes.js'; // Import settingRoutes
// import userRoutes from './routes/userRoutes.js'; // Import userRoutes
// import dashboardRoutes from './routes/dashboardRoutes.js'; // Import dashboardRoutes

// // import {
// //     clerkMiddleware,
// //     ClerkRequireAuth,
// //     requireAuth,
// // } from '@clerk/express';


// const app = express();
// const port = process.env.PORT || 5002; // Default port is 5002

// // Apply Clerk middleware
// // app.use(authMiddleware); // Use the authMiddleware

// // Use requireAuth middleware for protected routes:
// // app.use('/protected', requireAuth()); // Example of protecting a route

// // Or, use ClerkExpressRequireAuth for stricter control (no redirect, only errors):
// // app.use('/protected', ClerkExpressRequireAuth()); // Example of protecting a route

// // Example of error handling middleware (if ClerkExpressRequireAuth or the legacy RequireAuth approach is used):
// // app.use((err, req, res, next) => {
// //     console.error(err.stack);
// //     res.status(401).send('Unauthenticated');
// // });

// // Temporary: Bypass Authentication(for development purposes)
// app.use((req, res, next) => {
//     req.auth = {
//         userId: 'user_2rprZaF2twvsb5V0sQVSx90u7pP'
//     };
//     next();
// });

// app.get('/', (req, res) => {
//     res.send('Hello from Projectiva Backend!');
// });

// // Example of a route that would normally be protected
// app.get('/protected', (req, res) => {
//     // Now you can access req.auth.userId even without Clerk integration
//     res.send(
//       `This route would be protected. You are simulating user: ${req.auth.userId}`
//     );
//   });

// // Example of a protected route
// // app.get('/protected', (req, res) => {
// //     // If the middleware allows the request to proceed, user is authenticated
// //     res.send('This is a protected route! You are authenticated.');
// // });

// // Mount routes at specified endpoints
// app.use('/api/projects', projectRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/subtasks', subtaskRoutes);
// app.use('/api/clients', clientRoutes);
// app.use('/api/technicians', technicianRoutes);
// app.use('/api/equipment', equipmentRoutes);
// app.use('/api/tools', toolRoutes);
// app.use('/api/notifications', notificationRoutes);
// app.use('/api/settings', settingRoutes);
// app.use('/api/landing-content', landingContentRoutes);
// app.use('/api/about', aboutRoutes);
// app.use('/api/analytics', analyticsRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/dashboard', dashboardRoutes);

// app.listen(port, () => {
//     console.log(`Projectiva backend listening at http://localhost:${port}`);
// });


import express from 'express';
import 'dotenv/config.js'; // Load environment variables
import cors from 'cors';
import bodyParser from 'body-parser';
import { Webhook } from 'svix';

// Import routes
import projectRoutes from './routes/projectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import subtaskRoutes from './routes/subtaskRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import technicianRoutes from './routes/technicianRoutes.js';
import equipmentRoutes from './routes/equipmentRoutes.js';
import toolRoutes from './routes/toolRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import settingRoutes from './routes/settingRoutes.js';
import landingContentRoutes from './routes/landingContentRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import userRoutes from './routes/userRoutes.js';

import { syncUser } from './controllers/userController.js';

const app = express();
const port = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Temporary Authentication Bypass Middleware (For Development Only)
app.use((req, res, next) => {
  // Simulate an authenticated user (replace with a real user ID from your database if needed)
  req.auth = {
    userId: 'user_2cS5UzdbRFHlL7v959jWEpDq1rU', // Replace this with a user ID from your Clerk dashboard for consistent testing
    sessionId: 'your_session_id', // If needed for consistency, add a placeholder session ID
    getToken: () => Promise.resolve('your_session_token'), // If needed, add a placeholder session token
    // ... (Add any other properties that your protected routes might need)
  };
  next();
});

// Mount routes at specific paths
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/subtasks', subtaskRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/technicians', technicianRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/tools', toolRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/settings', settingRoutes);
app.use('/api/landing-content', landingContentRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/users', userRoutes);

// Use the body-parser middleware to parse raw request body
app.use(bodyParser.raw({ type: 'application/json' }));

// Webhook secret and headers
const whSecret = process.env.CLERK_WEBHOOK_SECRET;

// Handle Clerk webhooks
app.post('/api/webhooks', async (req, res) => {
    if (!whSecret) {
        console.log('CLERK_WEBHOOK_SECRET not set.');
        return res.status(500).json({ error: 'Server configuration error' });
      }
      
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(whSecret);
    let evt;

    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        console.error('Webhook verification failed:', err.message);
        return res.status(400).json({ error: 'Webhook verification failed' });
    }

    // Handle the event
    const eventType = evt.type;
    if (eventType === 'user.created' || eventType === 'user.updated') {
        const { id } = evt.data;
        try {
            await syncUser({ body: evt });
            console.log(`User ${id} synced successfully.`);
            res.status(200).json({ message: 'User synced successfully' });
        } catch (error) {
            console.error(`Error syncing user ${id}:`, error);
            res.status(500).json({ error: 'Failed to sync user' });
        }
    } else {
        res.status(200).json({ message: 'Webhook received' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal server error' });
});

// Default route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello from Projectiva Backend!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Projectiva backend listening at http://localhost:${port}`);
});