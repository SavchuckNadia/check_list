import CategoryList from '../CategoryList/CategoryList'
import SearchList from '../SearchList/SearchList'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  setIsOpenSidebar: (isOpen: boolean) => void,
  isOpenSidebar: boolean
}

function Sidebar({ setIsOpenSidebar, isOpenSidebar }: SidebarProps) {
  return (
    <div className={isOpenSidebar ? `${styles.sidebar} ${styles.active}` : `${styles.sidebar}`}>
      <SearchList />
      <CategoryList />
      <button className={styles.closeBtn} onClick={() => setIsOpenSidebar(false)}></button>
    </div>
  )
}

export default Sidebar
