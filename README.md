# Projectiva

## Efficient Project Management, Simplified

**Projectiva** is a modern, intuitive, and powerful project management application designed to streamline your team's workflow and boost productivity. With Projectiva, you can effortlessly manage projects, track tasks, collaborate with team members, and gain valuable insights through comprehensive analytics – all in one centralized platform.

## Current Features (MVP)

This MVP version of Projectiva provides the following core functionalities:

*   **User Authentication (via Clerk):**
    *   Secure user sign-up and sign-in using Clerk's prebuilt components.
    *   User profile management through Clerk's `UserButton` component.

*   **Project Management:**
    *   **Project Overview Page:** View a list of all projects with key details.
        *   Filter projects by status, department, and project type.
        *   Search for projects by name, client, or location.
        *   Sort projects by various criteria.
    *   **Project Details Page:** Access detailed information about each project.
        *   View project overview, including type, client, location, start/end dates, and status.
        *   Visualize project stages and progress.
        *   Manage tasks associated with the project.
        *   Upload and manage project-related documents.
        *   View activity log related to the project.
        *   Add and view comments for team collaboration.
    *   **Create New Project:** (Future Implementation - Quick Action)
        *   A modal form will allow users to create new projects with relevant details.

*   **Task Management:**
    *   **Task Overview Page:** View a list of all tasks across projects.
        *   Filter tasks by status, due date, and assigned technician using intuitive dropdowns.
        *   Sort tasks by priority, due date, or creation date.
        *   Click on a task card to open a modal with more task details.
    *   **Create New Task:** (Future Implementation - Quick Action)
        *   A modal form allows users to create new tasks.

*   **Resource Management:**
    *   **Technician Management Tab:** (Future implementation - Placeholder)
    *   **Equipment Inventory Tab:**
        *   View a comprehensive list of all equipment.
        *   Search for equipment using various criteria.
        *   Filter equipment by project, availability, and condition.
        *   Edit equipment details.
        *   Assign equipment to projects.
    *   **Tools Inventory Tab:**
        *   View and manage all tools in a tabular format.
        *   Search and filter tools based on project, availability, and other attributes.
        *   Edit tool details (Future Implementation).
        *   Assign tools to projects or technicians (Future Implementation).

*   **Analytics:**
    *   **Analytics Dashboard:** Get an overview of key project and task metrics.
        *   **Project Overview Chart:** A pie chart visualizing the distribution of projects by status (Completed, In Progress, Pending).
        *   **Task Progress Chart:** A bar chart tracking overall task progress (All Tasks, Overdue Tasks, Completed Tasks).
        *   **Technician Performance Chart:** A bar chart displaying the number of tasks completed by each technician. (Data currently static)
        *   **Inventory Utilization Chart:** A bar chart showing the utilization of equipment. (Data currently static)
    *   **Project Analytics:** View project completion rates through a bar chart.
    *   **Top Performing Projects:** View a list of top-performing projects.
    *   **Detailed Reports:** (Placeholder) Section for detailed reports tables.

*   **Dashboard:**
    *   **Personalized Welcome Banner:** Greets the user upon logging in.
    *   **Project Overview Widget:** Displays a summary of project statuses.
    *   **Task Summary Widget:** Provides a quick overview of all tasks, overdue tasks, and completed tasks. Filter tasks by status.
    *   **Upcoming Deadlines Widget:** Shows a list of upcoming project and task deadlines, sortable by name and due date.
    *   **Analytics Section Widget:** Displays charts related to project completion rates, and lists top-performing projects.
    *   **Resource Management Widget:** Displays summary statistics for technicians, equipment, and tools (data currently static).
    *   **Quick Actions:** (Future Implementation) Button to trigger a modal with options to create a new project, assign a task, or upload a document.
    *   **Notifications:** (Future Implementation) Button to display a dropdown with notifications.

*   **User Interface:**
    *   **Responsive Design:** Adapts to different screen sizes (desktop, tablet, mobile).
    *   **Modern and Clean UI:** Uses a visually appealing color palette and clear typography.
    *   **Collapsible Sidebar:** Provides navigation to different sections of the application with an option to collapse for an icon-only view.
    *   **Dynamic Navbar:** Displays the current page title and user information.
    *   **Interactive Charts:** Recharts library used for charts on the Analytics Dashboard.

## Technology Stack

*   **Frontend:**
    *   React
    *   Recharts (for charts)
    *   Font Awesome (for icons)
    *   `react-router-dom` (for routing)
    *   `axios` (for API requests)
    *   CSS Modules (for styling)
*   **Backend:**
    *   Node.js
    *   Express.js
    *   PostgreSQL (with `pg` library)
    *   `node-pg-migrate` (for database migrations)
    *   Clerk (for authentication)
*   **Other Tools:**
    *   Vite (frontend build tool)
    *   ESLint (for code linting)
    *   npm (package manager)

## Getting Started

1.  **Prerequisites:**
    *   Node.js (version 14 or higher recommended)
    *   npm (Node Package Manager)
    *   PostgreSQL database

2.  **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

3.  **Backend Setup:**
    *   Navigate to the `backend` directory: `cd backend`
    *   Install dependencies: `npm install`
    *   Create a `.env` file and add your database connection string:
        ```
        DATABASE_URL=postgres://user:password@host:port/database
        ```
    *   Run database migrations: `npm run migrate:up`
    *   Start the backend server: `node server.js`

4.  **Frontend Setup:**
    *   Navigate to the `frontend` directory: `cd ../frontend`
    *   Install dependencies: `npm install`
    *   Create a `.env` file and add your Clerk Publishable Key:
        ```
        VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_CLERK_PUBLISHABLE_KEY
        ```
    *   Start the frontend development server: `npm start`

5.  **Access the Application:**
    *   Open your web browser and go to `http://localhost:3000` (or the port specified by the development server).

## Future Enhancements

*   **Complete Charts:** Implement dynamic charts using fetched data for all relevant widgets.
*   **Complete Quick Actions:** Add functionality to create projects, assign tasks, and upload documents.
*   **Notifications:** Fetch and display real-time notifications.
*   **User Roles and Permissions:** Implement role-based access control.
*   **Technician Dashboard:** Create a dedicated dashboard for technicians.
*   **Calendar Integration:** Add a calendar view for tasks and project deadlines.
*   **Drag-and-Drop:** Implement drag-and-drop functionality for task management.
*   **Improved Error Handling:** Display user-friendly error messages.
*   **Search Functionality:** Allow users to search for projects and tasks globally.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to discuss potential improvements or features.

## License

This project is licensed under the [MIT License](LICENSE).