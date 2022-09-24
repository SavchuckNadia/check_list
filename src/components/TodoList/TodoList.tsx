import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { todoActions } from '../../redux/todo-slice'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)
  const todos = state.todos.filter(todo => todo.category === state.currentCategory.name)
  const todosCompleted = todos.filter(todo => todo.completed)
  const todosNotCompleted = todos.filter(todo => !todo.completed)
  const categories = state.categories.map((item) => item.name)
  const noValidTodos = state.todos.filter(todo => !categories.includes(todo.category))

  const removeNoValidTodos = () => {
    dispatch(todoActions.removeAllWithCategory(noValidTodos))
  }

  useEffect(() => {
    removeNoValidTodos()
  }, [noValidTodos])

  return (
    <ul>
      {todosNotCompleted.map(todo => (
        <TodoItem key={todo.id} value={todo.name} id={todo.id} todo={todo} />
      ))}
      {todosCompleted && todosCompleted.map(todo => (
        <TodoItem key={todo.id} value={todo.name} id={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
