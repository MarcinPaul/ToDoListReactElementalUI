import React, { useState } from 'react';
import './App.css';
import CSS from 'csstype';
import { ToDoList } from './TodoList';


type Priority = 1 | 2 | 3 | 4 | 5;

export interface TodoListEntryI {
  dateAdded: Date,
  priority: Priority,
  title: String,
  description?: String,
  dueTo?: Date,
}
export interface TodoListWithSet{
  todoList: TodoListEntryI[],
  setToDoList: React.Dispatch<React.SetStateAction<TodoListEntryI[]>>
}

function App() {
  const [todoList, settodoList] = useState([{
    priority: 1,
    dateAdded: new Date(),
    title: ""
  }, {
    priority: 5,
    dateAdded: new Date(),
    title: "",
    description: "",
    dueTo: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  }
  ] as TodoListEntryI[])


  return (
    <div className="App">
      <header className="App-header">
        <ToDoList todoList={todoList} setToDoList={settodoList}></ToDoList>
      </header>
    </div>
  );
}

export default App;

