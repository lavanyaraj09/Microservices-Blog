# Microservices Blog Website

This is a microservices-based blog website application that allows users to create posts and add comments. The application is divided into several microservices, each responsible for specific functionality.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Services](#services)
- [What the Website Does](#what-the-website-does)
- [Technology Stack](#technology-stack)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
  - [Prerequisites](#prerequisites)
  - [Installation and Usage](#installation-and-usage)

## Folder Structure

The application consists of the following folders:

1. **clients**: Contains the frontend code for the blog website.

   - `public`: Public assets like HTML, CSS, and images.
   - `src`: React components and application logic.

2. **Comments**: Handles comments and moderation of comments.

3. **Event Bus**: Acts as an event bus to facilitate communication between microservices.

4. **Moderation**: Moderates comments and determines their status (approved or rejected).

5. **Posts**: Manages posts creation and retrieval.

6. **Query**: Queries and aggregates data from the microservices.

## Services

### 1. Clients

The `clients` folder contains the frontend code for the blog website, built using React. It includes components for creating posts, displaying posts, and adding comments.

### 2. Comments

- **index.js**: Express server handling comments.
- **POST /posts/:id/comments**: Endpoint to create comments on a post.
- **GET /posts/:id/comments**: Endpoint to retrieve comments for a post.
- **POST /events**: Handles events related to comment moderation.

### 3. Event Bus

- **index.js**: Express server acting as an event bus.
- **POST /events**: Receives and distributes events to other microservices.
- **GET /events**: Retrieves a list of events.

### 4. Moderation

- **index.js**: Express server for comment moderation.
- **POST /events**: Listens for events and moderates comments based on content.

### 5. Posts

- **index.js**: Express server handling posts.
- **POST /posts**: Endpoint to create new posts.
- **GET /posts**: Endpoint to retrieve all posts.
- **POST /events**: Handles events related to post creation.

### 6. Query

- **index.js**: Express server that queries and aggregates data from other microservices.
- **GET /posts**: Retrieves a list of all posts.

## What the Website Does

This microservices-based blog website allows users to:

- Create new posts.
- Add comments to posts.
- Moderate comments for inappropriate content.
- Query and retrieve a list of all posts.

## Technology Stack

The technology stack used in this application includes:

- **Frontend**:
  - React for building the user interface.
  - Bootstrap for styling.
  - JavaScript and Axios for making API requests.

- **Microservices**:
  - Node.js for building the microservices.
  - Express.js for creating APIs.
  - Axios for making HTTP requests between microservices.

- **Event Bus**:
  - Node.js and Express.js for handling events.

- **Database** (not included in this example):
  - MongoDB

## Setting Up the Development Environment

Follow these steps to set up your development environment and get started with the project:

### Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js**: The JavaScript runtime for running the microservices. Download it from [Node.js website](https://nodejs.org/).

2. **npm**: Package managers for installing project dependencies. npm is included with Node.js, or you can use yarn for faster package management.

3. **Docker**: To containerize and deploy microservices easily. You can download Docker from [Docker website](https://www.docker.com/get-started).

### Installation and usage

1. **Clone the Repository**:

   ```bash
   git clone [https://github.com/Chitra2409/Microservices-Project.git]
   cd <repository-directory>

 2. **Start the microservices**: In each microservice's directory, start the development server:
 npm start

 3. **Run the frontend**: In the clients directory, start the React application:
npm start

 4. **Access the website**: Open your web browser and navigate to the URL where the frontend is running (usually http://localhost:3000).

Now, your development environment is set up, and you can start working on the project!



**Note** : This project is almost completed.


