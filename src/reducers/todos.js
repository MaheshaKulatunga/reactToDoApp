function getInitTodos(){
  var state;
  if (JSON.parse(localStorage.getItem('todos')).length > 0) {
    state = JSON.parse(localStorage.getItem('todos'));
  }
  else {
    state = [];
  }
  return state;
}

const todos = (state = getInitTodos(), action) => {
  var newState;

  switch (action.type) {
    case 'ADD_TODO':
      newState = [
        ...state,
        {
          id: action.id,
          text: action.todo.text,
          completed: false,
          priority: action.todo.priority
        }
      ]

      localStorage.setItem('todos', JSON.stringify(newState));

      return newState
    case 'TOGGLE_TODO':
      newState = state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )

      localStorage.setItem('todos', JSON.stringify(newState));

      return newState
    case 'UPDATE_PRIORITY':
      newState = state.map(todo =>
        (todo.id === action.id)
          ? {...todo, priority: action.priority}
          : todo
      )

      localStorage.setItem('todos', JSON.stringify(newState));

      return newState
    case 'DELETE_TODO':
      newState = state.filter(todo => todo.id !== action.id)

      localStorage.setItem('todos', JSON.stringify(newState));

      return newState
    default:
      return state
  }
}

export default todos
