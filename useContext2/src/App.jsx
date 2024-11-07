import './App.css'
import DataProvider from './context/DataProvider'
import Btn from './components/Btn'
import Card from './components/Card'

function App() {
 
  return (
    <DataProvider>
      <Btn />
      <Card />
    </DataProvider>
  )
}

export default App
