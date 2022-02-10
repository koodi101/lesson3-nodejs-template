# Lesson 3: NodeJS Template

This is the repository for a simple chat application using
[koa](http://koajs.com/), a Node.js web server framework, and [sequelize](http://docs.sequelizejs.com/), which maintains the SQLite database.

## Prerequisites

You can run the example with Node.js or Docker.

Node.js is a programming language based on JavaScript which allows you to read files, create processes and run server software. Regular JavaScript is run within a web browser and has no access to the filesystem or processes.

Docker is a tool that allows a programmer to easily deploy their applications in a sandbox (called containers). Docker is used to run software that consists of multiple pieces (called services) which together work for example as a web server.

- [nodejs](http://nodejs.org)
- _([docker](http://docker.com))_

> Docker cannot be installed in Windows 10 Home edition
>
> This project uses Docker to run Node.js behind the scene

## Running the example

First you need to clone the git repository using a command-line tool called `git`

    git clone https://github.com/koodi101/lesson3-nodejs-template

> Command-line commands usually look like this:
>
>     COMMAND [SUBCOMMAND] [ARGUMENTS]
>
> The square brackets `[]` mean that the part is optional

After cloning the repository, you have to change your `working directory` so that future commands can find required files, like [`package.json`](backend/package.json) and [`docker-compose.yml`](docker-compose.yml)

    cd lesson3-nodejs-template

To confirm you are in the correct directory, use the command

    ls

You should now see something similar to

    $ ls
    backend  docker-compose.yml  README.md

> `cd` means change directory and `ls` is short for list.
>
> The dollar sign `$` indicates that the following commands are written to the command-line terminal

### Running with plain Node.js

    npm install
    npm run dev

### Running using Docker & docker-compose

    docker-compose build
    docker-compose up

## Exercises

### The app

- Use [Postman](https://www.getpostman.com/), [curl](https://linux.die.net/man/1/curl) or similiar to
  - Post a new message to _/api/chats_
  - Get the messages from _/api/chats_
- Add nickname and chat rooms to messages
- Create a new endpoint _/api/chats/\<room\>_ that returns messages for specific room

### Deploy

- Use SSH keys to login to the server
- Install needed dependencies
- Use Docker to deploy your application to the server
