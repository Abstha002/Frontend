// todos app



import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContext, TodoProvider } from './context/TodoContext'


function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prev)=>{
      if (prev.id===id) {
        todo
      }else{
        prev
      }
    }))
  
  }
  const deleteTodo=(id)=>{
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const togoleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo===id?
    {...prevtodo,completed:!prevtodo.completed}
    :prevtodo))
  }
  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,togoleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        <TodoItem/>
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
