import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TopNavBar from './components/TopNavBar';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Departments from './components/Departments';
import About from './components/About';
import Contact from './components/Contact';
import BookAppointment from './components/BookAppointment';

function App() {
  return (
    <Router>
      {/* <TopNavBar /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}
export default App;


// function App() {
//   return (
//     <Router>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/long-link" element={<LongLink />} />
//         <Route path="/link" element={<LinkPage />} />
//         <Route path="/disabled" element={<Disabled />} />
//       </Routes>
//     </Router>
//   );
// }
