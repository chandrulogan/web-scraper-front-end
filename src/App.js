import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
