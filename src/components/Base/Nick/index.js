import React, { useState } from 'react';

import './index.css';

export default function Nick(props = {}) {
  const { dataSource } = props;
  return (
    <div className="group-chat-card-nick">
      {dataSource}
    </div>
  );
};