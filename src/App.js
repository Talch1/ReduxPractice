import logo from './logo.svg';
import './App.css';
import Login from './componens/Login';
import HeaderComp from "./componens/HeaderComp"

function App() {
  return (
    <div className="App">
      <div className = "container">
        <div className = "row">
          <div className = "col-6">
          <HeaderComp/>
          </div>
          <div className = "col-6">
          <Login/>
          </div>
        </div>
        
      </div>
    
    </div>
  );
}

export default App;
