import React from 'react';
import {Provider} from 'react-redux';
import BookContainer from './components/PenContainer'
import store from './redux/store';
import './App.css';
import HookBookContainer from './components/HookPenContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <HookBookContainer />
        <BookContainer />
    </div>
    </Provider>
  );
}

export default App
