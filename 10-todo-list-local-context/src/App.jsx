import { useEffect, useState } from "react";
import { ToDoProvider } from "./contexts";
import "./App.css";
import { ToDoForm, ToDoItem } from "./components/";

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((item) => item.id !== id));
  };
  const updateToDo = (id, todo) => {
    setToDos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };
  const toggleComplete = (id) => {
    setToDos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // runs once on start
  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem("toDos"));
    if (toDos && toDos.length) {
      setToDos(toDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDoProvider
      value={{ toDos, addToDo, deleteToDo, updateToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your ToDos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {toDos.map((todo) => (
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
