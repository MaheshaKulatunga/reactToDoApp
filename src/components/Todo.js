import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, id, priority, deleteTodo }) => (
  <div style={{display: 'inline'}}>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: priority === '2' ? 'red' : priority === '1' ? 'orange' : '',
        display: 'inline'
      }}
    >
      {text}
    </li>
    <button onClick={deleteTodo} style={{display: 'inline'}}>Delete</button>
  </div>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
