import React, { useState } from 'react';
import './App.css';
import { ToDoList } from './TodoList';
import Container from '@material-ui/core/Container';
import { AddToDoForm } from './AddToDoForm'
import {ITodoListEntry} from './Interfaces/Interfaces'


function App() {
  const [todoList, settodoList] = useState([{
    priority: 1,
    dateAdded: new Date(),
    title: "Title1",
    description: "OPIS1",

  }, {
    priority: 5,
    dateAdded: new Date(),
    title: "Title2",
    description: "OPIS2",
    dueTo: new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  }
  ] as ITodoListEntry[])

  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="md">
          <AddToDoForm todoList={todoList} setToDoList={settodoList}>
          </AddToDoForm>
          <ToDoList todoList={todoList} setToDoList={settodoList}>
          </ToDoList>
        </Container>
      </header>
    </div>
  );
}

export default App;

