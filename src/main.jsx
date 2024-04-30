import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './features/footer/components/Footer.jsx';
import ChatbotToggler from './features/chatbot/components/ChatbotToggler.jsx';
import Header from './features/header/components/Header.jsx';
import MainPage from './features/mainpage/components/MainPage.jsx';
import { BrowserRouter } from "react-router-dom";
import Navigation from './App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />
    <Header />
    
    <MainPage />

   <Footer />
    ////<ChatbotToggler />
    <Navigation />
  </BrowserRouter>,
)
