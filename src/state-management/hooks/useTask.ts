import { useContext } from "react";
import TasksContext from "../contexts/taskContext";

const useTask =() => useContext(TasksContext)

export default useTask