
import './App.css'
import Card from './context/components/card'
import CardSec from './context/components/CardSec'
import { DataProvider } from './context/DataContext'

function App() {
  const user="jeet"
  const password="jeeet"

  return (
    <DataProvider value={{user,password}}>
      <CardSec />
      {user}
      <Card />
    </DataProvider>
  )
}

export default App
