# ParseHub Pre-Interview Project ---> Simple BreadCrumb

This application contains client and server folders which by providing a directory in JSON can simulate a simple and yet fast breadcrumb.

## TECH STACKS

- Node.js
- Express.js
- React

## SETUP

### PREREQUISITE

- Node.js<br/>
  More [info](https://nodejs.org/en/) for installation.

### INITIALIZATION

#### Server

- In root directory enter `cd server`
- Replace your JSON file with the sample there (or test as is!)
- Install dependencies by `npm install`
- Copy the `.env.example` and rename it to `.env` or run the code below:

```sh
cp .env.example .env
```

- Now run the server with `npm start` or `npm run dev` for development

#### Client

- In root directory enter `cd client`
- Install dependencies by `npm install`
- Copy the `.env.example` and rename it to `.env` or run the code below:

```sh
cp .env.example .env
```

- Default directory root is "root", but can be changed in `.env`
- Make sure to enter the server port correctly in `.env` file
- Now run the client with `npm start`

## ROUTES

### GET: /directory

- Returns the JSON file for development purpose

### GET: /path

- Returns the root directory and adding more query such as `/path/?root&Home` would return direct children of home directory
