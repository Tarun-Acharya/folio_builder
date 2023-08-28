
import './App.css';
import Aboutme from "./Components/Homepage/Aboutme"
import Title from "./Components/Homepage/Title";
import picture from "./TestFiles/picture.jpeg";
function App() {
  const details=[{pic: picture, name: "Virat", role: "Cricketer"}];
  return (
    <div className="App">
        <Title details={details}/>
        <Aboutme/>
     </div>
  );
}

export default App;
