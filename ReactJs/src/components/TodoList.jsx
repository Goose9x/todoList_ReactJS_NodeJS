import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  render() {
    let { todoList, handleEnter, handleClick } = this.props;
    let result = undefined;
    if (todoList.length === 0) {
      result = (
        <div>
          <div className='text'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1600/1600145.png'
              alt=''
            />
            <p>Add your first todo</p>
            <p>What do you want to get done today ?</p>
          </div>
        </div>
      );
    } else {
      result = todoList.map((e, i) => (
        <TodoItem title={e.title} key={i} handleClick={handleClick} newId={i} />
      ));
    }
    return (
      <>
        <h1 className='title'>todos</h1>
        {result}
        <div className='form-input' action='' onKeyDown={handleEnter}>
          <input
            type='text'
            placeholder='E.g. Tell your crush that you love her'
          />
        </div>
      </>
    );
  }
}

export default TodoList;
