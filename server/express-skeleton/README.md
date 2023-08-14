### navigate to where you want to create the project and then run the Express Application Generator in the command prompt as shown:

bash

`express express-locallibrary-tutorial --view=pug`

We now have to call "npm run <scriptname>" rather than just npm start, because "start" is actually an npm command that is mapped to the named script. We could have replaced the command in the start script but we only want to use nodemon during development, so it makes sense to create a new script command.

The serverstart command added to the scripts in the package.json above is a very good example. Using this approach means you no longer have to type a long command to start the server. Note that the particular command added to the script works for macOS or Linux only.

## Challenge yourself
Create a new route in /routes/users.js that will display the text "You're so cool" at URL /users/cool/. Test it by running the server and visiting http://localhost:3000/users/cool/ in your browser