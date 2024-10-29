# upNext - To-Do List App

upNext is a simple and efficient To-Do list application that helps you organize and manage tasks effectively. Built with **React** and **Tailwind CSS** on the frontend, it enables users to add, edit, delete, and mark tasks as completed while maintaining a smooth, intuitive interface. All tasks are stored locally in the browser's storage, making it lightweight and fast.

## Features

- **Add New Task**: Easily add new items to your To-Do list.
- **Edit Task**: Modify tasks directly in the app without hassle.
- **Delete Task**: Remove unwanted tasks with a confirmation prompt.
- **Mark as Completed**: Mark tasks as completed without removing them from the list.
- **Organized Task List**:
  - **Open Tasks** are listed at the top, arranged from oldest to newest.
  - **Completed Tasks** are displayed at the bottom in the order they were completed.
- **Local Storage**: Keeps your tasks saved across browser sessions without any database requirements.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Data Persistence**: Browser's Local Storage

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/tariqtomar/TodoApp.git
    cd TodoApp
    ```

2. **Install Dependencies**:
    Make sure you have Node.js installed. Then, install the necessary dependencies:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm run dev
    ```

4. **Access the App**:
    Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Code Overview

### Components

1. **App.jsx**: Main component handling the state and logic for the To-Do list.
2. **Navbar.jsx**: Renders the top navigation bar.

### Key Functions

- **handleAdd**: Adds a new task to the list.
- **handleEdit**: Allows the user to edit a task by repopulating the input field.
- **handleDelete**: Confirms with the user before deleting a task.
- **handleCheckbox**: Marks a task as completed or reopens it.
- **toggleFinished**: Toggles the visibility of completed tasks.

### Data Management

Tasks are stored in the browser's **local storage**. The `saveToLS` function ensures that the latest tasks list is saved after every operation. This helps maintain the app state even after page refreshes.

