# T3A2-B - Recipe Realm

#### *Kenny Lai, John Masters, Vicky Nie*

---

## Table of Contents

- [T3A2-B - Recipe Realm](#t3a2-b---recipe-realm)
      - [*Kenny Lai, John Masters, Vicky Nie*](#kenny-lai-john-masters-vicky-nie)
  - [Table of Contents](#table-of-contents)
  - [R10 - A link (URL) to your deployed website](#r10---a-link-url-to-your-deployed-website)
  - [R11 - A link to your GitHub repository](#r11---a-link-to-your-github-repository)

## A link (URL) to your deployed website

- [Website deployed with Railway](https://recipe-realm.up.railway.app/)

## A link to your GitHub repository

- [Server repository](https://github.com/Recipe-devs/Server)
- [Client repository](https://github.com/Recipe-devs/Client)

## The contents of your `README.md` as submitted for `Full Stack App - Part A`

- [README.md for T3A2-A](https://github.com/Recipe-devs/T3A2-A#readme)

## A link and screenshots of your Trello board throughout the duration of the project

## -----TO DO-----

-----Installation Instructions (copy to server docs)

## Installation Instructions

To install the application, follow the instructions below:  

### Requirements  

- [Node.js](https://nodejs.org/en/)  
- [Mongodb atlas account](https://www.mongodb.com/atlas)  
  
### Server

- Create a new directory on your local machine where you would like to store the application  
- 'CD' into the directory created  
- open terminal and run the following command:  
```git clone https://github.com/Recipe-devs/Server.git```  
- Change directory into the server directory  
- Install the required dependencies by running the following command:  
```npm install```  
- Create a .env file in the root directory of the server and add the following:  
```MONGODB_URI=<your mongodb uri>```  
- Seed the database by running the following command:  
```node seed.js```  
- Run the following command to start the server:  
```nodemon```  

### Client

### API Endpoints

| Recipes             | Users          | Favourites                | Ratings                  | Comments                               |
| ------------------- | -------------- | ------------------------- |--------------------------|----------------------------------------|
| Get /recipes        | Get /users     | Post users/:id/favourites | Post /recipes/:id/rating |  Patch /recipes/edit/:id               |
| Get /recipes/:id    | Get /users/:id | Patch /users/:id          | Patch /recipes/edit/:id  | Delete recipes/:id/comments/:commentId |
| Post /recipes       |                |                           |                          |                                        |
| Patch /recipes/:id  |                |                           |                          |                                        |
| Delete /recipes/:id |                |                           |                          |                                        |

---

## Testing

[Postman API testing](https://documenter.getpostman.com/view/25499214/2s8ZDcxKJF#f8afa11a-8578-42d2-8702-39876e69dfca)

## Libraries & Dependencies

### Server

- express: is an open source web application framework for Node.js. It is used to create the server and handle the routing of the application.
- mongoose: is the object data modelling library used to connect the application to the mongodb database. It is used to allow the application to interact with the database.
- dotnev: is a library that allows the use of environment variables. This was used to pass in the mongodb creditentials from the .env file to the application.  
- cors: a Node.js package that allows for cross-origin resource sharing between the Express server and the React client through middleware.
- nodemon: is a library that monitors the code and restarts the server when changes are made.
- jest: a JavaScript testing framework used to test the application.
- supertest: a Node.js library that allows for testing of HTTP endpoints.

### Client

- react: This is the main react library. It provides tools for building user interfaces based on UI components.
- react-dom: This is a package that provides methods that can used to interact with webpages through the DOM.
- react-router-dom: This library enables implementation of dynamic routing in a React application.
- react-router-hash-link: This allows smooth scrolling to anchor tags.