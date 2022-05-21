import React from 'react';
import PropTypes from 'prop-types';

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

// FriendsList.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
