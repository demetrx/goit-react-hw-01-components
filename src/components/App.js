// Global styles
import { Global } from '@emotion/react';
import globalStyles from '../styles/global-styles';

// Data
import user from '../data/user.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

// Components
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList/FriendsList';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';

import Container from './UI/Container';

export const App = () => {
  const statsAdjust = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 350,
  };

  return (
    <>
      <Global styles={globalStyles} />

      <Container flex>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendsList friends={friends} />
        <div style={statsAdjust}>
          <Statistics title="Upload stats" stats={stats} />
          <Statistics stats={stats} />
        </div>
      </Container>

      <Container>
        <TransactionsHistory items={transactions} />
      </Container>
    </>
  );
};
