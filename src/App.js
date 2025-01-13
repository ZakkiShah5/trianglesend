import { Header, Footer, PirateLoader } from './components';
import { Custom, Spirit, Home, PirateAdventure, Places, Coming, Volunteer, Contact } from './pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reduced loader duration for better UX

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    // Set dynamic page title based on the current route
    const routeToTitle = {
      '/': 'Home - Pirate Adventures',
      '/pirate-adventure': 'Pirate Adventure',
      '/custom-adventures': 'Custom Adventures',
      '/places': 'Explore Places',
      '/spirit-forge': 'Spirit Forge',
      '/contact': 'Contact us',
      '/volunteer': 'Volunteer'
    };
    document.title = routeToTitle[location.pathname] || 'Pirate Website';
  }, [location]);

  if (loading) {
    return <PirateLoader />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pirate-adventure" element={<PirateAdventure />} />
        <Route path="/custom-adventures" element={<Custom />} />
        <Route path="/places" element={<Places />} />
        <Route path="/spirit-forge" element={<Spirit />} />
        <Route path="/stay" element={<Coming/>}/>
        <Route path="/volunteer" element={<Volunteer/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
