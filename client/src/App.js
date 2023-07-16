import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import { NavBar } from './Components/Navbar';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Project';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';



function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
