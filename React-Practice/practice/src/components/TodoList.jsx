import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a task" />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
