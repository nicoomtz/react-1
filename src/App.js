import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ContactoPage from './pages/ContactoPage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import Nav from './components/layout/Nav';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/nosotros'
            element={<NosotrosPage />}
          />
          <Route
            path='/novedades'
            element={<NovedadesPage />}
          />
          <Route
            path='/contacto'
            element={<ContactoPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
