import './App.css';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
// import HomePage from './components/Home';
import LogIn from './components/LogIn';

function App() {
  return (
    <>
      <TopNavbar />
      {/* <HomePage /> */}
      <LogIn/>
      <Footer />
    </>
  );
}

export default App;
