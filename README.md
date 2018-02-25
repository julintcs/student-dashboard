# student-dashboard
Internship (Login only)

Make sure you have yarn and MongoDB installed.

First go to the root directory in the command line and type

`yarn`

It will install all the packages required (as specified in `package.json`). Takes some time.

Start MongoDB server with the `mongod` command and after it starts, run

`yarn start` from the root directory of the project to run the server for development purposes.

Go to `http://localhost:3030/` to view the site.

Right now, my database in MongoDB is named `test` which has a collection (table) named `users` with fields `username` and `password` (another field `_id` seems to be automatically generated).

To add more fields the model file in `/models/user.js` file need be modified.

I followed a great series of video tutorials by Christopher Buecheler at [this](https://www.youtube.com/playlist?list=PL3Ld4LsLih54o7ElUTM6z8x48_HT0Ukc9) link. Maybe this will help you as well.



