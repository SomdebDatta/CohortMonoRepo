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
    this.todo = [];
  }
  add(x) {
    this.todo.push(x);
  }
  remove(index) {
    this.todo.splice(index, 1);
  }
  update(index, x) {
    if (index >= this.todo.length) {
      return null;
    }
    this.todo[index] = x;
  }
  getAll() {
    return this.todo;
  }
  get(index) {
    if (index >= this.todo.length) {
      return null;
    }
    return this.todo[index];
  }
  clear() {
    this.todo = [];
  }
}
const todoList = new Todo();
todoList.add('Task 1');
console.log(todoList.getAll());
todoList.add('Task 2');
console.log(todoList.getAll());
todoList.add('Task 3');
console.log(todoList.getAll());
console.log(todoList.get(0));
module.exports = Todo;
