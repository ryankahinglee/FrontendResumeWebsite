import './App.css';
import React from 'react';
import About from './sections/About';
import MobileHeader from './components/MobileHeader';
import MobileHome from './sections/MobileHome';
import MobileProjects from './sections/MobileProjects';

function App() {
  const [viewportSize, setviewportSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setviewportSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const [section, setSection] = React.useState('Home');

  return (
    <div>   
      {viewportSize >= 1470 && (
        <div>
          <MobileHeader setSection={setSection}/>
          {section === 'Home' && (
            <MobileHome />
          )}
          <footer>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
