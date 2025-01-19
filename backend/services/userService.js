import User from '../models/User.js';

class UserService {
  static async createUser(clerkUserId) {
    try {
      // Add any necessary business logic/validation here
      // ...
      return await User.create(clerkUserId);
    } catch (error) {
      throw new Error('Failed to create user.');
    }
  }

  static async getUserByClerkId(clerkUserId) {
    try {
      const user = await User.findByClerkUserId(clerkUserId);
      if (!user) {
        throw new Error('User not found.');
      }
      return user;
    } catch (error) {
      throw new Error('Failed to fetch user.');
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found.');
      }
      return user;
    } catch (error) {
      throw new Error('Failed to fetch user.');
    }
  }

  // Add other methods as needed for your application (e.g., updating user profile data)
}

export default UserService;