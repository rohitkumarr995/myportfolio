
import { useEffect } from 'react';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
import AppRoutes from './routes/index.routes.js';

function App() {

  return (
    <>
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </>
  );
}

export default App;
