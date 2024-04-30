import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */

import Footer from './features/footer/components/Footer.jsx';
import ChatbotToggler from './features/chatbot/components/ChatbotToggler.jsx';
import Header from './features/header/components/Header.jsx';
import MainPage from './features/mainpage/components/MainPage.jsx';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/some/where" component={Footer} />
    <Route path="/some/otherpage" component={Header} />
  </Route>
);