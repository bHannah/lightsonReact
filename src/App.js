import './App.css';
import Lampak from './components/Lampak';
import { useContext } from 'react';
import { KattContext } from './context/KattContext';

function App() {
  const {lista} = useContext(KattContext)
  //Lista feltoltese

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lights On</h1>
      </header>
      <article>
        <Lampak lista={lista}/>
      </article>
      <footer>Both Sella</footer>
    </div>
  );
}

export default App;
