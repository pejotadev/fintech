import React from "react";
import useFetch from "../Hooks/useFetch";
import getDate from "../Utils/getDate";
import { ISales } from "../Types/ISales";
import { IDataContext } from "../Types/IDataContext";

const DataContext = React.createContext<IDataContext | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context) 
    throw new Error("useDataContext must be used within a DataContextProvider");
  return context;
}

export const DataContextProvider = (
  { children }: React.PropsWithChildren
) => {
  const [initialDate, setInitialDate] = React.useState(getDate({}));
  const [finalDate, setFinalDate] = React.useState(getDate({ndays: 30}));
  const {data, loading, error} = useFetch<ISales[]>(`https://data.origamid.dev/vendas/?inicio=${initialDate}&fim=${finalDate}`);  

  return <DataContext.Provider 
  value={{data, loading, error, initialDate, setInitialDate, finalDate, setFinalDate}}
  >
    {children}
  </DataContext.Provider>;
}