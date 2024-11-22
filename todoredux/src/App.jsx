import './App.css'
import {Provider} from 'react-redux'
import { store } from './store/store'
import Form from './components/Form'
import List from './components/List'

function App() {
  

  return (
    <Provider store={store}>
      <h1>hoiiiiii</h1>
      <Form />
      <List />
    </Provider>
  )
}

export default App
