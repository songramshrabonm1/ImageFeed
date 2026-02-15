Image Upload & CRUD App

A full-stack React + Node.js application for uploading, viewing, editing, and deleting images with MongoDB as the database and ImageKit for image storage.

<br>
<br>

## Features
- Upload images with title and description

- View all posts in a feed

- Edit post details and update image

- Delete posts with confirmation modal

- Fully functional CRUD with MongoDB

- Image storage using ImageKit

- RESTful API with Express.js


<br>
<br>

## Tech Stack

- Frontend: React, React Router, Tailwind CSS, DaisyUI

- Backend: Node.js, Express.js

- Database: MongoDB + Mongoose

- Image Upload: ImageKit

- Others: Axios, Multer, Cookie-parser, CORS

<br>
<br>

## Project Structure

```pgsql

root
├─ backend
│  ├─ src
│  │  ├─ config
│  │  │  └─ db.js          # MongoDB connection
│  │  ├─ controllers
│  │  │  └─ ImageControllers.controllers.js
│  │  ├─ models
│  │  │  └─ Image.models.js
│  │  ├─ routes
│  │  │  └─ porstroutes.routes.js
│  │  ├─ services
│  │  │  └─ imageKit.services.js
│  │  └─ app.js
│  └─ server.js
└─ frontend
   ├─ src
   │  ├─ pages
   │  │  ├─ CreatePost.jsx
   │  │  ├─ Edited.jsx
   │  │  └─ Feed.jsx
   │  ├─ App.jsx
   │  └─ index.jsx
   └─ package.json

```

## Getting Started 

<br>

### Backend Setup 

1. Navigate to the backend folder:

```js
cd backend
```

2. Initialize Node.js project:

```js
npm init -y
```
3. Install dependencies:

```js
npm i express mongoose jsonwebtoken cors cookie-parser multer dotenv @imagekit/nodejs
```
4. Install dev dependency:

```js
npm i --save-dev nodemon
```

5. Create .env file and add:

```js
PORT=3000
MONGOOSE_URI=<your_mongodb_uri>
ImageKit=<your_imagekit_private_key>
```

6. Create server.js:

```js
require('dotenv').config();
const app = require('./src/app'); 
const connectedDb = require('./src/config/db');

const port = process.env.PORT || 8000; 

connectedDb(); 

app.listen(port , ()=>{
    console.log(`Server running at the port - ${port}`); 
});
```

7. Run server:

```js
npx nodemon server.js
```
<br>
<br>

--- 

<br>
<br>

## Frontend Setup

1. Navigate to the frontend folder:

```js
cd frontend
```
2. Initialize Vite React project:

```js
npm create vite@latest .
```

3. Install dependencies:

```js
npm i react-router-dom axios tailwindcss daisyui
```

4. Configure Tailwind CSS and DaisyUI (as in your index.css).

5. Run frontend:

```js
npm run dev
```

<br>
<br>

## Api Endpoint 

| Method | Endpoint                             | Description                      |
| ------ | ------------------------------------ | -------------------------------- |
| GET    | `/api/imageFeed`                     | Get all images                   |
| GET    | `/api/imageFeed/GetSpecificPost/:id` | Get a single post                |
| POST   | `/api/imageFeed/createdPost`         | Upload a new image               |
| PUT    | `/api/imageFeed/UpdatePost/:id`      | Update post details and/or image |
| DELETE | `/api/imageFeed/DeletePost/:id`      | Delete a specific post           |


<br>
<br>

## Frontend Pages

- CreatePost: Upload a new post
- Feed: View all posts, delete or navigate to edit
- Edited: Edit existing post including updating the image

<br>
<br>

# Author 
- Songram Modak 
- Email : **songram869@gmail.com**
- Linkedin Profile : 