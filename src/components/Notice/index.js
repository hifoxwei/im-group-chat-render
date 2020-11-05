import React, { useState } from 'react';

import './index.css';

export default function Notice(props = {}) {
  const { dataSource: { playload: { content } } } = props;

  return (
    <div className="group-chat-card-notice">
      { content }
    </div>
  );
};