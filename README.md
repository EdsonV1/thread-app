<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Thread App" />

  &#xa0;

  <!-- <a href="https://threadapp.netlify.app">Demo</a> -->
</div>

<h1 align="center">Thread App</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/EdsonV1/thread-app?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/EdsonV1/thread-app?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/EdsonV1/thread-app?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/EdsonV1/thread-app?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/EdsonV1/thread-app?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/EdsonV1/thread-app?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/EdsonV1/thread-app?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Thread App 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
</p>

<br>

## :dart: About ##

Real-time chat app using React, MongoDB, Node/Express, and Socket.io

## :sparkles: Features ##

:heavy_check_mark: User can register or login via username and password;\
:heavy_check_mark: Users can create chat room to talk to other people;\
:heavy_check_mark: Users status [online/offline];\
:heavy_check_mark: Themes Darkmode and Lightmode;


## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [MongoDB](https://www.mongodb.com)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed. Also have a mongodb Cloud Atlas account and a project.

## :checkered_flag: Starting ##

Clone this project

```bash
$ git clone https://github.com/EdsonV1/thread-app
```

Enter the folder

```bash
$ cd thread-app
```
This project has been dockerize, so you choose which option you want to run this project. But before that create a new filenamed `.env` based on the `.env.example` file.
Update the envinroment variables according to your preferences.

Normal Way \
Open a terminal and head to the frontend folder and run this command.

```bash
$ cd frontend
$ npm start
```

Now open a second terminal and head to the other folder called backed, and run this command.

```bash
$ cd backend
$ node app.js
```

Docker Way\

Run this command

```bash
$ docker-compose up
```

To stop the docker

```bash
$ docker-compose down
```

# The server will initialize in the <http://localhost:3000>
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/EdsonV1" target="_blank">{{YOUR_NAME}}</a>

&#xa0;

<a href="#top">Back to top</a>
