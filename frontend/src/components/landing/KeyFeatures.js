import React from "react";
import "./KeyFeatures.css";

function KeyFeatures() {
    const features = [
        {
            icon: '', // Add icon here
            title: 'Project Management',
            description: 'Organize and track your projects effortlessly with an intuitive dashboard and real-time updates.'
        },
        {
            icon: '', // Add icon here
            title: 'Task Management',
            description: 'Create, assign, and track tasks within projects with various status labels (To Do, In Progress, Done).'
        },
        {
            icon: '', // Add icon here
            title: 'Time Tracking',
            description: 'Track the time spent on each project or task, providing insights into efficiency and productivity.'
        },
        {
            icon: '', // Add icon here
            title: 'Team Collaboration',
            description: 'Enable seamless communication within teams with comments, file sharing, and notifications.'
        }
        // {
        //     icon: '', // Add icon here
        //     title: 'File Sharing',
        //     description: 'Upload and share files within projects, ensuring all team members have access to the necessary resources.'
        // },
        // {
        //     icon: '', // Add icon here
        //     title: 'Calendar Integration',
        //     description: 'Sync project deadlines and task due dates with your calendar to stay on top of your schedule.'
        // }
    ];

    return (
        <section className="key-features">
            <h2>KeyFeatures</h2>
            <div className="feature-grid">
                {features.map((feature) => (
                    <div className="feature" key={feature.title}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default KeyFeatures;