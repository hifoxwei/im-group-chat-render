import React, { useState, useEffect } from 'react';

import Text from '../../components/Text';
import Pic from '../../components/Pic';
import Notice from '../../components/Notice';
import Time from '../../components/Time';
import Voice from '../../components/Voice';

import './index.css';

import mockData from '../../mock/data.json';

/**
 * 卡片类型映射表
 * **/
const CARD_TYPE_MAP = {
  text: Text,
  pic: Pic,
  notice: Notice,
  time: Time,
  voice: Voice,
};

export default function ChatWindow() {

  const [chatList, setChatList] = useState(mockData);
  
  useEffect(() => {

  }, []);

  console.log('chatList:', chatList)

  /***
   * 卡片渲染
  */
  const renderCard = () => {
    return chatList.map((item, index) => {
      const CardItem = CARD_TYPE_MAP[item.type];
      return CardItem && (
        <div className="im-group-chat-card-item" key={`${index}_${item.type}`}>
         <CardItem dataSource={item} />
        </div>
      )
    });
  }

  return (
    <div className="im-group-chat-card-container">
      { renderCard() }
    </div>
  );
}