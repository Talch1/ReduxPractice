import logo from "./logo.svg";
import "./App.css";
import Login from "./componens/Login";
import HeaderComp from "./componens/HeaderComp";
import { Provider } from "react-redux";
import store from "./redux/store"
import Search from "./componens/Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Provider store ={store}>
            <div className="col-4">
            <Search/>
            </div>
   
            <div className="col-4">
              <HeaderComp />
            </div>
            <div className="col-4">
              <Login />
            </div>
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
