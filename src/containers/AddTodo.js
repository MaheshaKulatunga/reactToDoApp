import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  let select
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo({text:input.value,priority:select.value}))
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <select ref={node => select = node}>
          <option value="2">High</option>
          <option value="1">Mid</option>
          <option value="0">Low</option>
        </select>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
