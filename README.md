# Somkereki's API_Movie_Database

## Table of contents
- [Somkereki's API_Movie_Database](#somkerekis-api_movie_database)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Disclaimer](#disclaimer)
  - [Tech Stack](#tech-stack)
    - [Useful software](#useful-software)
  - [Objectives](#objectives)
    - [Extra points](#extra-points)
    - [Pending tasks](#pending-tasks)
  - [Usage Pre-requisites](#usage-pre-requisites)
  - [Project functionality](#project-functionality)
  - [Project structure](#project-structure)
    - [/User](#user)
    - [/Movie](#movie)

## Introduction
This project has been given as a task by Geekshubs Academy during the FullStack Bootcamp, in which we have to make a simple RESTful API for a movie database following a MVC design pattern.\
It is not intended for full use, but as a test of knowledge.

### Disclaimer
*For the sake of practicality, some functions have been oversimplified even though those practices should be avoided for security reasons.*

## Tech Stack

<p align='left'>
  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript Logo" width="40" height="40"/> 
  </a>
  <a href="https://www.npmjs.com/package/express" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express Logo" width="40" height="40"/> 
  </a>
  <a href="https://nodejs.org/" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS Logo" width="40" height="40"/> 
  </a>
  <a href="https://www.mongodb.com/" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDb Logo" width="40" height="40"/> 
  </a>
  <a href="https://www.heroku.com/" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain-wordmark.svg" alt="Heroku Logo" width="40" height="40"/> 
  </a>
</p>

### Useful software
- [Postman](https://www.postman.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

## Objectives

- Create RESTful API
- Have at least 2 entities (Users and Movies)
- Prepare a CRUD on users (Create user; Read profile; Delete profile; Login)
- Prepare a CRUD on movies (Search by title, by id, all movies)
- Use a MVC pattern
- Proper README completion !!!

### Extra points

- admin and client roles
- filter by genre and actors

### Pending tasks 

- Create proper documentation with SwaggerUI
- Create logs with Winston and Morgan
- Create movie basic renting functionality (using populate)
- Edit response status appropiately

## Usage Pre-requisites
- A very nice tool to have is Postman, in order to test the RESTful API as a simulted client.
- The following tokens are provided in order to simplify the testing methdology:
- Admin role jwt token: `eyJhbGciOiJIUzI1NiJ9.YWRtaW4.fPmKIg7VMPpkFfK1W9zQ5trxDEIR8jvYMvV5bWDSzzM`
- User role jwt token: `eyJhbGciOiJIUzI1NiJ9.dXNlcg.U8u8lcZMAGiVR4RoK3JPeeDXJl87pwYAnVw0cT2E6bA`

## Project functionality 
The API has been deployed thanks to the free services of [Heroku](https://www.heroku.com/) and [MongoAtlas](https://www.mongodb.com/atlas/database).\
```
https://mdskrki-api-movie-database.herokuapp.com/
```
## Project structure
You have 2 possible endpoints in the app: `/user` or `/movie`.\
In the `/user` endpoint, if you don't have any kind of authorisation, you can access `/register`, where you can add a user to the database; and `/login`, where you can perform a login using email and password. In both cases provide a JwT token that gives you access to the rest of the API.

*Fun fact: all passwords are automatically stored as hashes using `bcrypt` npm package!*

### /User

When registering or Logging in, the data must be passed through the body of the REQuest in JSON format.\
The only fields that will register are *username*, *email* and *password*.\

‼️ CAREFUL: All following operations need an admin authorisation token ‼️\

You can get an array of all users in the database, or use `?queries` to filter by id, email, username and/or role.\
If you want to delete or update users, you must use `/:PathParams`, and will only accept IDs from the database.\
When updating, just like with registration and login, you need to pass the keys and values you wish to update through the body of the REQuest.

### /Movie

By performing a POST to the secret `/seeder` endopint with an empty body, the database will recieve 50 random movies with *title*, *genre*, *year* and *director* fields.

‼️ CAREFUL: All following operations need an Admin or User authorisation token ‼️\

You can obtain all movies or some by filtering with `?queries` using the above indicated fields.\
All users and admins can also create, delete or update movie fields. No fields are required, but no more fields than the above indicated will be accepted.\
As with the `/user` handling, deletion and updating of movies must be performed through `/:PathParams` using the id of the movie.