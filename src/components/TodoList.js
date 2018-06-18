import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }) => (
  <ul>
    {todos.map(todo =>
      <div key={todo.id}>
      <Todo
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
        style={{display: 'inline'}}
      />
      <select value={todo.priority} onChange={(e) => updateTodo(todo.id, e.target.value)} style={{display: 'inline'}}>
        <option value="2">High</option>
        <option value="1">Mid</option>
        <option value="0">Low</option>
      </select>
      </div>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
