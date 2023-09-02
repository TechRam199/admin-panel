import { useSelector } from "react-redux";
import "./App.css"
import Routing from "./Routing"
import Login from "./component/Pages/Login/Login";
import { Router } from "react-router-dom";


function App() {
 
  const user = useSelector(state=>state.user.currentUser);


  return (

    <div>

    { user ?<Routing/> :<Login/>  }
  
  
       </div>
    
  );
}

export default App;
