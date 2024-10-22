import React from 'react'
import Lampa from './Lampa'

function Lampak(props){
    return(
        <>
        {props.lista.map((elem, index)=>{
            return (<Lampa jel={elem} key={index} index={index}/>)    
        })}
    </>
    )
}

export default Lampak