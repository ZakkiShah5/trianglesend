import { Header, Footer, PirateLoader } from './components';
import { Custom, Spirit, Home, PirateAdventure, Places, Coming, Volunteer, Contact, WorldOfTe } from './pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Map routes to displayable page names
  const routeToTitle = {
    '/': 'Home',
    '/pirate-adventure': 'Pirate Adventure',
    '/custom-adventures': 'Custom Adventures',
    '/places': 'Explore Places',
    '/spirit-forge': 'Spirit Forge',
    '/stay': 'Stay with Us',
    '/volunteer': 'Volunteer',
    '/contact': 'Contact Us',
    '/worldofte': 'World of Triangles End'
  };

  const currentPageName = routeToTitle[location.pathname] || 'Pirate Website';

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader duration

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    // Dynamically set document title
    document.title = `${currentPageName} - Pirate Adventures`;
  }, [currentPageName]);

  if (loading) {
    return <PirateLoader pageName={currentPageName} />;
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
        <Route path="/stay" element={<Coming />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/worldofte" element={<WorldOfTe />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
