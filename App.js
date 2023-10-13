import { Provider } from 'react-redux';
import store from './components/store/store';
import Navigation from './components/screens/Navigation';




export default function App() {
  

  return (
    <Provider store={store}>
    < Navigation/>
    </Provider>
  );
}


