import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
class App extends Component {
  state = {
    todoList: [],
  };
  componentDidMount = () => {
    fetch("http://127.0.0.1:3000/api/v1/todos")
      .then((res) => res.json())
      .then((data) => {
        let todoList = [];
        for (let i = 0; i < data.message.length; i++) {
          todoList.push(data.message[i]);
        }
        console.log(todoList);
        this.setState({ todoList });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleEnter = (e) => {
    if (e.keyCode === 13) {
      let userId = 1;
      let completed = false;
      let id = Math.floor(Math.random() * 10000);
      let newTodoList = {
        id,
        title: e.target.value,
        completed,
        userId,
      };
      fetch("http://127.0.0.1:3000/api/v1/todos", {
        mode: "cors",
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoList),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ todoList: [...this.state.todoList, newTodoList] });
        })
        .catch((err) => {
          console.log(err);
        });
      // let newTodo = {
      //   title: e.target.value,
      // };
      // this.setState({ todoList: [...this.state.todoList, newTodo] });
      e.target.value = "";
    }
  };
  handleClick = (e) => {
    let index = e.target.id;
    let todoList = this.state.todoList;
    let id = todoList[index].id;
    fetch(`http://127.0.0.1:3000/api/v1/todos/${id}`, {
      mode: "cors",
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        todoList.splice(index, 1);
        this.setState({ todoList });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <TodoList
          todoList={this.state.todoList}
          handleEnter={this.handleEnter}
          handleClick={this.handleClick}
        />
      </>
    );
  }
}

export default App;
