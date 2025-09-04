# 🌍 Culture Atlas

Culture Atlas is a web application that explores cultural information.  
It has two main parts:  

- **Frontend (culture_atlas)** – Built with React  
- **Backend (server)** – Built with Node.js and Express  

Both need to be started individually.

---

## 📂 Project Structure  

├── culture_atlas # Frontend (React)

├── server # Backend (Node.js/Express)


---

## 🚀 Getting Started  

Follow the steps below to set up and run the project.  

### 1. Clone the Repository  

```bash
git clone https://github.com/RutviBhoraniya/CultureAtlas.git
cd CultureAtlas
```
### 2. Setup Backend (Server)

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```


Start the backend server:
```bash
npm run dev
```

### 3. Setup Frontend (Culture Atlas)

Open a new terminal and navigate to the culture_atlas folder:

```bash
cd culture_atlas
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

## 🔗 Connecting Frontend & Backend

Make sure the backend server is running before starting the frontend.

Update API URLs in the frontend (if required) to match the backend server

## ⚡ Tech Stack

Frontend: React, HTML, CSS, JavaScript

Backend: Node.js, Express

Database: MongoDB


---

## 🔐 Environment Variables

Before running the project, create a `.env` file inside the `server/` folder and add the following variables:

```env
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
MONGO_URI=your_mongodb_connection_string
```

---
  
