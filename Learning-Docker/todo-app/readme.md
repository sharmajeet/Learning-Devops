MERN To-Do Application

To-Do List GIF

This project is a full-stack To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create, view, update, and delete to-do items. The project is containerized using Docker and managed with Docker Compose for easy deployment.

Table of Contents

Features

Project Structure

Prerequisites

Installation

Environment Variables

Running the Application

API Endpoints

Troubleshooting

Contributing

License

Features

Add, view, update, and delete to-do items.

Backend API built with Express and MongoDB.

Frontend built with React.

Fully containerized with Docker for easy setup and deployment.

Project Structure

Verify

Open In Editor

Edit

Copy code

todo-app

├── backend

│   ├── routes

│   ├── models

│   ├── server.js

│   └── Dockerfile

├── frontend

│   ├── src

│   ├── public

│   └── Dockerfile

├── docker-compose.yml

└── README.md

Prerequisites

Docker installed on your machine

Docker Compose installed on your machine

Installation

1. Clone the repository:

bash

Verify

Open In Editor

Edit

Copy code

git clone https://github.com/your-username/mern-todo-app.git

cd mern-todo-app

1. Navigate to the project directory:

bash

Verify

Open In Editor

Edit

Copy code

cd todo-app

Environment Variables

Create a .env file in the backend directory with the following environment variables:

makefile

Verify

Open In Editor

Edit

Copy code

MONGODB\_URI=mongodb://mongodb:27017/todos

PORT=5000

Running the Application

1. Build and start the containers:

bash

Verify

Open In Editor

Edit

Copy code

docker-compose up --build

This command will build the images for the frontend, backend, and MongoDB services, then start the containers.

1. Access the Application

Frontend: Open your browser and navigate to http://localhost:3000.

Backend API: You can access the backend API at http://localhost:5000.

1. Stopping the Application

To stop the application, press Ctrl + C in the terminal and run:

bash

Verify

Open In Editor

Edit

Copy code

docker-compose down

API Endpoints

The backend API provides the following endpoints:

GET /todos

Retrieve all to-do items.

POST /todos

Create a new to-do item.

PUT /todos/:id

Update a to-do item by ID.

DELETE /todos/:id

Delete a to-do item by ID.

Troubleshooting

Port Issues

Make sure ports 3000 and 5000 are not used by other applications.

CORS Issues

If CORS errors occur, ensure the backend is correctly configured to allow requests from the frontend.

Database Connection Issues

Ensure the MongoDB URI is correctly set in the .env file, and the mongodb container is running without errors.

Contributing

1. Fork the project.
1. Create your feature branch:

bash

Verify

Open In Editor

Edit

Copy code

git checkout -b feature/AmazingFeature

1. Commit your changes:

bash

Verify

Open In Editor

Edit

Copy code

git commit -m 'Add some AmazingFeature'

1. Push to the branch:

bash

Verify

Open In Editor

Edit

Copy code

git push origin feature/AmazingFeature

1. Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

MIT License GIF

Save this file as README.md in your project root, and you're good to go!
