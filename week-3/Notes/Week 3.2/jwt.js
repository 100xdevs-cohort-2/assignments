const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "shivam@gmail.com",
    password: "123",
    name: "Shivam Kumar",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   const user = ALL_USERS.filter((user)=>{
//     return user.username == username && user.password == password;
//   });
//   if(user.length>0){
//     return true;
//   } else {
//     return false;
//   }
// }

// or using find() function

function userExists(username, password) {
    const user = ALL_USERS.find((user) => {
        return user.username === username && user.password === password;
    });
    // if a user will exist then find() will return the user and if it dosent the it will return undefined.
    
    if(user === undefined){
        return false;
    } else {
        return true;
    }
    
    // Alt code
    // return user !== undefined;
    // if user exists (find will rreturn the user)
        // then user !== undefined will return true;
    // if user dosent exist then find() will return undefined
        // then undefined !== undefined will return false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        user: ALL_USERS
    })
  } catch (err) {
    // console.log(err);
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen(3000)