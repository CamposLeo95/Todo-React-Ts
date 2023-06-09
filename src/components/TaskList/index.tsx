import { ITask } from "../../interfaces/Task";

import styles from "./TaskList.module.css"

export interface ITaskListProps {
  tasklist: ITask[],
  handleDelete(id: number): void,
  handleEdit(task: ITask): void
}

export default function TaskList ({ tasklist, handleDelete, handleEdit }: ITaskListProps) {
  return (
    <>
      {tasklist.length > 0 ? (
        tasklist.map((task => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick = {() => handleEdit(task)}></i>
              <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
            </div>
          </div>
        )))
      ) : (
        <p>Não há tarefas</p>
      )}
    </>
  );
}
