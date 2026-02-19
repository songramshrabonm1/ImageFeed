# Image Upload & CRUD App

A full-stack React + Node.js application for uploading, viewing, editing, and deleting images with MongoDB as the database and ImageKit for image storage.

<img width="1536" height="1024" alt="Image" src="https://github.com/user-attachments/assets/c5a70ca3-7a5b-489d-8a77-34cee758b4b9" />

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

<img width="1278" height="644" alt="Image" src="https://github.com/user-attachments/assets/324762db-ff7c-4d3b-b632-57920c616719" />



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

## Project Overview 

#### Upload Post 

<img width="816" height="649" alt="Image" src="https://github.com/user-attachments/assets/9549983d-88f4-4ae7-a41b-1178fa1d2cc8" />

#### Get All Post 

<img width="631" height="679" alt="Image" src="https://github.com/user-attachments/assets/c0be0c68-74de-4d4f-8254-0c7898949ff0" />

#### Delete Post 

<img width="793" height="451" alt="Image" src="https://github.com/user-attachments/assets/c79a8edd-8c7e-4b84-ae3d-bcca9b177385" />

#### Edit Post 

<img width="2544" height="1994" alt="Image" src="https://github.com/user-attachments/assets/a49e0df8-9d36-493e-ac0f-3e1e6b42666f" />


# Author 
- Songram Modak 
- Email : **songram869@gmail.com**
- Linkedin Profile : [Songram Modak Linkedin Profile](https://www.linkedin.com/in/songrammodak/)
