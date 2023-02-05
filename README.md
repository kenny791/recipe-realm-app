# T3A2-B - Recipe Realm

#### *Kenny Lai, John Masters, Vicky Nie*

---

## Table of Contents

  - [Table of Contents](#table-of-contents)
  - [Deployed website](#deployed-website)
  - [GitHub repository](#github-repository)
  - [Full Stack App - Part A README](#full-stack-app---part-a-readme)
  - [Trello board](#trello-board)
  - [App Screenshots](#app-screenshots)
  - [Trello Screenshots](#trello-screenshots)

## Deployed website

- [🔗 Website deployed with Railway](https://recipe-realm.up.railway.app/)

## GitHub repository

- [🔗 Server repository](https://github.com/Recipe-devs/Server)
- [🔗 Client repository](https://github.com/Recipe-devs/Client)

## Full Stack App - Part A README
- [🔗 README.md for T3A2-A](https://github.com/Recipe-devs/T3A2-A#readme)

## Trello board
- [🔗 Trello board](https://trello.com/invite/b/JfWoK2nu/ATTI6bf7c2b22f4a8e965bd1a41cb684c3b0C437EF79/recipe-realm)  


## Installation Instructions

To install the application, follow the instructions below:  

### Requirements  

- [Node.js](https://nodejs.org/en/)  
- [Mongodb atlas account](https://www.mongodb.com/atlas)  
  
### Server

- Create a new directory on your local machine where you would like to store the application  
- `CD` into the directory created  
- Open terminal and run the following command:  
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
- Create a new directory on your local machine where you would like to store the application
- `CD` into the directory created
- Open terminal and run the following command:
```git clone git@github.com:Recipe-devs/Client.git```
- Change directory into the client directory
- Install the required dependencies by running the following command:
```npm i --legacy-peer-deps```
- Run the following command to start the client:
```npm run start```



## API Endpoints

| Recipes             | Users          | Favourites                | Ratings                  | Comments                               |
| ------------------- | -------------- | ------------------------- |--------------------------|----------------------------------------|
| Get /recipes        | Get /users     | Post users/:id/favourites | Post /recipes/:id/rating |  Patch /recipes/edit/:id               |
| Get /recipes/:id    | Get /users/:id | Patch /users/:id          | Patch /recipes/edit/:id  | Delete recipes/:id/comments/:commentId |
| Post /recipes       |                |                           |                          |                                        |
| Patch /recipes/:id  |                |                           |                          |                                        |
| Delete /recipes/:id |                |                           |                          |                                        |

---

## Testing

 - Database to be reseeded before and after testing to ensure data integrity.  
[🔗 Postman API testing](https://documenter.getpostman.com/view/25499214/2s8ZDcxKJF#f8afa11a-8578-42d2-8702-39876e69dfca)

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
Client Libraries & Dependencies:



## App Screenshots
### Landing Page
![Landing Page](./docs/polypane_landing1.png)
![Landing Page cont.](./docs/polypane_landing2.png)

### Search Page  
![Search Page](./docs/polypane_search1.png)
![Search Page cont.](./docs/polypane_search2.png)

### Search Page With Filters
![Landing Page cont.](./docs/polypane_landing3.png)  

### Recipe Details Page
![Recipe Details Page](./docs/polypane_recipe1.png)
![Recipe Details Page cont.](./docs/polypane_recipe2.png)
![Recipe Details Page cont.](./docs/polypane_recipe3.png)  
### Submit Recipe Page
![Submit Recipe Page](./docs/polypane_submit1.png)  
### User Profile Page
![User Profile Page](./docs/polypane_profile1.png)
![User Profile Page cont.](./docs/polypane_profile2.png)  







## Task Delegation  
Tasks were delegated to each team member based on their strengths and interests. Team members were also encouraged to select tasks from the trello To do list, that they we interested in learning more about.If there was a tasks that a team member was not confident in completing, they were encouraged to ask for help from the other team members during the daily stand up.

## Project management
For this project we have decided to use the Agile methodology for project management. This will see the quick completion of tasks, daily stand ups of what tasks have been completed and will be completed in the next 24 hours, and flexibility to changes to the requirements of the project.

This will be managed is Trello, a Kanban style project management tool, where individual tasks are noted on separate cards. Each card will have properties to determine which member of the group it is assigned to, when it is due, and the estimated time to complete the task. Within the cards there are also sub-lists, to further breakdown the tasks and allow for incremental progress to be seen.


## Trello Screenshots
### January 23
![January 23](./docs/0123.png)
### January 24
![January 24](./docs/0124.png)
### January 25
![January 25](./docs/0125.png)
### January 26
![January 26](./docs/0126.png)
### January 30
![January 30](./docs/0130.png)
### January 31
![January 31](./docs/0131.png)
### February 1
![February 1](./docs/0201.png)
### February 2
![February 2](./docs/0202.png)
### February 3
![February 3](./docs/0203.png)
### February 5
![February 5](./docs/0205.png)


