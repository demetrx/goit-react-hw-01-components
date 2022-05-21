import React from 'react';

import { Friend, Status, Avatar, Name } from './FriendsItem.styled';
import Card from '../../UI/Card';

const FriendsItem = ({ name, avatar, isOnline }) => {
  return (
    <Card>
      <Friend>
        <Status isOnline={isOnline} />
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </Friend>
    </Card>
  );
};

export default FriendsItem;
