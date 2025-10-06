const z = require("zod");

const createCard = z.object({
    name: z.string(),
    description: z.string(),
    interests: z.array(z.string()),
    social: z.array(z.string())
})

const updateCard = z.object({
    id: z.string()
})

module.exports = {
    createCard: createCard,
    updateCard: updateCard
}