/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of arr
    - remove(indexOfTodo): remove todo from list of arr
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all arr
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all arr

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(arr){
    this.arr = [];
  }

  add(task){
    this.arr.push(task);
  }

  remove(ind_of_task){
    if (this.arr.length == 0) {
      console.log("No arr left to be removed.");
    }
    // If the index is valid, remove the index and reduce array size by 1.
    if (ind_of_task >= 0) {
      this.arr.splice(ind_of_task, 1);
    }

  }

    update(index, updatedTodo) {
    // For index out of bound.
    if (index >= this.arr.length - 1) {
      return this.arr;
    }
    this.arr[index] = updatedTodo;
  }
  getAll() {
    return this.arr;
  }
  get(indexOfTodo) {
    // For index out of bound.
    if (indexOfTodo >= this.arr.length) {
      console.log("Invalid Task");
      return null;
    }
    return this.arr[indexOfTodo];
  }
  clear() {
    // Reset the array.
    this.arr = [];
  }

}

module.exports = Todo;
