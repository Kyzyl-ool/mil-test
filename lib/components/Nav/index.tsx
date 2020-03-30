import React from 'react';
import { Button, Icon, Input, Image, Item } from 'semantic-ui-react';
import { user } from '../../mocks/userProfile';
import { useHistory } from 'react-router-dom';
import './Nav.scss';

export const Nav: React.FC = props => {
  const history = useHistory();
  const handleClick = event => {
    history.push(event.target.id.replace('nav-button-', '/'));
  };

  return (
    <nav className={'nav'}>
      <Input type={'text'} icon={'search'} size={'large'} className={'nav__input'} />
      <Button id={'nav-button-main'} onClick={handleClick}>
        Главная
      </Button>
      <Button id={'nav-button-subscriptions'} onClick={handleClick}>
        Подписки
      </Button>
      <Image src={user.avatarSrc} circular size={'mini'} verticalAlign={'middle'} className={'nav-button'} spaced />
      <Button id={'nav-button-profile'} labelPosition={'left'}>
        {user.firstName}
      </Button>
      <div className={'nav__divider'} />
      <Button icon>
        <Icon name={'paper plane outline'} />
      </Button>
      <Button icon>
        <Icon name={'bell outline'} />
      </Button>
      <Button icon>
        <Icon name={'options'} />
      </Button>
    </nav>
  );
};
