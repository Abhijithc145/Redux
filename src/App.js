import './App.css';
import {CakeConditer} from './Components/CakeConditer';
import {Provider} from 'react-redux'
import store from './redux/Cakes/store';

function App() {
  console.log(store)
  return (
    <Provider store={store}>

    <div className="App">
       <CakeConditer/>
    </div>
    </Provider>
  );
}

export default App;
