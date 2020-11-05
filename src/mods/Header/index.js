import React, { useState } from 'react';

import './index.css';

export default function Header() {

  return (
    <div className="group-chat-header">
      <div className="group-chat-header-left">
        <img className="group-chat-header-left-arrow" src="../assets/icons/left-arrow.png" />
        <span className="group-chat-header-left-num">666</span>
      </div>
      <span className="group-chat-header-left-title">玉鸟幼儿园小A班(90)</span>
      <span className="group-chat-header-right">...</span>
    </div>
  );
};