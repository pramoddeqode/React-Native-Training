import { Provider } from 'react-redux';

import { store } from './src/redux/store';
import Home from './src/screens/Home';

 
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
