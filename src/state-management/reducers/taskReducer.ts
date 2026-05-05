interface Task {
  id: number;
  title: string;
}
interface AddTask {
  type: "ADD";
  task: Task;
}
interface DeleteTask {
  type: "DELETE";
  id: number;
}

type taskAction = AddTask | DeleteTask;
const taskReducer = (tasks: Task[], action: taskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((f) => f.id !== action.id);
  }
};

export default taskReducer;
