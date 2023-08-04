import { useState } from "react"
import Header from "./components/Header"
import Forms from "./components/Forms"
import Stats from "./components/Stats"
import TodoItem from "./components/TodoItem"
import TodoList from "./components/TodoList"

function App() {

  const DEFAULT_TODOS = [
    {
      "id": '1',
      "title": "delectus aut autem",
      "completed": true
    },
    {
      "id": '2',
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": '3',
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "id": '4',
      "title": "et porro tempora",
      "completed": true
    },
    {
      "id": '5',
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)
  
  const handleSubmit = (newTodo) => {
    
    setTodos([...todos, newTodo])

  }
  
  const handleCompleted = (event) => {
    // console.log(event)
    const isChecked = event.target.checked
    const idSeleted = event.target.dataset.id

    const newTodos = todos.map(todo => {
      if (todo.id === idSeleted) {
        return { ...todo, completed: isChecked }
      }
      return todo
    })

    console.log(newTodos)

    setTodos(newTodos)
  }

  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    console.log(newTodos)

    setTodos(newTodos)
  }

  

  const handleClearTodos = (event) => {
    const newTodos = todos.filter(todo => todo.completed === false)

    setTodos(newTodos)
  }

  return (
    <>
      <main className="w-full max-w-sm mx-auto mt-10 rounded-lg bg-yellow-100 border border-yellow-600 p-4 shadow-lg">
        <Header title='TODO APP'/>

        <Forms onSubmit={handleSubmit}></Forms>

        <Stats todos={todos} onClearTodos={handleClearTodos}></Stats>

        <section className="mt-5">
          <TodoList
            todos={todos}
            onCompleted={handleCompleted}
            onRemoveTodo={handleRemoveTodo}
          />
        </section>
      </main>
    </>
  )
}

export default App