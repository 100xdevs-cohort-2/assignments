const zod = require("zod");

const createCourse = zod.object({
    title: zod.string(),
    description: zod.string(),
    price: zod.number(),
    imageLink: zod.string()
});

module.exports = {createCourse};