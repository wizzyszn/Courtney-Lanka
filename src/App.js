import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import GetStarted from './Pages/GetStarted';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element ={<Home />}/>
        <Route exact path='/get-started' element ={<GetStarted />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
