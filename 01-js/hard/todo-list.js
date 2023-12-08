/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.TodosArr = []
  }

  add(todo) {

    const { id } = todo
    for (let i = 0; i < this.TodosArr.length; i++) {
      if (this.TodosArr[i].id == id) {
        throw new Error("Error: Id already exists")
      }
    }
    this.TodosArr.push(todo)

  }
  remove(id) {

    let newTodosArr = []
    const todosArrLength = this.TodosArr.length
    for (let i = 0; i < todosArrLength; i++) {
      if (this.TodosArr[i].id !== id) {
        newTodosArr.push(this.TodosArr[i])
      }
    }
    this.TodosArr = newTodosArr

  }
  update(id, updatedTodo) {

    const todosArrLength = this.TodosArr.length
    for (let i = 0; i < todosArrLength; i++) {
      if (this.TodosArr[i].id === id) {
        this.TodosArr[i].title = updatedTodo.title
        this.TodosArr[i].desc = updatedTodo.desc
      }
    }
    
  }
  getAll() {
    return this.TodosArr
  }

  clear() {
    this.TodosArr = []
  }
}
module.exports = Todo;
