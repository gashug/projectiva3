import DashboardService from '../services/dashboardService.js';

export const getDashboardData = async (req, res) => {
  try {
    // Assuming you have the authenticated user's information in req.user
    // (e.g., added by Clerk's authentication middleware)
    const user = req.auth;

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const dashboardData = await DashboardService.getDashboardData(user);
    res.status(200).json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};