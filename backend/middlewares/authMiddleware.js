const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const authMiddleware = ClerkExpressRequireAuth({
    // You can add options here if needed, for example:
    // jwtKey: process.env.CLERK_JWT_KEY,
});

module.exports = authMiddleware;