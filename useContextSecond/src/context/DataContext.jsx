import { createContext, useContext } from 'react';

export const DataContext = createContext({
    user : 'hj  ',
    password : 'hi',
});

export const DataProvider = DataContext.Provider;

export default function useData() {
  return useContext(DataContext);
}
