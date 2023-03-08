import './App.css';
import Getdata from './Components/Getdata';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Getdata />} />
          {/* <Route path="/update" element={<AddCase />} />- */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



  

