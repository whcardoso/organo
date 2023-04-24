import Banner from './componentes/Banner'; // omitir o caminho .js faz com que busque por index.js automaticamente
import CampoTexto from './componentes/CampoTexto/index.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto />
    </div>
  );
}

export default App;
