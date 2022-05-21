import React from 'react';
import PropTypes from 'prop-types';

import FriendsItem from '../FriendsItem/FriendsItem';
import { List } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendsItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};
export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
