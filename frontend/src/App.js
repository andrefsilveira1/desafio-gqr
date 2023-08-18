import Menu from "./components/menu";
import SideBar from "./components/sidebar";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="m-5 mt-5 d-flex main-container">
        <SideBar/>
        <div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
