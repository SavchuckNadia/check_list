import { useEffect } from 'react'
import CategoryTodo from '../CategoryTodo/CategoryTodo'
import styles from './CategoryList.module.scss'
import { fetchCategories } from '../../redux/getDefaultCategories'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { useCategories } from '../../hooks/useCategories'
import { ICategoryTodo, IStore } from '../../redux/interfaces/interfaces'
import { categoryActions } from '../../redux/category-slice'

function CategoryList() {
  const state = useAppSelector((state: IStore) => state)
  const dispatch = useAppDispatch()
  const categories = state.categories
  const currentCategory = state.currentCategory
  const filterCategories = useCategories(categories, state.filter.query);


  const fetchDefaultCategories = async () => {
    const result: ICategoryTodo[] = await fetchCategories()
    if (result) {
      result.forEach((category: ICategoryTodo) => { dispatch(categoryActions.addCategory(category)) })
    }
  }

  useEffect(() => {
    if (categories.length === 0) {
      fetchDefaultCategories()
    }
  }, [])


  return (
    <div className={styles.container}>
      {filterCategories.map((category) => (
        <CategoryTodo key={category.id} id={category.id} name={category.name} isActive={category.name === currentCategory.name} filterCategories={filterCategories} />
      ))}
    </div>
  )
}
export default CategoryList