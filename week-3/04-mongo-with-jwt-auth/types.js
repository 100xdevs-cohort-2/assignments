const zod = require('zod');

const courseSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    price: zod.number(),
    imageLink: zod.string()
});

module.exports = {
    courseSchema
};