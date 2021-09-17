import { useSelector } from "react-redux";
const ReadTodo = () => {
  const list = ["tache1", "tache2", "tache3"];
  const dataFromStore = useSelector((state) => state.Othmane.taskList);
  return (
    <div>
      <h2>Tasks</h2>{" "}
      {dataFromStore
        .filter((item) => item.isDone)
        .map((item, index) => (
          <li key={index}>{item.task.title}</li>
        ))}
    </div>
  );
};
export default ReadTodo;
