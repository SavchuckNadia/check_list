import { useEffect } from 'react'
import CategoryTodo from '../CategoryTodo/CategoryTodo'
import styles from './CategoryList.module.scss'
import { fetchCategories } from '../../redux/getDefaultCategories'
import { saveState } from '../../localStorage'
import { useAppSelector } from '../../hooks/redux-hooks'
import { useCategories } from '../../hooks/useCategories'
import { IStore } from '../../redux/interfaces/interfaces'

function CategoryList() {
  const state = useAppSelector((state: IStore) => state)
  const categories = state.categories
  const currentCategory = state.currentCategory
  const filterCategories = useCategories(categories, state.filter.query);


  const fetchDefaultCategories = async () => {
    const result = await fetchCategories()
    const DefaultState = {
      categories: result,
      currentCategory: { name: categories[0]?.name || '' },
      todos: [],
      filter: {
        query: ''
      }
    }
    saveState(DefaultState);
  }

  useEffect(() => {
    const serializedState = localStorage.getItem("redux");
    if (!serializedState) fetchDefaultCategories()
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