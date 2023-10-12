import {search_weather} from "./services/weather_services";
import Navbar from "./components/navbar";
import {Routes ,Route} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
     
    </Routes>
    </>
  );
}

export default App;
