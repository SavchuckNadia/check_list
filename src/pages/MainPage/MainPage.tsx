import CreateTodo from '../../components/CreateTodo/CreateTodo'
import TodoList from '../../components/TodoList/TodoList'
import styles from './MainPage.module.scss'

function MainPage() {
  return (
    <div className={styles.container}>
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default MainPage