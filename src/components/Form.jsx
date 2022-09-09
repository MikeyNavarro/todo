import React, { useState } from "react";

const Form = () => {
  // The new todo is an empty string. Eventually we will write a function that pushes our string into an array of all of my todo tasks.
  const [newTodo, setNewTodo] = useState("");

  // todos are my array of already exisiting current task that eventually we will be mapping over.
  const [todos, setTodos] = useState([]);

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    // Edge case for empty to do list

    if (newTodo.length === 0) {
      return;
    }

    // We want our todos to know two things. What they are named and if they are completed, so we use databinding by making an object that can track multiple properties of our todo

    const todoItem = {
      name: newTodo,
      complete: false,
    };

    // todos is an array. .. todos we are basically writing the enite array out and the comma includes the new todo item. We are creating a brand new array while inclucing the newTodo item
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  // handle to delete is an arrow function that takes the unique key and creates a new array by filitering my old array minus the unique key that I pass it

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    // We then set our current todos equal to my new array that just filtered itself
    setTodos(filteredTodos);
  };

  return (
    <div className="card mt-5">
      <div className="card-header">
        <h1 className="text-center">Todo List</h1>
      </div>
      <div className="card-body">
        {/* Whenever we work with forms we will have an obsubmit that calls a function */}
        <form
          onSubmit={(event) => {
            handleNewTodoSubmit(event);
          }}
        >
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setNewTodo(event.target.value);
            }}
            value={newTodo}
          />
          <div className="">
            <button className="btn btn-secondary mt-3">Add</button>
          </div>
        </form>
        {/* I am mapping over my todos array and using jsx to render html. Map is a call back function and it wants what we are currently itterating over and then the index */}

        {/* the unique id is the index */}

        {todos.map((todo, i) => {
          const todoClasses = [];
          if (todo.complete) {
            todoClasses.push("line-through");
          }
          return (
            <div key={i}>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={(event) => {
                  handleToggleComplete(i);
                }}
              />
              <p className={todoClasses.join("")}>{todo.name}</p>
              {/* When the delete button is clicked our on click will trigger a handle todo delete function. Our function needs to the unique key to delete the right todo list. We must pass the index of the array in  */}
              <button
                onClick={(event) => {
                  handleTodoDelete(i);
                }}
                className="btn btn-primary mt-2"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
