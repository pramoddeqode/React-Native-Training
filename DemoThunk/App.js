import {Provider} from 'react-redux';
import configureStore from './src/reduxThunk/store/configureStore';
import Home from './src/screens/Home';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
