import React from 'react';
import PropTypes from 'prop-types';

import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import Card from '../UI/Card';

const Statistics = ({ title, stats }) => {
  const getRandomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <Card>
      <Section>
        {title && <Title>{title}</Title>}

        <StatList>
          {stats.map(stat => (
            <Item key={stat.id} color={getRandomColor()}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      </Section>
    </Card>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
