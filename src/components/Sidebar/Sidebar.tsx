import CategoryList from '../CategoryList/CategoryList'
import SearchList from '../SearchList/SearchList'
import styles from './Sidebar.module.scss'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SearchList />
      <CategoryList />
    </div>
  )
}

export default Sidebar
