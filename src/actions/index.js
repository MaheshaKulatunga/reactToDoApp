
function getInit(){
  var nextTodoId;
  if (JSON.parse(localStorage.getItem('todos')).length > 0) {
    nextTodoId = JSON.parse(localStorage.getItem('todos').length);
  }
  else {
    nextTodoId = 0;
  }
  return nextTodoId;
}
var index = getInit();
export const addTodo = todo => ({
  type: 'ADD_TODO',
  id: index++,
  todo
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const updateTodo = (id, priority) => ({
  type: 'UPDATE_PRIORITY',
  id,
  priority
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
