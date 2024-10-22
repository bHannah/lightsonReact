import React, { useContext } from 'react'
import "./lampa.css"
import { KattContext } from '../context/KattContext'

function Lampa(props){
    const {katt} = useContext(KattContext)
    function kattintas(){
        katt(props.index)
    }
    return(
        <div className={`lampa ${props.jel? "felkapcsolva":"lekapcsolva"}`} onClick={()=>kattintas()}></div>
    )
}

export default Lampa