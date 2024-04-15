import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Завдання 1" },
    { id: 2, name: "Завдання 2" },
    { id: 3, name: "Завдання 3" },
  ]);
  const [newTaskName, setNewTaskName] = useState("");

  const addTask = () => {
    if (!newTaskName) return;
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask = {
      id: newId,
      name: newTaskName,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName("");
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <div className="container-content">
        <input
          className="input"
          placeholder="new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button className="addBtn" onClick={addTask}>
          Додати
        </button>
        <ul className="list">
          {tasks.map((task) => (
            <li className="list-items" key={task.id}>
              {task.name}
              <button className="addBtn" onClick={() => deleteTask(task.id)}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
