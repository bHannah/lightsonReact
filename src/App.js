import './App.css';
import Lampak from './components/Lampak';
import { useState } from 'react';

function App() {
  const [lista, setLista]=useState([false,false,false,false,false,false,false,false,false])
  function katt(adat){
    const slista=[...lista]
    if(slista[adat]==true){
      slista[adat]=false
    }else{
      slista[adat]=true
    }
    setLista([...slista])
    console.log(lista)
  }
  //Lista feltoltese

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lights On</h1>
      </header>
      <article>
        <Lampak lista={lista} katt={katt}/>
      </article>
      <footer>Both Sella</footer>
    </div>
  );
}

export default App;
