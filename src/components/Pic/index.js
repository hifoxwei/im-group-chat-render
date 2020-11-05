import React, { useState } from 'react';

import Avatar from '../Base/Avatar';
import Nick from '../Base/Nick';

import './index.css';

export default function Pic(props = {}) {
  const { dataSource: { playload: { image }, userInfo: { avatar, nick } } } = props;
  return (
    <div className="group-chat-card-text">
      <Avatar dataSource={avatar} />
      <div>
        <Nick dataSource={nick} />
        <img className="group-chat-card-pic-content" src={image} />
      </div>
    </div>
  );
};