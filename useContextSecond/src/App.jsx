
import './App.css'
import Card from './context/components/card'
import { DataProvider } from './context/DataContext'

function App() {
  const user="jeet"
  const password="jeeet"

  return (
    <DataProvider value={{user,password}}>
      <Card />
    </DataProvider>
  )
}

export default App
