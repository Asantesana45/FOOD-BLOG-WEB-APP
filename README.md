📌 Table of Contents
.Features

.Tech Stack

.Installation

.Environment Variables

.Running the Application

.License

✨ Features
🔐 User Authentication: Secure login and registration using JWT.

📖 Recipe Management: Create, read, update, and delete recipes.

🖼️ Image Uploads: Upload and display recipe images.


📱 Responsive Design: Mobile-friendly interface for all devices.

🧑‍🍳 User Profiles: View and manage personal recipes.

📝 Rich Text Editor: Format recipe instructions with ease.​
GitHub
GitHub

🛠️ Tech Stack
Frontend
React with Vite for fast development.

React Router for client-side routing.

Axios for HTTP requests.

CSS Modules for scoped styling.​
GitHub

Backend
Node.js with Express for server-side logic.

MongoDB with Mongoose for database management.

JWT for authentication.

Multer for handling file uploads.​

⚙️ Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/Asantesana45/FOOD-BLOG-WEB-APP.git
cd FOOD-BLOG-WEB-APP
Install dependencies for both frontend and backend:

bash
Copy
Edit
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
🔐 Environment Variables
Create a .env file in the server directory and add the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret_key with a secure secret key.

🚀 Running the Application
Start the backend server:

bash
Copy
Edit
cd server
npm run dev
The backend server will start on http://localhost:5000.

Start the frontend development server:

bash
Copy
Edit
cd ../client
npm run dev
The frontend will be accessible at http://localhost:5173.

📸 Screenshots
Add screenshots of your application here to showcase its features and UI.

📄 License
This project is licensed under the MIT License.
