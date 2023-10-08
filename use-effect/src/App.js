import logo from './logo.svg';
import './App.css';
import { PruebasComponet } from './components/PruebasComponet';
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebasComponet></PruebasComponet>
        
        <AjaxComponent></AjaxComponent>
      </header>
    </div>
  );
}

export default App;
