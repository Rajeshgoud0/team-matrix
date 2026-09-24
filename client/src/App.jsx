import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n/config';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchemeDirectory from './pages/SchemeDirectory';
import EligibilityChecker from './pages/EligibilityChecker';
import MyApplications from './pages/MyApplications';
import SchemeDetails from './pages/SchemeDetails';
import ApplicationForm from './pages/ApplicationForm';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const isLoggedIn = false;

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLanguageChange={handleLanguageChange} currentLanguage={i18n.language} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes" element={<SchemeDirectory />} />
            <Route path="/schemes/:schemeId" element={<SchemeDetails />} />
            <Route path="/apply/:schemeId" element={<ApplicationForm />} />
            <Route path="/eligibility" element={<EligibilityChecker />} />
            <Route path="/my-applications" element={<MyApplications isLoggedIn={isLoggedIn} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
