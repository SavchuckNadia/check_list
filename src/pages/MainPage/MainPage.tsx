import CreateTodo from '../../components/CreateTodo/CreateTodo'
import TodoList from '../../components/TodoList/TodoList'
import styles from './MainPage.module.scss'

interface MainPageProps {
  isOpenSidebar: boolean
}

function MainPage({isOpenSidebar}: MainPageProps) {
  return (
    <div className={isOpenSidebar ? `${styles.container} ${styles.not_active}` : `${styles.container}`}>
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default MainPage