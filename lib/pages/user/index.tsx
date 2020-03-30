import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IUser } from 'models/user';
import { Card, Icon, Image, Header, Segment } from 'semantic-ui-react';
import { users } from '../../mocks/users';

export const UserPage: React.FC = props => {
  const location = useLocation();
  const [userData, setUserData] = useState<IUser>();

  useEffect(() => {
    const lastElem = location.pathname.split('/').slice(-1)[0];
    console.log(lastElem);
    if (lastElem !== 'subscriptions') {
      setUserData(users.find(value => value.id === +lastElem));
    }
  }, [location.pathname]);

  console.log(location);

  return (
    <>
      {userData ? (
        <Card>
          <Image src={userData.avatarSrc} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              {userData.firstName} {userData.lastName}
            </Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>{userData.about}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      ) : (
        <Segment placeholder className={'subscriptions__segment'}>
          <Header icon>Choose any user...</Header>
        </Segment>
      )}
    </>
  );
};
