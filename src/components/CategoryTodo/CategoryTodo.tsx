import { useEffect } from 'react'
import styles from './CategoryTodo.module.scss'
import crossIcon from "../../assets/svg/cross.svg"
import { useAppDispatch } from '../../hooks/redux-hooks'
import { currentCategoryActions } from '../../redux/currentCategory-slice'
import { categoryActions } from '../../redux/category-slice'
import { ICategoryTodo } from '../../redux/interfaces/interfaces'

interface CategoryTodoProps {
  name: string,
  id: string
  isActive: boolean,
  filterCategories: ICategoryTodo[]
}

function CategoryTodo({ name, isActive, id, filterCategories }: CategoryTodoProps) {
  const dispatch = useAppDispatch()

  const changeCategory = () => {
    dispatch(currentCategoryActions.changeCurrentCategory(name))
  }
  const removeCategory = () => {
    dispatch(categoryActions.removeCategory(id))
    dispatch(currentCategoryActions.changeCurrentCategory(filterCategories[0].name))
  }

  useEffect(() => {
    dispatch(currentCategoryActions.changeCurrentCategory(filterCategories[0].name))
  }, [dispatch, filterCategories])

  return (
    <div className={isActive ? `${styles.container} ${styles.active}` : `${styles.container}`}>
      <div className={styles.category_icon} onClick={changeCategory}></div>
      <p className={styles.category_name}>{name}</p>
      {isActive &&
        <img src={crossIcon} alt="" className={styles.category_delete} onClick={removeCategory} />}
    </div>
  )
}

export default CategoryTodo