import React from 'react'
import TodoItem from './TodoItem'

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center my-3'>
        Todos List
      </h3>
      {props.todos.map((todos) => {
        return (
      <TodoItem todos = {todos}  onDelete = {props.onDelete}/>
        )
      })}
      {/* {props.todos.length === 0 ? "No Todos to display"
        : props.todos.map((todos) => {
          return (
            <div className= "todo" key = {todos.sno}>
              <h4>
                {todos.title}
              </h4>
              <p>
                {todos.desc}
              </p>
              </div>
        })} */}
    </div>
  )
}

export default Todos
