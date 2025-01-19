import UserService from '../services/userService.js';
// Placeholder for syncing with Clerk on user creation
export const syncUser = async (req, res) => {
    try {
        // Extract user data from Clerk webhook
        const { id: clerkUserId } = req.body.data;

        // Create or update user in your database
        let user = await UserService.getUserByClerkId(clerkUserId);
        if (!user) {
            user = await UserService.createUser(clerkUserId);
        }

        res.status(200).json({ message: 'User synced successfully', user });
    } catch (error) {
        console.error('Error syncing user:', error);
        res.status(500).json({ message: error.message });
    }
};
// Example controller method to get user by Clerk ID
export const getUserByClerkId = async (req, res) => {
    try {
      const { clerkUserId } = req.params; // Get the Clerk User ID from the request parameters
      const user = await UserService.getUserByClerkId(clerkUserId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user by Clerk ID:', error);
      res.status(500).json({ message: error.message });
    }
  };

  export const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };