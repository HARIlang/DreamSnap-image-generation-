import Home from "./components/Home";
import TextToImage from "./components/TextToImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import ParticlesBackground from './components/ParticlesBack ground'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/DreamSnap" element={<TextToImage/>}/>
         <Route path="/about" element={<About/>}/>
        


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
