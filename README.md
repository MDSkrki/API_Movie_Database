# Somkereki's API_Movie_Database

## Introduction
This project has been given as a task by Geekshubs Academy during the FullStack Bootcamp, in which we have to make a simple RESTful API for a movie database.\
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
- 

## Project functionality 
The API has been deployed thanks to the free services of [Heroku](https://www.heroku.com/) and [MongoAtlas](https://www.mongodb.com/atlas/database).\
```
https://mdskrki-api-movie-database.herokuapp.com/
```
## Project structure
You have 2 possible endpoints in the app: `/user` or `/movie`.
In the `/user` endpoint, if you don't have any kind of authorisation, 