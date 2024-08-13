import Styles from './App.module.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modì from './pages/Projects/Modì';
import { ThemeProvider } from './context/ThemeContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className={Styles.mainWrapper}>
          <Navbar />
          <div className={Styles.sectionWrapper}>
            <Routes>
              <Route index element={<Homepage />}></Route>
              <Route path='/project/modì' element={<Modì />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
