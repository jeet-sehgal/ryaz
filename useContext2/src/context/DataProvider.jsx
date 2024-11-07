import React, { useState } from 'react'
import DataContext from './DataContext'

function DataProvider({children}) {
    const [theme,setTheme] = useState(true)
    const [color,setColor] = useState("light")
  return (
    <DataContext.Provider value={{theme,setTheme,color,setColor}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider