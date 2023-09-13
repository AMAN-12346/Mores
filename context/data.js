import { useState, useEffect, useContext, createContext } from "react";

const DataContext = createContext();
const DataProvider = ({ children }) => {

  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);
export { DataProvider, useData };
