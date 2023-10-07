import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { EjercicIoComponent } from './components/EjercicIoComponent';

function App() {
  let anhio = new Date().getTime();
  
  const fecha = new Date();
  const yearActual = fecha.getFullYear(); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esro es un repaso de React
        </p>
        &nbsp;
        <EjercicIoComponent  year={yearActual}/>
        &nbsp;
        <PrimerComponente />
        &nbsp;
        <SegundoComponente />
      </header>
    </div>
  );
}

export default App;
