import React, { useState } from 'react';

import './index.css';

export default function Text(props = {}) {
  const { dataSource } = props;
  return (
    <div className="group-chat-card-avatar">
      <img  className="group-chat-card-avatar-img" src={dataSource} />
    </div>
  );
};