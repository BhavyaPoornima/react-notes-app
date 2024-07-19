REACT NOTES APP
A simple and intuitive notes app built with React, Firebase, and MongoDB.
PROJECT OVERVIEW
The React Notes App allows users to create, edit, and delete notes, providing a straightforward interface for managing personal notes.
INSTALLATION AND SETUP
PREREQUISITES 
Node.js and npm should be installed on your machine.
You’ll need a Firebase project with Firestore enabled. Set up your Firebase project and obtain the configuration details (API keys, etc.).
STEPS TO SETUP
1. CLONE THE REPOISITORY
 git clone https://github.com/BhavyaPoornima/react-notes-app.git
cd react-notes-app
2. INSTALL DEPENDENCIES
npm install
3. CONFIGURE FIREBASE
4. Create a .env file in the root directory.
Add your Firebase configuration details:
env

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
4. START THE DEVELOPMENT SERVER
npm start
USAGE
Create a New Note: Click the “New Note” button.
Edit Existing Notes: Click on a note to edit it.
Delete Notes: Use the delete button to remove a note
TECHNOLOGIES USED
React
Firebase (Authentication and Firestore)
MongoDB


