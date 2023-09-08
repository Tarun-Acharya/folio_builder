import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import NavBar from "./Components/NavBar/NavBar";
import Work from "./Components/Work/Work";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import MainProjectPage from "./Components/Projects/MainProjectPage";
import WorkPage from "./Components/Work/WorkPage";
function App() {
  //const details=[{pic: picture, name: "Virat", role: "Cricketer"}];
  return (
    <div className="App">
      <NavBar />
      <div className="AppElements">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" Component={Homepage}></Route>
          <Route path="/Work" Component={Work}></Route>
          <Route path="/Projects" element={<MainProjectPage />}>
            {" "}
          </Route>
          <Route path="Projects/:userid" element={<ProjectDetails />}></Route>

          <Route path="/Work/:company" Component={WorkPage}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
