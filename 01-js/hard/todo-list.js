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
  constructor()
  {
    this.todos = []
  }
  add(todo)
  {
    this.todos = [...this.todos,todo]
  }
  clear()
  {
    this.todos = []
  }
  getAll()
  {
    return this.todos
  }
  remove(indexOfTodo)
  {
    let newtodos = []
    for(let i=0;i<this.todos.length;i++)
    {
      if(i!==indexOfTodo){
        newtodos.push(this.todos[i])
      }
    }
    this.todos = newtodos;
  }
  get(Indexoftodo)
  {
    if(Indexoftodo > this.todos.length -1)
    {
      return null
    }
    return this.todos[Indexoftodo]
  }
  update(index, updatedTodo)
  {
    if(index> this.todos.length - 1){return null}
    this.todos[index] = updatedTodo;
  }
}

module.exports = Todo;
