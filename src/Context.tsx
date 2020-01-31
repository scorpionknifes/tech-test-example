import React, { createContext, useState, useEffect } from 'react';

// Interface for Context
interface IContext {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>,
    data: string[][],
    setData(data: string[][]): any,
}

// Export Provider and Context
export const Context = createContext({} as IContext);

export function Provider(props: any) {
    const [page, setPage] = useState<string>("generate")
    const [data, setLocalData] = useState<string[][]>([])

    // On Load React will get data from localstorage
    useEffect(()=>{
        setLocalData(JSON.parse(localStorage.getItem("data")|| '[]'))
    }, [])

    const setData = (data: string[][]) => {
        localStorage.setItem("data", JSON.stringify(data))
        setLocalData(data)
    }
  return (
    <Context.Provider value={{
        page, setPage,
        data, setData,
    }}>{props.children}</Context.Provider>
  );
}