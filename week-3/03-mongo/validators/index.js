const zod = require("zod");

const SignUpSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
});

const CourseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number().nonnegative(),
});

module.exports = {
  SignUpSchema,
  CourseSchema
};