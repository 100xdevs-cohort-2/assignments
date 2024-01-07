const { zCreateTodo, zCreateUser } = require("../type");

function userInputValidation(req, res, next) {
  const userInput = req.body;

  if (!userInput.username || !userInput.password)
    return res
      .status(401)
      .send({ error: "You must provide username and password" });

  const validated = zCreateUser.safeParse(userInput);

  if (validated.success) {
    req.userData = validated.data;
    next();
  } else {
    res.status(404).json({ error: "Invalid inputs!" });
  }
}

function todoInputValidation(req, res, next) {
  const userInput = req.body;

  const validated = zCreateTodo.safeParse(userInput);

  if (validated.success) {
    req.todoData = validated.data;
    next();
  } else {
    res.status(404).json({ error: "Invalid inputs!" });
  }
}

module.exports = {
  userInputValidation,
  todoInputValidation,
};
