import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import GetStarted from './Pages/GetStarted';
import Services from './Pages/Services';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element ={<Home />}/>
        <Route exact path='/get-started' element ={<GetStarted />}/>
        <Route exact path='/our-services' element ={<Services />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
