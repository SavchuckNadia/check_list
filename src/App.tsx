import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <main className='wrapper'>
      <Sidebar />
      <MainPage />
    </main>
  );
}

export default App;
