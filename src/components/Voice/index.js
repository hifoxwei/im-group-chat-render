import React, { useState } from 'react';

import Avatar from '../Base/Avatar';
import Nick from '../Base/Nick';

import './index.css';

export default function Text(props = {}) {
  const { dataSource: { playload: { duration }, userInfo: { avatar, nick } } } = props;
  return (
    <div className="group-chat-card-voice">
      <Avatar dataSource={avatar} />
      <div>
        <Nick dataSource={nick} />
        <div className="group-chat-card-voice-wrapper">
          <div className="group-chat-card-voice-content">
            <img className="group-chat-card-voice-icon" src="../assets/icons/voice-lite.png" />
            {duration}‘’
          </div>
          <img className="group-chat-card-voice-red-dot" src="../assets/icons/red-dot.png" />
          <div className="group-chat-card-voice-text">转换成文字</div>
        </div>
      </div>
    </div>
  );
};