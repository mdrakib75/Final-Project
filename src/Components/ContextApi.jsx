import axios from "axios";
import { createContext, useEffect, useState } from "react"

let ApiData = createContext();
const ContextApi = ({children}) => {
    let [info,setInfo] = useState([])

    let getData = () => {
        axios.get("")
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <>
            <ApiData.Provider value="ami">{children}</ApiData.Provider>
        </>
    )
}
export {ContextApi,ApiData};