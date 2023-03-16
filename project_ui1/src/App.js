import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Hero_Section';
import Informationsection from './components/Information_section';
import Summarizebox from './components/Summarized_box';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Due from './components/Due_section';
import Card from './components/Card_section';
import Footer from './components/Footer_section';

function App() {
  return (
    <div className="App1">
           <Navbar/>
           <Herosection></Herosection>
           <Informationsection></Informationsection>
           <Summarizebox></Summarizebox>
           <Section1></Section1>
           <Section2></Section2>
           <Section3></Section3>
           <Due></Due>
           <Card></Card>
           {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
