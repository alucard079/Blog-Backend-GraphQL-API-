# Blog-Backend-GraphQL-API-
This is a Node.js backend project using GraphQL to manage a simple blogging system with users and blogs. The backend is set up using Apollo Server, Sequelize ORM, and MySQL.

This project is a Node.js backend for a simple blogging system using GraphQL, Apollo Server, Sequelize ORM, and MySQL as the database. The backend allows users to create blog posts and associate them with users.

# Features
⋅⋅ Users
⋅⋅ Create a new user
⋅⋅ Fetch all users
⋅⋅ Fetch a user by ID
⋅⋅ Blogs
⋅⋅ Create a new blog associated with a user
⋅⋅ Fetch all blogs for a user

# Technologies Used
⋅⋅ Node.js
⋅⋅ GraphQL with Apollo Server
⋅⋅ Sequelize ORM
⋅⋅ MySQL
⋅⋅ Express.js

# Installation
1. Clone Repository
    ```
      git clone https://github.com/alucard079/Blog-Backend-GraphQL-API-.git
    ```
2. Navigate to the project directory
    ```
      cd Blog-Backend-GraphQL-API-
    ```
3. Install dependencies
   Make sure you have `npm` installed, then run:
   ```
     npm install
   ```
4. Set up the environment variables
   Create a `.env` file in the root of the project and provide the following values (customize according to your MySQL setup):
   ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=your_database_name
    DB_PORT=3306
    PORT=3301
   ```

