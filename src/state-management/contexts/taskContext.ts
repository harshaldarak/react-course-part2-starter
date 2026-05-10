import React, { Dispatch } from "react";
import { Task, taskAction } from "../reducers/taskReducer";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<taskAction>;
}

const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType,
);

export default TasksContext;
