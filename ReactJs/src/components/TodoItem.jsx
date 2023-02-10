import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    let { title, handleClick, newId } = this.props;
    return (
      <>
        <div className='container'>
          <div className='container1'>
            <div>
              <input type='radio' />
            </div>
            <div>
              <p className='list-name'>{title}</p>
            </div>
          </div>
          <div className='container2' onClick={handleClick}>
            <ion-icon id={newId} name='close-circle-outline'></ion-icon>
          </div>
        </div>
      </>
    );
  }
}

export default TodoItem;
