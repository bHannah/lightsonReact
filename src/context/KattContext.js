import { createContext, useState } from "react";

export const KattContext=createContext("")

export const KattProvider = ({children})=> {
    const [lista, setLista]=useState([false,false,false,false,false,false,false,false,false])
    function katt(adat){
    const slista=[...lista]
    if(slista[adat]===true){
      slista[adat]=false
    }else{
      slista[adat]=true
    }
    setLista([...slista])
    }
    
    return(<KattContext.Provider value={{lista, katt}}>
        {children}
    </KattContext.Provider>
    )
}