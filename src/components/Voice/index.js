import React, { useState } from 'react';

import Avatar from '../Base/Avatar';
import Nick from '../Base/Nick';

import './index.css';

export default function Text(props = {}) {
  const { dataSource: { playload: { duration }, userInfo: { avatar, nick } } } = props;
  return (
    <div className="group-chat-card-text">
      <Avatar dataSource={avatar} />
      <div>
        <Nick dataSource={nick} />
        <div className="group-chat-card-text-content">{duration}</div>
      </div>
    </div>
  );
};