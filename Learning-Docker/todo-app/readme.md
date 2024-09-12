# MERN To-Do Application

![To-Do List GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG5yYzFtNzUzdDRkbDFqbTI3ZTFpbDhjYm1oZDUzZXhpZDgwNjA4OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/q7UpJegIZjsk0/giphy.gif) 

This project is a full-stack To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create, view, update, and delete to-do items. The project is containerized using Docker and managed with Docker Compose for easy deployment.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, view, update, and delete to-do items.
- Backend API built with Express and MongoDB.
- Frontend built with React.
- Fully containerized with Docker for easy setup and deployment.

## Project Structure
todo-app ├── backend │ ├── routes │ ├── models │ ├── server.js │ └── Dockerfile ├── frontend │ ├── src │ ├── public │ └── Dockerfile ├── docker-compose.yml └── README.md


## Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/mern-todo-app.git
    cd mern-todo-app
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

## Environment Variables

Create a `.env` file in the `backend` directory with the following environment variables:

  ```bash
    MONGODB_URI=mongodb://mongodb:27017/todos PORT=5000
   ```
## Running the Application

1. Build and start the containers:

    ```bash
    docker-compose up --build
    ```

    This command will build the images for the frontend, backend, and MongoDB services, then start the containers.

2. Access the Application

   - Frontend: Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
   - Backend API: You can access the backend API at [http://localhost:5000](http://localhost:5000).

3. Stopping the Application

    To stop the application, press Ctrl + C in the terminal and run:

    ```bash
    docker-compose down
    ```

## API Endpoints

The backend API provides the following endpoints:

- `GET /todos`: Retrieve all to-do items.
- `POST /todos`: Create a new to-do item.
- `PUT /todos/:id`: Update a to-do item by ID.
- `DELETE /todos/:id`: Delete a to-do item by ID.

## Troubleshooting

- **Port Issues**: Make sure ports 3000 and 5000 are not used by other applications.
- **CORS Issues**: If CORS errors occur, ensure the backend is correctly configured to allow requests from the frontend.
- **Database Connection Issues**: Ensure the MongoDB URI is correctly set in the `.env` file, and the `mongodb` container is running without errors.

## Contributing

1. Fork the project.
2. Create your feature branch:

    ```bash
    git checkout -b feature/AmazingFeature
    ```

3. Commit your changes:

    ```bash
    git commit -m 'Add some AmazingFeature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/AmazingFeature
    ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.




