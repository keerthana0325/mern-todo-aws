
# MERN To-Do App | AWS EC2 Deployment

A simple MERN stack To-Do application deployed manually on an AWS EC2 Ubuntu instance as a cloud deployment practice project.

## Tech Stack

- **Frontend:** React.js, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Cloud:** AWS EC2 (Ubuntu)
- **Remote Access:** PuTTY (SSH)

## Architecture

- React frontend running on port `3000`
- Express backend running on port `5000`
- MongoDB Atlas used for data storage
- Frontend communicates with the backend through REST API requests using Axios

## Features

- Fetch and display tasks
- Add new tasks
- Store tasks in MongoDB
- Basic REST API integration

## Deployment Overview

The application was deployed manually on an AWS EC2 Ubuntu instance.

1. Launched an EC2 instance.
2. Connected to the instance remotely using PuTTY.
3. Updated Ubuntu packages and installed Node.js/npm.
4. Created the Express backend and installed dependencies.
5. Configured MongoDB Atlas connectivity using environment variables.
6. Started the backend server on port `5000`.
7. Created the React frontend using Create React App.
8. Installed Axios and configured frontend API requests.
9. Allowed application ports through the EC2 security group.
10. Started the frontend on port `3000` and verified the application.

## Configuration

### Backend

Create a `.env` file inside the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
```

### Frontend

Create a `.env` file inside the `client` directory:

```env
REACT_APP_API_URL=http://YOUR_EC2_PUBLIC_IP:5000
```

Do not commit environment files, credentials, or database connection strings.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Backend status |
| GET | `/tasks` | Retrieve tasks |
| POST | `/tasks` | Create a task |

## Notes

This was a hands-on deployment project focused on learning the MERN stack and deploying an application to AWS EC2.

The deployment was performed manually. It did not include Docker, CI/CD automation, HTTPS configuration, or production process management.

The repository is a cleaned-up project snapshot and may not contain all files required to run the frontend locally.

## Learning Outcomes

- Basic AWS EC2 instance setup
- Linux command-line usage
- Remote server access using SSH/PuTTY
- Node.js backend setup
- REST API integration between React and Express
- MongoDB Atlas connectivity
- Basic cloud deployment and networking concepts
