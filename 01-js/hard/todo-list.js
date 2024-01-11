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
    #list = [];

    add(todo) {
      this.#list.push(todo);
    }

    remove(indexOfTodo) {
      const len = this.#list.length;
      if(indexOfTodo < len) {
          for(let i = indexOfTodo; i < len - 1; ++i) {
              let temp = this.#list[i];
              this.#list[i] = this.#list[i + 1];
              this.#list[i + 1] = temp;
          }
          this.#list.pop();
      }
    }

    update(index, updatedTodo) {
      if(this.#list.length > index) {
        this.#list[index] = updatedTodo;
      }
    }

    getAll() {
      return this.#list;
    }

    get(indexOfTodo) {
      if(indexOfTodo >= this.#list.length) {
          return null;
      }
      return this.#list[indexOfTodo];
    }

    clear() {
      while(this.#list.length != 0) {
        this.#list.pop();
      }
    }
}

module.exports = Todo;
