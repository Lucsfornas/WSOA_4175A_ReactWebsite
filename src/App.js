import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import blogs from './pages/blogs';
import internetart from './pages/internetart';
import about from './pages/about';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import blog1 from './blogpages/blog1';
import blog2 from './blogpages/blog2';
import blog3 from './blogpages/blog3';
import blog4 from './blogpages/blog4';
import blog5 from './blogpages/blog5';
import blog6 from './blogpages/blog6';
import blog7 from './blogpages/blog7';
import blog8 from './blogpages/blog8';
import IAprop from './blogpages/IAproposal';
import IAFinal from './internetart/InternetArtfinal';
import IAdesc from './blogpages/IAdesc';
import blog9 from './blogpages/blog9examtech';
import blog10 from './blogpages/blog10examartistic';


function App() {
  return (

    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs' component={blogs} />
        <Route exact path='/blog1' component={blog1} />
        <Route exact path='/blog2' component={blog2} />
        <Route exact path='/blog3' component={blog3} />
        <Route exact path='/blog4' component={blog4} />
        <Route exact path='/blog5' component={blog5} />
        <Route exact path='/blog6' component={blog6} />
        <Route exact path='/blog7' component={blog7} />
        <Route exact path='/blog8' component={blog8} />
        <Route exact path='/internetart' component={internetart} />
        <Route exact path='/IAprop' component={IAprop} />
        <Route exact path='/IAFinal' component={IAFinal} />
        <Route exact path='/about' component={about} />
        <Route exact path='/IAdesc' component={IAdesc} />
        <Route exact path='/blog9' component={blog9} />
        <Route exact path='/blog10' component={blog10} />
      </Switch>
      <Footer />
    </div >

  );
}

export default App;
