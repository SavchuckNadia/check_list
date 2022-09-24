import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from './redux/store';
import { debounce } from "debounce";
import { saveState } from './localStorage';


store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 200)
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

