const zod = require('zod')

const TodoObject = zod.object({
    todo: zod.string()
})

module.exports = {
    TodoObject
}