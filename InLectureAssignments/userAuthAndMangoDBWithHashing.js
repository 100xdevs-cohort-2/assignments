const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;
const jwtPassword = "123456";
const mongoUrl = "mongodb+srv://McACE007:MrinalBaba007mc@cluster0.0gbxyhp.mongodb.net/users";


app.use(express.json());

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    normalize: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    normalize: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    normalize: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})
const User = mongoose.model("User", userSchema);

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  return password;
}

async function userExists(username) {
  let isExist = await User.findOne({ email: username });
  if (isExist != null) {
    return true;
  } return false;
}

async function verifyUserUsernameAndPassword(username, password) {
  let user = await User.findOne({ username: username });
  if (user == null) {
    return false;
  }
  if (bcrypt.compare(password, user.password)) {
    return true;
  } return false;

}

async function verifyUser(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const token = req.headers.authorization;

  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    return res.status(401).send("Invalid authorization token");
  }

  if (! await verifyUserUsernameAndPassword(username, password)) {
    return res.status(401).send("Incorrect username or password");
  }

  return next();
};

app.post("/users/signup", async (req, res) => {
  const newUser = req.body;

  if (await userExists(newUser.username)) {
    return res.send("Email already in use");
  }

  try {
    await User.validate(newUser);

    newUser.password = await hashPassword(newUser.password);

    const user = await User.create(newUser);

    var token = jwt.sign({ username: newUser.username }, jwtPassword);

    res.status(201).json({ authToken: token, data: user });

  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Invalid user data", errors: error.errors });
    }
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/users", verifyUser, async function(req, res) {
  let allUsers = await User.find({});
  res.json(allUsers);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
