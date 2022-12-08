
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Userbar from "./components/userbar/Userbar";

import Router from "./routes/Router";


function App() {
  
  return (
    <main className="App">
      <Navbar/>
      <Userbar/>
     <Router/>
     
  
    </main>

  );
}

export default App;
