import { useContext } from "react";
import useAuth from "../hooks/useAuth";
import TasksContext from "./taskContext";

const useTask = () => useContext(TasksContext);

const TaskList = () => {
  const { tasks, dispatch } = useTask();
  const { user } = useAuth();
  return (
    <>
      {user && <p>User : {user}</p>}
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task" + Date.now() },
          })
        }
        className='btn btn-primary my-3'
      >
        Add Task
      </button>
      <ul className='list-group'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            <span className='flex-grow-1'>{task.title}</span>
            <button
              className='btn btn-outline-danger'
              onClick={() => dispatch({ type: "DELETE", id: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
