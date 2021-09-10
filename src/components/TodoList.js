import React from "react";

const TodoList = () => {
    return (
        <div class="todo-container">
          <ul class = "todo-list">
            {todos.map(todo => (
              <Todo />
            ))}
          </ul>
        </div>
    );
};

export default TodoList;

