
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Registrar from "./pages/registrar";
import Detalhar from './pages/detalhar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registrar" element={<Registrar/>} />
        <Route path="/detalhar/:id" element={<Detalhar/>} />
      </Routes>
    </Router>
  );
}

export default App;
