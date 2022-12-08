import Programa from "./programa/Programa"
import './App.css';
import { Container } from "./styles";

function App() {
  return (
    <Container className="App">
      <div>
        <h1>CALCULADORA DE HORAS TRABALHADAS</h1>
        <Programa />
      </div>
    </Container>
  );
}

export default App;
