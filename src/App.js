import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Inline from './components/Inline';
import Project from './components/Project';
import Footer from './components/Footer';
import Simple from './components/Simple';
import SectionHeader from './components/SectionHeader';

function App() {
  return (
    <div className="App">
        <Intro></Intro>
        <SectionHeader section="ABOUT" title="about" desc="Find out more about me!"/>
        <About/>
        <SectionHeader section="PROJECTS" title="projects" desc="Here are some of my projects!"/>
        <Inline/>
        {/* <Project></Project> */}
        {/* <Simple></Simple> */}
        <Footer/>
    </div>
  );
}

export default App;
