import { useEffect, useState } from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { useAppSelector } from './hooks/redux-hooks';
import { useMediaQuery } from './hooks/useMediaQuery';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const state = useAppSelector(state => state)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const isMobile = useMediaQuery('(max-width: 576px)')

  useEffect(() => {
    !isMobile && setIsOpenSidebar(false)
  }, [isMobile])

  return (
    <main className='wrapper'>
      <Sidebar setIsOpenSidebar={setIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
      <MainPage isOpenSidebar={isOpenSidebar} />
      {!isOpenSidebar && <button className='btn-openSidebar' onClick={() => setIsOpenSidebar(prevState => !prevState)}>
        Choose category
        {state.categories.length > 0 &&
          <>
            <hr />
            <span>{state.currentCategory.name}</span>
          </>
        }
      </button>}
    </main>
  );
}

export default App;
