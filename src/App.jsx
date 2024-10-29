import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    } 
  }, [])
  
  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    setTodos(updatedTodos)
  }
  
  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }
  

  const handleEdit = (id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)

    let newTodos = todos.filter(item => item.id !== id)
    saveToLS(newTodos)
  }

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false, timestamp: Date.now() }]
    saveToLS(newTodos)
    setTodo("")
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTodos = todos.filter(item => item.id !== id)
      saveToLS(newTodos)
    }
  }

  const handleChange = (e)=> {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name
    const newTodos = todos.map(item =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    )
    saveToLS(newTodos)
  }

  const sortedTodos = todos.slice().sort((a, b) => {
    if (a.isCompleted === b.isCompleted) {
      return a.timestamp - b.timestamp 
    }
    return a.isCompleted - b.isCompleted 
  })
  

  return (
    <>
    <Navbar/>
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
      <h1 className='font-bold text-center text-3xl'>UpNext - Always know what's next</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-xl font-bold'>Add a Todo</h2>
          <div className="flex">
          <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-slate-700 hover:bg-slate-800 mx-2 disabled:bg-slate-400 p-4 py-2 text-sm font-bold text-white rounded-full'>Save</button>
          </div>
        </div>
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-3/4 mx-auto my-2'></div>
        <h2 className='text-xl font-bold'>Your Todo's</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'> No Todos to display </div> }
          {sortedTodos.map(item=>{
            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex my-3 justify-between">
                <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id='' />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>
                <div className="buttons flex h-full">
                  <button onClick={()=>handleEdit(item.id)} className='bg-slate-700 hover:bg-slate-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
                  <button onClick={()=>{handleDelete(item.id)}} className='bg-slate-700 hover:bg-slate-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><MdDelete /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
