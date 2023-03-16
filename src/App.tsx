//Hooks
import { useState } from "react"

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import Modal from "./components/Modal"

//Styles
import styles from './App.module.css'

//Interfaces
import { ITask } from "./interfaces/Task"


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task)=>{
      return task.id !== id
    }))
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')

    display ? modal!.classList.remove('hide') : modal!.classList.add('hide')
  }

  const editTask = (task: ITask):void =>{
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) =>{

    const updateTask: ITask = {id, title, difficulty}

    const updateItens = taskList.map((task => {
      return task.id === id ? updateTask : task
    }))

    setTaskList(updateItens)
    hideOrShowModal(false)

  }

  return (
    <>
      <Modal 
        children={
          <TaskForm 
          btnText="Editar Tarefa" 
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />} 
      />
      <Header /> 
      <main className={styles.main}>
        <h2>O que vai fazer?</h2>
        <TaskForm 
          btnText="Criar tarefa" 
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <h2>Suas tarefas</h2>
        <TaskList 
          tasklist={taskList} 
          handleDelete={deleteTask} 
          handleEdit={editTask}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
