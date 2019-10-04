import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterPanel from './components/CharacterPanel';
import ShowcaseCarousel from './components/ShowcaseCarousel';
import { BrowserRouter as Router } from 'react-router-dom';
import News from './components/News';


function App() {
    return (
      <Router>
      <div className="App">
          <Header />
          <CharacterPanel />
                <ShowcaseCarousel />
                <News/>
          <Footer />
            </div>
            </Router>
  );
}

export default App;
