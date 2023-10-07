import logo from './logo.svg';
import './App.css';
import { PruebasComponet } from './components/PruebasComponet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasComponet></PruebasComponet>
      </header>
    </div>
  );
}

export default App;
