# Full-Stack Todo Application

## Overview

This is a full-stack Todo application built using modern web technologies. The backend is powered by **Express** 🚀 and **MongoDB** 🗄️, while the frontend is built with **React** ⚛️ and **Vite** ⚡. The application allows users to sign up, log in, and manage their todo lists 📝.

## Technologies Used

### Backend

- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing user data and todos.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file.
- **cors**: A middleware to enable Cross-Origin Resource Sharing.
- **express-session**: A middleware to handle sessions.
- **connect-mongo**: A MongoDB session store for Express.
- **bcryptjs**: A library to hash passwords for secure storage.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **React Router**: A library for routing in React applications.
- **axios**: A promise-based HTTP client for making API requests.
- **react-icons**: A library for including popular icons in React projects.

## Project Structure

```
my-project/
├── backend/ 📂
│ ├── config/ ⚙️
│ │ └── db.js 🗄️
│ ├── controllers/ 🎮
│ │ └── todoController.js ✅
│ │ └── userController.js 👤
│ ├── models/ 🗃️
│ │ └── todoModel.js 📝
│ │ └── userModel.js 👥
│ ├── routes/ 🛤️
│ │ └── userRoutes.js 🚶
│ │ └── todoRoutes.js 📝
│ ├── app.js 🚀
│ ├── package.json 📦
│ ├── Procfile 📜
│ └── .env 🌐
├── frontend/ 🌐
│ ├── dist/ 📦
│ │ ├── assets/ 🗂️
│ │ ├── image/ 🖼️
│ │ │ └── download.jpg 📷
│ │ ├── index.html 📄
│ │ └── vite.svg 🖼️
│ ├── node_modules/ 📦
│ ├── public/ 🌍
│ │ └── images/ 🖼️
│ │ └── download.jpg 📷
│ ├── src/ 💻
│ │ ├── assets/ 🗂️
│ │ ├── components/ 🧩
│ │ │ └── signUp.jsx 📝
│ │ │ └── login.jsx 📝
│ │ │ └── protectedRoute.jsx 🛡️
│ │ │ └── profile.jsx 👤
│ │ │ └── home.jsx 🏠
│ │ │ └── signUp.css 🎨
│ │ │ └── login.css 🎨
│ │ │ └── profile.css 🎨
│ │ │ └── home.css 🎨
│ │ │ └── popUp.css 🎨
│ │ │ └── popUp.jsx 📝
│ │ ├── context/ 🌐
│ │ │ └── authContext.jsx 🔒
│ │ ├── service/ 🛠️
│ │ │ └── authService.jsx 🔒
│ │ │ └── todoService.jsx ✅
│ │ ├── App.css 🎨
│ │ ├── App.jsx 📝
│ │ ├── index.css 🎨
│ │ └── main.jsx 📝
│ ├── .gitignore 🚫
│ ├── eslint.config.js 🛠️
│ ├── index.html 📄
│ ├── package-lock.json 📦
│ ├── package.json 📦
│ ├── README.md 📖
│ └── vite.config.js ⚙️
```

## Deployment

### Database

- **MongoDB Atlas**: The database is hosted on MongoDB Atlas, a cloud database service for MongoDB. It provides a fully managed, global cloud database with built-in automation for resource and workload optimization.

### Backend

- **Render**: The backend is deployed on Render, a cloud platform for deploying web applications and APIs.

### Frontend

- **Vercel**: The frontend is deployed on Vercel, a platform for frontend frameworks and static sites.

## How It Works

1. **User Authentication**: Users can sign up and log in to the application. Authentication is handled using sessions stored in MongoDB.
2. **Todo Management**: Authenticated users can create, read, update, and delete their todos.
3. **Protected Routes**: Certain routes are protected and can only be accessed by authenticated users.

## Features

- **User Authentication**: Secure sign-up and login functionality with session management.
- **Todo Management**: Create, read, update, and delete todos.
- **Responsive Design**: Mobile-friendly user interface.
- **Protected Routes**: Access control for authenticated users.
- **Real-time Updates**: Instant updates to the todo list.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/viren-kevat/first_fullStack.git
   cd your-repository-name/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your environment variables:

   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://your-mongodb-uri
   SESSION_SECRET=your-session-secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` for the backend and `http://localhost:5173` for the frontend.
2. Sign up for a new account or log in with an existing account.
3. Manage your todos by adding, updating, and deleting them.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Contact

If you have any questions or feedback, feel free to contact me at [viren0210@gmail.com].
