import React, { useState } from 'react';

import './index.css';

export default function Footer() {

  return (
    <div className="im-group-chat-footer">
      <div className="im-group-chat-footer-content">
        <img className="im-group-chat-footer-voice-button" src="../assets/icons/voice.png" />
        <div className="im-group-chat-footer-input"></div>
        <img className="im-group-chat-footer-face-button" src="../assets/icons/face.png" />
        <img className="im-group-chat-footer-plus-button" src="../assets/icons/plus.png" />
      </div>
    </div>
  );
};