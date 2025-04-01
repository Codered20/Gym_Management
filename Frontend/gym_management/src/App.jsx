import './App.css';
import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
// import HomePage from './components/Home';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import AdminLogin from './components/Topbar Components/Login/AdminLogin';
import LogIn from './components/Topbar Components/Login/LogIn';
import NewUser from './components/Topbar Components/Login/NewUser';
import Contact from './components/Footer Components/Contact';
import HomePage from './components/Topbar Components/Home';
import Reviews from './components/Topbar Components/Reviews';
import Services from './components/Footer Components/Services';
import Trainers from './components/Footer Components/Trainers';
import Visit from './components/Topbar Components/Visit';
import { AppProvider } from './components/context/context';
import Profile from './components/Topbar Components/Profile';

function App() {
  return (
    <AppProvider>
      <Router>
        <>
          <TopNavbar />
          <div className='middle_Container'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/bookavisit" element={<Visit />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/services" element={<Services />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </>
      </Router>
    </AppProvider>
  );
}

export default App;
