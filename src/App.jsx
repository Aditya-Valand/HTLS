// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { UpdateDetailPage } from './pages/UpdateDetailPage.jsx';
import { InquiryPage } from './pages/InquiryPage.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update/:id" element={<UpdateDetailPage />} /> 
        <Route path="/inquiry" element={<InquiryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;