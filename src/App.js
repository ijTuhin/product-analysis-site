import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Random from './component/Random/Random';
import Reviews from './component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Random></Random>}></Route>
      </Routes>
    </div>
  );
}

export default App;
