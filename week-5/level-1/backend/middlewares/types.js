const { z } = require("zod");

const createCardValidation = z.object({
  name: z.string(),
  description: z.string().max(40),
  social: z.object({
    linkedin: z.string(),
    twitter: z.string(),
  }),
  interest: z.array(z.string()),
});

module.exports = {
  zCardTypeValidation: createCardValidation,
};
