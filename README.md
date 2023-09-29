# Microservices Blog Website

This is a microservices-based blog website application that allows users to create posts and add comments. The application is divided into several microservices, each responsible for specific functionality.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Services](#services)
- [What the Website Does](#what-the-website-does)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)

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

## Getting Started

### Prerequisites

- Node.js (for running the microservices)
- npm or yarn (for package management)
- Docker (optional, for containerization)

**Note** : This project is a work in progress and still many services are yet to be included


