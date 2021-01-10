const todoArray = []

class Todo {
  set add (task) {
    this.MyTodo = {
      todo: task,
      id: todoArray.length + 1,
      completed: false,
    }
    todoArray.push(this.MyTodo)
  }

  set completed (todoName) {
    todoArray.find(el => {
      el.todo === todoName && (el.completed = true)
    })
  }

  set remove (removeEl) {
    removeEl > 0 && todoArray.splice(todoArray.findIndex(todoEl => todoEl.todo === removeEl), 1)
  }

  get showTodo () {
    console.log(this.MyTodo)
  }
}


const MyTodo = new Todo()

MyTodo.add = 'bir'
MyTodo.add = 'ikki'
MyTodo.add = 'uchinchi'

MyTodo.completed = 'ikki'
MyTodo.remove = 'mell'

console.log(todoArray)