import "./App.css";

//import picture from "./TestFiles/picture.jpeg";

import Backdrop from "./Components/Homepage/Backdrop";
import HomeCard from "./Components/Homepage/HomeCard";
import NavBar from "./Components/Homepage/NavBar";
function App() {
  //const details=[{pic: picture, name: "Virat", role: "Cricketer"}];
  return (
    <div>
      <NavBar />
      <div className="App">
        <Backdrop />
        <HomeCard></HomeCard>
      </div>
    </div>
  );
}

export default App;
