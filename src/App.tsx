import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ContentDetails from './Components/ContentDetails/contentDetails';

//Hooks
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

//Styles
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Router>
        <div> { user ? <Home /> : <Login />} </div>
        {/* <Routes>
          <Route path="/content-details" element={<ContentDetails />} />
        </Routes> */}
      </Router>
     </div>
  );
}

export default App;
