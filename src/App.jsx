import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:single_article" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App
