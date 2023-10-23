import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';

function App() {
  return (
    <>
      <Profile />
      <About />    
      <Interest /> 
      <Footer /> 
    </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 