import { Children, ReactNode, useReducer } from "react";
import TasksContext from "./contexts/taskContext";
import taskReducer from "./reducers/taskReducer";
interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
