import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      setIsLoading(false);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("component has mounted");
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
