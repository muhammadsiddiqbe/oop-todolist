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

form.addEventListener('submit', evt => {
  evt.preventDefault()
  
  let MyInputValue = inputTodo.value.trim()
  
  if (!MyInputValue) {
    return
  }
  list.innerHTML = null

  MyTodo.add = MyInputValue
  inputTodo.value = null
  console.log(todoArray)

  todoArray.map(el => {
    let newLi = document.createElement('li')
        // newLi.textContent = el.todo
        newLi.dataset.id =  el.id
        newLi.classList.add('todo')

    let todoCheckbox = document.createElement('input')
        todoCheckbox.setAttribute("type", "checkbox")
        newLi.appendChild(todoCheckbox)

    let newP = document.createElement('p')
        newP.textContent = el.todo
        newLi.appendChild(newP)

        list.appendChild(newLi)
  })
})
