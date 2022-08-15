import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
//Hooks
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
//Styles
import './App.css';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <div> { user ? <Home /> : <Login />} </div>
     </div>
  );
}

export default App;
