import { Provider } from 'react-redux';
import store from './components/store/store';
import Navigation from './components/screens/Navigation';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  

  return (
    <Provider store={store}>
    < Navigation/>
    <StatusBar translucent={false}  backgroundColor='#FFFFFF'/>
    </Provider>
  );
}


