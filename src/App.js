import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Type from './Pages/Type';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Problems from './Pages/Problems';
import Depig from './Pages/Depig';
import DepigCleanser from './Pages/DepigCleanser';
import DepigMoist from './Pages/DepigMoist';
import DepigSerum from './Pages/DepigSerum';
import DepigMandS from './Pages/DepigMandS';
import DarkCircles from './Pages/DarkCircles';
import AntiAging from './Pages/AntiAging';
import Acne from './Pages/Acne';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Rate from './Pages/Rate';
import OIL from './Pages/OIL';
import Sunoil from './Pages/Sunoil';
import Mostoil from './Pages/Mostoil';
import Toner from './Pages/Toner';
import Cleanseroil from './Pages/Cleanseroil';
import Sensitive from './Pages/Sensitive';
import SensitiveClean from './Pages/SensitiveClean';
import Dry from './Pages/Dry';
import Dryclean from './Pages/Dryclean';
import Drysun from './Pages/Drysun';
import Routine from './Pages/Routine';
import Drymostriser from "./Pages/Drymostrizer";
import SensitiveMoist from './Pages/SensitiveMoist';
import Sensun from './Pages/Sensun';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (  
        <BrowserRouter>
          <Navbar/> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/type" element={<Type />} />
              <Route path="/sensitive" element={<Sensitive />} />
              <Route path="/sensitiveclean" element={<SensitiveClean />} />
              <Route path="/sensitivemoist" element={<SensitiveMoist />} />
              <Route path="/Sensun" element={<Sensun />} />
              <Route path="/dry" element={<Dry />} />
              <Route path="/drysun" element={<Drysun />} />
              <Route path="/drymostriser" element={<Drymostriser />} />
              <Route path="/dryclean" element={<Dryclean />} />
              <Route path="/routine" element={<Routine />} />
              <Route path='/Rate' element={<Rate/>}/>
              <Route path='/OIL' element={<OIL/>}/>
              <Route path='/Sunoil' element={<Sunoil/>}/>
              <Route path='/Mostoil' element={<Mostoil/>}/>
              <Route path='/Toner' element={<Toner/>}/>
              <Route path='/Cleanseroil' element={<Cleanseroil/>}/>
              <Route path="/problems" element={<Problems />} />
              <Route path="/depig" element={<Depig />} />
              <Route path="/depigcleanser" element={<DepigCleanser />} />
              <Route path="/depigmoist" element={<DepigMoist />} />
              <Route path="/depigserum" element={<DepigSerum />} />
              <Route path="/depigmands" element={<DepigMandS />} />
              <Route path="/darkcircles" element={<DarkCircles />} />
              <Route path="/antiaging" element={<AntiAging />} />
              <Route path="/acne" element={<Acne />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          <Footer/>
        </BrowserRouter>
)}

export default App;
