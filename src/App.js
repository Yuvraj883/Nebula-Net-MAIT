
import Home from './pages/Home';
import TourInfo from './pages/TourInfo';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path='/know-more/:id' element = {<TourInfo/>}/>
    </Routes>

    </>
  );
}

export default App;
