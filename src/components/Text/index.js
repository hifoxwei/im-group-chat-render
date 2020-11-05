import React, { useState } from 'react';

import Avatar from '../Base/Avatar';
import Nick from '../Base/Nick';

import './index.css';

export default function Text(props = {}) {
  const { dataSource: { playload: { content }, userInfo: { avatar, nick } } } = props;
  return (
    <div className="group-chat-card-text">
      <Avatar dataSource={avatar} />
      <div className="group-chat-card-text-left">
        <Nick dataSource={nick} />
        <div className="group-chat-card-text-content">{content}</div>
      </div>
    </div>
  );
};