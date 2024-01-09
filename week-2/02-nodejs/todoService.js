const uuid = require('uuid')

class TodoService {
  constructor() {
    this.todos = [];
  }

  getAll() {
    return this.todos
  }

  get(id) {
    return this.todos.find((item) => item.id === id)
  }

  add(todo) {
    const { title, description, completed } = todo
    const newTodo = { title, description, completed, id: uuid.v4() }
    this.todos.push(newTodo);
    return newTodo
  }

  remove(id) {
    const isFound = this.todos.some((item) => item.id === id)
    this.todos = this.todos.filter((item) => item.id !== id)
    return isFound
  }
  update(todo, id) {
    const isFound = this.todos.some((item) => item.id === id)
    this.todos = this.todos.map((item) => {
      if (item.id === id) {
        return { ...item, ...todo }
      }
      return item
    })
    return isFound
  }

}

module.exports = TodoService
