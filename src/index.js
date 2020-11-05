import React from 'react';
import ReactDOM from "react-dom";

import Header from './mods/Header';
import ChatWindow from './mods/ChatWindow';
import Footer from './mods/Footer';

import './index.css';

function App() {

  return (
    <div className="im-group-chat-wrapper">
      <Header />
      <ChatWindow />
      <Footer />
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);