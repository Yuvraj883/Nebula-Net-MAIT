
import Home from './pages/Home';
import TourInfo from './pages/TourInfo';
import {Routes, Route} from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage';


function App() {
  return (
    <>
    {/* <div className='' style={{backgroundImage:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFCLuQ9KR_6qqdTn4_ibgseIEauUIuSiSdA&s']}}> */}
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path='/know-more/:id' element = {<TourInfo/>}/>
      <Route path='/checkout/:id' element={<CheckoutPage/>}/>
    </Routes>
    {/* </div> */}

    </>
  );
}

export default App;
