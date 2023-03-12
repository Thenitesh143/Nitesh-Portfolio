import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';

import Project from './Pages/Project/Project';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/skills' element={<Skills />} />
        <Route exact path='/project' element={<Project />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
