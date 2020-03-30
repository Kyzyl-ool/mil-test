import React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import { users } from '../../mocks/users';
import { useHistory } from 'react-router-dom';
import './Subscriptions.scss';
import { UserPage } from 'pages/user';

export const SubscriptionsPage = props => {
  const history = useHistory();

  return (
    <div className={'subscriptions'}>
      <div className={'followed'}>
        <h3>You are subscribed to these users:</h3>
        {users.map((value, index) => (
          <Card
            as={'a'}
            onClick={() => history.push(`/subscriptions/${value.id}`)}
            key={index}
            header={`${value.firstName} ${value.lastName}`}
            meta="Friend"
            description={`${value.about.slice(0, 20)}${value.about.length > 20 ? '...' : ''}`}
            className={'followed__item'}
          />
        ))}
      </div>
      <UserPage />
    </div>
  );
};
