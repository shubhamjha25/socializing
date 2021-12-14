<p align="center">
   <img alt="NodeJS" width="100px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
    <img alt="Express" width="100px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
    <img alt="MongoDB" width="100px" src="https://camo.githubusercontent.com/a0d02fe62cb8dc0a2333089ccb22b78f5c7245178db0edd453a583b302ef3c61/68747470733a2f2f74682e62696e672e636f6d2f74682f69642f4f49502e6e70626147564f7342632d4b566d415375434c48684148614a533f7069643d4170692672733d31" />
  <br />
  <h1 align="center">socializing</h1>
  <p align="center">A ready-made RESTful API for a social media application which can be fetched on any frontend.</p>
</p>

<br />

## DESCRIPTION
- **socializing** is ready-made real world social media application REST API with functions such as **`login`**, **`register`**, and all the **`CRUD`** operations. 
- It is made with Node, Express and MongoDB. <br />
- The API can be consumed on any frontend *(React, Angular, Vue)*. <br />
- The MongoDB models interact with the Node.js routers. <br />

<br />

## DEPENDENCIES USED
- bcrypt: A library to help you hash passwords.
- dotenv: A zero-dependency module that loads environment variables from a *.env* file into *process.env*.
- express: Fast, unopinionated, minimalist web framework for node.
- helmet: It helps you secure your Express apps by setting various HTTP headers.
- mongoose: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- morgan: HTTP request logger middleware for node.js.
- nodemon: A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

<br />

## ROUTES

### User Route - `/api/users`
  - **Get User**:
  - **Update User Account Details**
  - **Delete User Account**
  - **Follow Other User**
  - **Unfollow Other User (If Following)**
  
### Post Route - `/api/posts`
  - **Get Post**
  - **Create Post**
  - **Edit Post**
  - **Delete Post**
  - **Like | Dislike Post**
  - **Generate Timeline (Feed)**

### Authentication Route - `/api/auth`
  - **Login**
  - **Register**

<br />

## MODELS
  - [User Model](https://github.com/shubhamjha25/socializing/blob/main/models/User.js)
  - [Post Model](https://github.com/shubhamjha25/socializing/blob/main/models/Post.js)

<br />

## LICENSE
This repository is under <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a>.
