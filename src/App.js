import Banner from './componentes/Banner'; // omitir o caminho .js faz com que busque por index.js automaticamente
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
