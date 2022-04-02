import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Curency from './pages/Curency';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Currency/:id' element={<Curency />}/>
          <Route
          path="*"
          element={<Homepage/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
