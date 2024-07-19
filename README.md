React Notes App
A simple notes app built with React, Firebase, and MongoDB.

Project Overview
The React Notes App allows users to create, edit, and delete notes. It provides a straightforward interface for managing personal notes.
Installation and Setup
Prerequisites:
Node.js and npm should be installed on your machine.
You’ll need a Firebase project with Firestore enabled. Set up your Firebase project and obtain the configuration details (API keys, etc.).
Clone the Repository:
git clone https://github.com/BhavyaPoornima/react-notes-app.git
cd react-notes-app
Install Dependencies:
npm install

Configure Firebase:
Create a .env file in the root directory.
Add your Firebase configuration details:
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
Start the Development Server:
npm start

Open your browser and navigate to http://localhost:3000.
Usage
Create a new note by clicking the “New Note” button.
Edit existing notes by clicking on them.
Delete notes using the delete button.
Technologies Used
React
Firebase (Authentication and Firestore)

Screenshots
!App Screenshot

Contributing
Contributions are welcome! Please follow the contribution guidelines.

License
This project is licensed under the MIT License. See the LICENSE file for details.
