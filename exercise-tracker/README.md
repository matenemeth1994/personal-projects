### About

Exercise tracker application executing CRUD operations with MongoDB.

### Built With

- Node - Express
- MongoBD
- React JS
- Bootstrap

### How to run

- \exercise-tracker: `npm start` - open react application in the browser.
- \backend: `npm start` - start nodemon that runs node in the backend and connects the server with MongoDB database. For some reason `nodemon server` command didn't work so in `mern-exercise-tracker\backend\package.json` I added it to the scripts and running nodemon with npm.

### Commands I used to install packages

- create react app: `npx create-react-app mern-exercise-tracker`
- \backend `npm init -y`
- \backend `npm install express cors mongoose dotenv`. Cors = Cross Origin Resource Sharing. It provides middleware. Mongoose is interacting with mongodb through nodejs. dotenv = Instead of setting up environent variable in the system it creates environment variable in a file.
- `npm install -g nodemon`
- `npm install bootstrap`
- `npm install react-router-dom`
- \exercise-tracker `npm install react-datepicker`
- \exercise-tracker `npm install axios`

### Heroku Deploy

- before app.listen in server.js add:

```
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("mern-exercise-tracker/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "mern-exercise-tracker", "build", "index.html")); // relative path
  });
}
```
- in \backend folder run: `heroku login` 
- `heroku create`
- if it's not a git repository: `git init`
- in your heroku profile click on your project and choose deploy, and then copy the code you find there: `heroku git:remote -a enigmatic-badlands-39940`
