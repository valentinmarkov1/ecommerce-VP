import './App.css';
import Navbar from './componentes/Navbar';
import Producto from './componentes/Producto';
import Productos from './componentes/Productos';


function App() {
  return (
    <div className="App">
     
     <Navbar></Navbar>
     <Productos></Productos>
     {/* <Producto></Producto> */}
    
    </div>
  );
}

export default App;
