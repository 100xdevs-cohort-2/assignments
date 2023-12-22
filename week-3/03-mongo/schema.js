const z = require("zod");

const userSchema = z.object({
  username: z.string().email(),
  password: z.string().length(6),
});

const courseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().positive(),
  imageLink: z.string(),
});

module.exports = {
  userSchema,
  courseSchema,
};
