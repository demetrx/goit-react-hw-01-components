import React from 'react';
import PropTypes from 'prop-types';

import {
  User,
  Description,
  Avatar,
  Stats,
  Label,
  Quantity,
  Name,
  Tag,
  Location,
} from './Profile.styled';
import Card from 'components/UI/Card';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <User>
        <Description spacing="8">
          <Avatar>
            <img src={avatar} alt={username} />
          </Avatar>
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <li>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </li>
          <li>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </li>
          <li>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </li>
        </Stats>
      </User>
    </Card>
  );
};
export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
