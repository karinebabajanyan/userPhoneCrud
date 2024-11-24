# User and Phone Management API

This is a **Node.js** application that provides a RESTful API for managing users and their associated phone numbers. The project uses **Express.js** for the server, **MongoDB** for the database.

-----
## Features

- **CRUD Operations** for users:
  - Create, read, update, and delete users.
- **CRUD Operations** for phone numbers:
  - Associate phone numbers with users, and manage them separately.

-----
## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or newer)
- **MongoDB** (local or cloud instance)

-----
## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:karinebabajanyan/userPhoneCrud.git
   ```
   Here’s how to make the **Usage** section cross-platform, accounting for different operating systems like Linux, macOS, and Windows:
   
   
2. Navigate to the project directory:
   ```bash
   cd userPhoneCrud
   ```

3.  Copy .env.example to .env and add your credentials:
   ```bash
   cp .env.example .env
   ```

4. Install dependencies:
   ```bash
   npm install
   ```
------
## Usage

1. **Start your MongoDB server**:

   - **On Linux/macOS**:  
     Open a terminal and run:  
     ```bash
     mongod
     ```

   - **On Windows**:  
     - Open the **Command Prompt** or **PowerShell**.
     - Navigate to the folder containing the MongoDB executable files (e.g., `C:\Program Files\MongoDB\Server\X.X\bin`).
     - Run:  
       ```cmd
       mongod
       ```

    If you're using a **cloud database** like **MongoDB Atlas**, skip this step and ensure your connection string in `db.js` points to the cloud instance.
    

2. **Start the application**:

   - Open a terminal or command prompt, navigate to the project directory, and run:  
     ```bash
     npm start
     ```

   This will start the server and make it accessible at `http://localhost:3000`.

------
## API Endpoints

### Users

- **POST /api/users**  
  Create a new user.  
  **Body (JSON)**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password"
  }
  ```

- **GET /api/users/:id**  
  Retrieve a user by their ID.

- **PUT /api/users/:id**  
  Update user details by ID.  
  **Body (JSON)**:
  ```json
  {
    "name": "Jane Doe Updated",
  }
  ```

- **DELETE /api/users/:id**  
  Delete a user by their ID.

### Phones

- **POST /api/phones**  
  Create a new phone number.  
  **Body (JSON)**:
  ```json
  {
    "userId": "user-id",
    "number": "+1234567890"
  }
  ```

- **GET /api/phones/:id**  
  Retrieve a phone number by its ID.

- **PUT /api/phones/:id**  
  Update a phone number by ID.  
  **Body (JSON)**:
  ```json
  {
    "number": "+0987654321"
  }
  ```

- **DELETE /api/phones/:id**  
  Delete a phone number by its ID.
  
-----
## Project Structure

```plaintext
.
├── config
│   ├── db.js                # Handles MongoDB connection logic, establishing the database connection.
│
├── controllers
│   ├── userController.js    # Contains the request-handling logic for user-related operations (e.g., create, read, update, delete).
│   ├── phoneController.js   # Contains the request-handling logic for phone-related operations (e.g., create, read, update, delete).
│
├── models
│   ├── user.js              # Defines the User schema and model for MongoDB using Mongoose.
│   ├── phone.js             # Defines the Phone schema and model for MongoDB using Mongoose.
│
├── routes
│   ├── userRoutes.js        # Defines API routes for user operations and maps them to the userController methods.
│   ├── phoneRoutes.js       # Defines API routes for phone operations and maps them to the phoneController methods.
│
├── services
│   ├── userService.js       # Contains business logic for users (e.g., database interactions, validations, etc.).
│   ├── phoneService.js      # Contains business logic for phone numbers (e.g., database interactions, validations, etc.).
│
├── app.js                   # Main entry point of the application, initializes Express, connects to MongoDB, and sets up routes.
│
└── README.md                # Documentation for the project, including setup instructions, usage, and API details.

```

-------
## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
