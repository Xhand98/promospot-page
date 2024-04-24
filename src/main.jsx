import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Footer from './features/mainpage/components/Footer.jsx';
import ChatbotToggler from './features/chatbot/components/ChatbotToggler.jsx';
import Header from './features/header/components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />
    <Header />
    <App />

    <Footer />
    <ChatbotToggler />
  </React.StrictMode>,
)
