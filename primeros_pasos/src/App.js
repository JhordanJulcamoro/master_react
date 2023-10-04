import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Cargando mi primer componente */}
        <div className='componente'>
          <hr />
          <TercerComponente 
            nombre="Jhordan"
            apellido="Julcamoro" />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
