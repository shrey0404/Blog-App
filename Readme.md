------> ALL THE INFORMATION FOR BETTER UNDERSTANDING OF THE BACKEND DEVELOPMENT <------

STEP 1 -> Create PACKAGE.JSON file using NPM INIT.

STEP 2 -> Make an INDEX.JS file for the root directory storage.

STEP 3 -> Make folders for Model-View-Controller pattern {for better evalution}.

STEP 4 -> Create Routes folders:
which stores all the files which routes to the index.js page and gets the functionality from controllers folders files

STEP 5 -> Create Models folders:
which stores the database information by creating Schemas and exports them as Models

STEP 6 -> Create Controllers folders:
which stores all the files that tiggers the functionality behaviour and exports into Routes folder files.

STEP 7 -> Create Views folers:
which stores all the EJS files(as we are doing SERVER SIDE RENDERING).

STEP 8 -> Now add MiddleWare for EJS usage as its a view engine which performs SSR in this app using:
app.set("view engine", "ejs"); // to set the view engine as ejs
app.set("views", path.resolve("./views")); // to locate the path to the views folder

STEP 9 -> Now Design the Home page in Views folder for the Server side rendering (basic UI development using HTML nd CSS).

STEP 10 -> Design a model for user management of our app:
--> includes the name,email,password annd other info as schema and export it as model
--> and also hased the password with the help of crypto built-in packeage for better security

STEP 11 -> Now in Routes folder :
we made a user.js file which routes the url to the root file {index.js} and also contains the basic functionality
of adding the users entry into the system ... and then user can insert the data {name, email and password}
in which the password will be hashed for security reasons...

STEP 12 ->
