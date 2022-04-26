import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer/Footer';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';

function App() {
  
  return (
    <div>
     <Navbar/>
     <div className="d-flex">
     <SideBar/>
     <Content/>
     </div>
     <Footer/>
    </div>
  );
}

export default App;
