import express from 'express'; // Import express
import 'dotenv/config'; // Load environment variables
import cors from 'cors'; // Import cors

// Import routes
import projectRoutes from './routes/projectRoutes.js'; // Import projectRoutes
import taskRoutes from '.routes/taskRoutes.js';
import subtaskRoutes from '.routes/subtaskRoutes.js';
import clientRoutes from './routes/clientRoutes.js'; // Import clientRoutes
import technicianRoutes from './routes/technicianRoutes.js'; // Import technicianRoutes
import equipmentRoutes from './routes/equipmentRoutes.js'; // Import equipmentRoutes
import toolRoutes from './routes/toolRoutes.js'; // Import toolRoutes
import notificationRoutes from './routes/notificationRoutes.js'; // Import notificationRoutes
import landingContentRoutes from './routes/landingContentRoutes.js'; // Import landingContentRoutes
import aboutRoutes from './routes/aboutRoutes.js'; // Import aboutRoutes
import analyticsRoutes from './routes/analyticsRoutes.js'; // Import analyticsRoutes
import settingRoutes from './routes/settingRoutes.js'; // Import settingRoutes
import userRoutes from './routes/userRoutes.js'; // Import userRoutes
import dashboardRoutes from './routes/dashboardRoutes.js'; // Import dashboardRoutes

// import {
//     clerkMiddleware,
//     ClerkRequireAuth,
//     requireAuth,
// } from '@clerk/express';


const app = express();
const port = process.env.PORT || 5002; // Default port is 5002

// Apply Clerk middleware
// app.use(authMiddleware); // Use the authMiddleware

// Use requireAuth middleware for protected routes:
// app.use('/protected', requireAuth()); // Example of protecting a route

// Or, use ClerkExpressRequireAuth for stricter control (no redirect, only errors):
// app.use('/protected', ClerkExpressRequireAuth()); // Example of protecting a route

// Example of error handling middleware (if ClerkExpressRequireAuth or the legacy RequireAuth approach is used):
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(401).send('Unauthenticated');
// });

// Temporary: Bypass Authentication(for development purposes)
app.use((req, res, next) => {
    req.auth = {
        userId: 'user_2rprZaF2twvsb5V0sQVSx90u7pP'
    };
    next();
});

app.get('/', (req, res) => {
    res.send('Hello from Projectiva Backend!');
});

// Example of a route that would normally be protected
app.get('/protected', (req, res) => {
    // Now you can access req.auth.userId even without Clerk integration
    res.send(
      `This route would be protected. You are simulating user: ${req.auth.userId}`
    );
  });

// Example of a protected route
// app.get('/protected', (req, res) => {
//     // If the middleware allows the request to proceed, user is authenticated
//     res.send('This is a protected route! You are authenticated.');
// });

// Mount routes at specified endpoints
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
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.listen(port, () => {
    console.log(`Projectiva backend listening at http://localhost:${port}`);
});

