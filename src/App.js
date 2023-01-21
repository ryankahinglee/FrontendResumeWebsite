import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './sections/About';
import LargeViewportProjects from './sections/LargeViewportProjects';
import MobileHeader from './components/MobileHeader';
import Home from './sections/Home';
import SmallViewportProjects from './sections/SmallViewportProjects';

function App() {
  const [viewportSize, setviewportSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setviewportSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    document.title = `Ryan's Website`;
  }, []);

  const [section, setSection] = React.useState('Home');

  return (
    <div>
      {viewportSize >= 1470 && (
        <div>
          <Header />
          <Home />
          <About />
          <LargeViewportProjects />
        </div>
      )}  
      {viewportSize >= 1060 && viewportSize < 1470 && (
        <div>
          <Header />
          <Home />
          <About />
          <SmallViewportProjects />
        </div>
      )}
      {viewportSize < 1060 && (
        <div>
          <MobileHeader setSection={setSection}/>
          {section === 'Home' && (
            <Home />
          )}
          {section === 'About' && (
            <About />
          )}
          {section === 'Projects' && (
            <SmallViewportProjects />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
