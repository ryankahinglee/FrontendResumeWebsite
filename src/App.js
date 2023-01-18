import React from 'react';
import MobileHeader from './components/MobileHeader';
import MobileHome from './sections/MobileHome';
// import About from './sections/About';
// import MobileProjects from './sections/MobileProjects';

function App() {
  // const [viewportSize, setviewportSize] = React.useState(window.innerWidth);

  // React.useEffect(() => {
  //   const handleResize = () => {
  //     setviewportSize(window.innerWidth);
  //   }
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [])

  const [section, setSection] = React.useState('Home');

  return (
    <div>   
      <div>
        <MobileHeader setSection={setSection}/>
        {section === 'Home' && (
          <MobileHome />
        )}
        {/* {section === 'About' && (
          <About />
        )} */}
        {/* {section === 'Projects' && (
          <MobileProjects />
        )} */}
        <footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
