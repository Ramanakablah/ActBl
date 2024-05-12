import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import CaseStudy from './Pages/CaseStudey/CaseStudy';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/casestudy' element={<CaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
