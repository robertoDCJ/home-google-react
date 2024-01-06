import Nav from './componentes/Nav';
import './App.css';
import Logo from './componentes/Logo';
import Seach from './componentes/Seach';
import Button from './componentes/Button';
import Checkup from './componentes/Checkup';
import Footer1 from './componentes/Footer1';
import Footer2 from './componentes/Footer2.js';

function App() {
  return (
    <div className="Container">
      <Nav/>
      <div className="Mid">
        <Logo/>
        <Seach/>
        <div className="Buttons">
          <Button parametro="Pesquisa Google"/>
          <Button parametro="Estou com sorte"/>
        </div>
        <Checkup/>
      </div>
      <div className="Footer">
       <Footer1/>
       <Footer2/>
      </div>
    </div>
  );
}

export default App;
