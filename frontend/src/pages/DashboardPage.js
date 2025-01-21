import React, { useState, useEffect } from "react";
import axios from "axios";
// import ProjectOverview from "../components/dashboard/ProjectOverview";
// import TaskSummary from "../components/dashboard/TaskSummary";
// import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";

function DashboardPage() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("/api/dashboard")
            .then((response) => {
                setDashboardData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching dashboard data:', error);
                setError('Failed to load dashboard data.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator
    }

    if (error) {
        return <div>{error}</div>; // Show an error message
    }

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-widgets">
            {/* Placeholder for widgets */}
            {/* <ProjectOverview data={dashboardData?.projectOverview} />
            <TaskSummary data={dashboardData?.taskSummary} />
            <UpcomingDeadlines data={dashboardData?.upcomingDeadlines} /> */}
            {/* Add other widgets here */}
            </div>
        </div>
    );
}

export default DashboardPage;