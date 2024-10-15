import React from 'react'
import "./lampa.css"

function Lampa(props){
    function katt(){
        props.katt(props.index)
    }
    return(
        <div className={`lampa ${props.jel? "felkapcsolva":"lekapcsolva"}`} onClick={()=>katt()}></div>
    )
}

export default Lampa