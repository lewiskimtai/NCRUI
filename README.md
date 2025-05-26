# NATIONAL CARBON REGISTRY USER INTERFACE 🚀

---
## Table of Contents

-   [About the Project](#about-the-project)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the Application](#running-the-application)
-   [File Structure](#file-structure)

---

## About the Project

**A dynamic User Interface for managing National Carbon Registry Projects.**

---

## Features

-   **App Bar:** Fixed at the top of the UI. Search, Notifications, Profile & Settings.
-   **Side Bar:** Fixed at the left of the UI. Navigation across different screens/pages.
-   **Statistics:** Summarises projects' performance.
-   **Projects Overview:** Bar Graphs visualizing monthly Approved, Pending & Rejected projects for selected sectors across the year.
-   **User Insights:**  Pie Chart visualizing Admins & Proponents.
-   **Active Projects:** Map of Kenya showing regions with active projects.

---

## Technologies Used

List the major frameworks/libraries used.

* [React]
* [MaterialUI]
* [React-Charts]
* [ReCharts]

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

* npm
    ```sh
    npm install npm@latest -g
    ```
* Node.js (LTS recommended)
    ```sh
    # Check if Node.js is installed
    node -v
    ```

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/lewiskimtai/NCRUI.git](https://github.com/lewiskimtai/NCRUI.git)
    ```
2.  **Navigate into the project directory**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```

### Running the Application

4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

5.  **Open your browser:**
    The application should automatically open in your default browser at `http://localhost:3000`. If not, navigate to this URL manually.

---

## File Structure

The project follows a standard React application structure, organized for clarity and maintainability.


```bash
NCRUI/
├── public/
├── src/
│   ├── assets/           # Static assets like images, fonts, icons
│   │   ├── images/
│   │   └── fonts/
│   ├── components/       # Reusable UI components (e.g., Dashboard)
│   │   ├── dashboard_components/           # Reusable UI components for the Dashboard 
│   │   │   ├─── active_projects/           # Reusable UI components for Active Projects
│   │   │   │    └── active_projects.jsx    # Reusable Card component for Active Projects
│   │   │   ├─── projects_overview/         # Reusable UI components for Projects Overview
│   │   │   │    ├── Barchart.jsx           # Reusable Barchart component
│   │   │   │    ├── Selector.jsx           # Reusable Selector component
│   │   │   │    └── Projectsoverview.jsx   # Reusable compiled Projects Overview component for dashboard.
│   │   │   ├─── statistics/                # Reusable UI components for Statistics
│   │   │   │    └── Statistics.jsx         # Reusable Card component for Statistics
│   │   │   ├─── user_insights/             # Reusable UI components for User Insights
│   │   │   │    └── Userinsights.jsx       # Reusable Card component for User Insights
│   │   ├── shared_components/              # Reusable shared UI components
│   │   │   ├─── Navbar.jsx                 # Reusable App Bar
│   │   │   └─── Sidebar.jsx                # Reusable Side Bar
│   ├── scenes/            # Top-level components representing distinct views/pages (e.g., Dashboard, Projects)
│   │   ├── authorizedprojects/
│   │   │   └── index.js
│   │   ├── dashboard/
│   │   │   └── index.js
│   │   └── layout/
│   │       └── index.js  # Root based components that constantly apear in all screens (e.g., App Bar, Side Bar)
│   ├── App.js            # Main application component, often handles routing
│   ├── index.js          # Entry point of the React application, renders App component
│   └── index.css         # Global styles
├── .gitignore            # Specifies intentionally untracked files to ignore
├── package.json          # Project metadata and dependencies
├── README.md             # This file

---