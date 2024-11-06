import React, { useState } from "react";
import JeetContext from "./JeetContext"

function JeetContextProvider({ children }) {
  const [jeet, setJeet] = useState(null);
  return (
    <JeetContext.Provider value={{ jeet, setJeet }}>
      {children}
    </JeetContext.Provider>
  );
}

export default JeetContextProvider;
