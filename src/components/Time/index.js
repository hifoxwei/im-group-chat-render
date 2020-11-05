import React, { useState } from 'react';

import './index.css';

export default function Time(props = {}) {
  const { dataSource: { playload: { timestame } } } = props;

  return (
    <div className="group-chat-card-time">
      { timestame }
    </div>
  );
};