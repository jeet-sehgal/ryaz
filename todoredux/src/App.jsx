import './App.css'
import {Provider} from 'react-redux'
import { store } from './store/store'
import Form from './components/Form'
import List from './components/List'

function App() {
  

  return (
    <Provider store={store}>
      <h1 style={{display:"inline"}}>TO DO</h1><sub>never ends</sub> 
      <Form />
      <List />
    </Provider>
  )
}

export default App
