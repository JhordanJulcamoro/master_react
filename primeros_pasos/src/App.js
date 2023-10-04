import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {
  const ficha_medica = {
    altura:"187cm",
    grupo:"O+",
    estado:"Bueno",
    alergias:"Aresetemina"

  }
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
            // nombre="Zuar"
            // apellido="Huaripata" 
            ficha= {ficha_medica} />
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
