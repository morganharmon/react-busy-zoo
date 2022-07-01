import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import Main from './Main';

function App() {
  return (
    <BrowserRouter className="App" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <Routes>
        <Route path='/' element={<Main />}>
        </Route>
        <Route path='/admin' element={<Admin />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
