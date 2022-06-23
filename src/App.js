import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Inline from './components/Inline';
import Footer from './components/Footer';
import SectionHeader from './components/SectionHeader';

function App() {
  return (
    <div className="App">
        <Intro></Intro>
        <SectionHeader section="ABOUT" title="about" desc="Find out more about me!"/>
        <About/>
        <SectionHeader section="PROJECTS" title="projects" desc="Here are some of my projects!"/>
        <Inline/>
        <Footer section="CONTACT"/>
    </div>
  );
}

export default App;
