const express = require('express');
const app = express();
const db = require('./db');
const User = require('./userSchema');
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('hi there');
});
app.get('/user', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.send(400).json({ err: error });
  }
});
app.post('/user', async (req, res) => {
  try {
    const { name, description, interest, twitter, linkdin, github } =
      req.body.newUser;
    await User.create({
      name,
      description,
      interest,
      twitter,
      linkdin,
      github,
    });
    res.status(200).json({ message: 'user created' });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

app.listen(3000, () => {
  console.log('port running on 3000');
});
