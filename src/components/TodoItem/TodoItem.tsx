import styles from "./TodoItem.module.scss"
import CheckBox from '../UI/checkbox/CheckBox'
import deleteIcon from "../../assets/svg/trash.svg"
import { ITodo } from '../../redux/interfaces/interfaces'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { todoActions } from '../../redux/todo-slice'


interface TodoItemProps {
  value: string,
  id: string,
  todo: ITodo
}

function TodoItem({ value, id, todo }: TodoItemProps) {
  const dispatch = useAppDispatch()

  const toggle = () => {
    dispatch(todoActions.toggleTodo(todo))
  }

  return (
    <li className={styles.todo_container}>
      <CheckBox id={id} value={value} item={todo} onChangeHandler={toggle} />
      <img src={deleteIcon} alt="" className={styles.delete_icon} onClick={() => dispatch(todoActions.removeTodo(todo))} />
    </li>
  )
}

export default TodoItem
