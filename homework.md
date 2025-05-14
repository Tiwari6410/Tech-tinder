- create a repository
- initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a Server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- Difference between caret and title ( ^ VS ~ )

- Initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, /, /hello/2, /xyz
- Order of the routes matter a lot

- Install Postman app and make a workspace/collection > test API Call
- Write logic to handle GET, POST, PATCH, DELETE API Calls and test them on Postman
- Ecplore rounting and use of? +, (), \* in the routes
- use of rages /a/, /.@flys/
- Reading the query params in the routes.
- Reading the dynamic routes
- Multiple Routes Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, [rH2, rH3,rH4], rH5,rh6)
- What is a Middleware? why do we need it?
- How express JS basically handles requests behind the scenes?
- Differences app.use and app.all ?
- Write a dummy auth middleware for admin?
- Write a dummy auth middleware for all user routes, except /user/login ?
- Error Handling using app.use("/", (err, req, res, next)= {})

- create a free cluster on MongoDb official website (Mongo Atlas).
- Install mongoose library.
- Connect your application to the Database

- username : arvindtwr6410
- password : t7iM5QDWuBmcIcYt
- connection string : mongodb+srv://arvindtwr6410:t7iM5QDWuBmcIcYt@techtinder.yrmwofk.mongodb.net/
  -connection string 2 : mongodb+srv://arvindtwr6410:t7iM5QDWuBmcIcYt@techtinder.yrmwofk.mongodb.net/?retryWrites=true&w=majority&appName=techTinder

  - search mongoose and > schemas > read more about schemas

  - create a free cluster on mongodb official website (mongo Atlas).
  - Install mongoose library.
  - Connect your application "connection-url"/devTinder.
  - call the connectDB function and connect to database starting application on 7777.
