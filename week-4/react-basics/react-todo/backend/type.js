const { z } = require("zod");

const createTodoInputValidation = z.object({
  title: z.string().min(4),
  description: z.string(),
});

const createUserInputValidation = z.object({
  username: z.string().email().min(5),
  password: z.string().min(4),
});

module.exports = {
  zCreateTodo: createTodoInputValidation,
  zCreateUser: createUserInputValidation,
};
