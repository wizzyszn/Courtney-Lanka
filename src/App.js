import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ReactDOM from 'react-dom'
import Home from './Pages/Home';
import GetStarted from './Pages/GetStarted';
import Services from './Pages/Services';
import Technologies from './Pages/Technologies';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';
import { Context } from './contexts/AppContext';
import BuildModal from './Components/BuildModal';
import { useContext } from 'react';
function App() {
  const {showModal} = useContext(Context);
  return (
    <div className="App">
        {
        showModal &&  ReactDOM.createPortal(<BuildModal />, window.document.getElementById('portal'))
        }
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element ={<Home />}/>
        <Route exact path='/get-started' element ={<GetStarted />}/>
        <Route exact path='/our-services' element ={<Services />}/>
        <Route exact path='/technologies' element ={<Technologies />}/>
        <Route exact path='/careers' element ={<Careers />}/>
        <Route exact path='/contact' element ={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
