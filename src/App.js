import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import NavBar from "./Components/NavBar/NavBar";
import MainProjectPage from "./Components/Projects/MainProjectPage";
function App() {
  //const details=[{pic: picture, name: "Virat", role: "Cricketer"}];
  return (
    <div className="App">
      <NavBar />
      <div className="AppElements">
        <Routes>
          <Route path="/Home" Component={Homepage}></Route>
          <Route path="/Projects" element={<MainProjectPage/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
