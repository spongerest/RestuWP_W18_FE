# React Application - Task Management

This React application provides a user interface for task management. It includes multiple routes for login, home, task details, and task creation.

## Routes

- `/` - Login Page
  - Description: Login to the application.
- `/home` - Home Page
  - Description: Main landing page after logging in.
- `/homeadmin` - Admin Home Page
  - Description: Home page for admin users.
- `/task/:id` - Task Details
  - Description: View details of a specific task by its ID.
- `/task/create` - Task Creation
  - Description: Create a new task.

## Components

- `PrivateRoute` - A custom component for handling private routes, ensuring that users must be authenticated to access specific pages.

## Usage

1. Clone or download this React application project.
2. Install the required dependencies by running `npm install` or `yarn install`.
3. Start the application with `npm start` or `yarn start`.
4. Navigate to the provided routes to access the respective features.

## Overview

The Axios instance is configured with the following settings:

- Base URL: http://localhost:5000
- WithCredentials: true

It allows making API requests to your backend server, assuming it's running locally at the specified base URL.

## Authors

- Restu Windri P