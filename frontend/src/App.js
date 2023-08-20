
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Registrar from "./pages/registrar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registrar" element={<Registrar/>} />
      </Routes>
    </Router>
  );
}

export default App;
