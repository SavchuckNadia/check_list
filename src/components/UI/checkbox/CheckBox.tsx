import { ITodo } from '../../../redux/interfaces/interfaces'
import styles from './CheckBox.module.scss'

interface CheckBoxProps {
  id: string,
  value: string,
  item: ITodo,
  onChangeHandler: () => void
}

function CheckBox({ id, value, item, onChangeHandler }: CheckBoxProps) {
  return (
    <div className={styles.container}>
      <input id={id} type="checkbox" className={styles.checkbox} value={value} name={value} checked={item.completed} onChange={onChangeHandler}
      />
      <label htmlFor={id} className={`checked${styles.active}`}>{value}</label>
    </div>
  )
}

export default CheckBox
