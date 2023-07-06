import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Err404 from './pages/Err404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div id="main-container">
      <h1>Practice React Router DOM</h1>
      <BrowserRouter>
        <Routes>                
          <Route path="/system-overload-solution" element={ <Page1 /> } />        
          <Route path="/curious-kaleidoscope" element={ <Page2 /> } />
          <Route path="/practice-react-router-dom-c11" element={ <Home />} />
          <Route path="/" element={ <Home />} />
          <Route path="*" element={ <Err404 /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
