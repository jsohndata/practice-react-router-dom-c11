import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Err404 from './pages/Err404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>                
        <Route path="/system-overload-solution" element={ <Page1 /> } />        
        <Route path="/curious-kaleidoscope" element={ <Page2 /> } />
        {/* <Route path="/" element={ <Home />} /> */}
        <Route path="*" element={ <Err404 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
