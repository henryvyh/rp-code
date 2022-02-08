import ReactDOM from "react-dom";
import TaskLoading from "./TaskLoading";

class TaskService {
  static myRef: any = document.getElementById("task");
  static show = () => {
    ReactDOM.render(<TaskLoading />, TaskService.myRef);
  };
  static hide = () => {
    ReactDOM.render(<></>, TaskService.myRef);
  };
}
export default TaskService;
