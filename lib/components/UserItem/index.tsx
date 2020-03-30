import React from 'react';
import { Button, Item } from 'semantic-ui-react';
import { IUser } from 'models/user';

interface IUserItem {
  user: IUser;
}

export const UserItem: React.FC<IUserItem> = ({ user }) => {
  return (
    <Item>
      <Item.Image size="small" src={user.avatarSrc} />
      <Item.Content verticalAlign="middle">
        <Item.Header>{`${user.firstName} ${user.lastName}`}</Item.Header>
        <Item.Description>Some info</Item.Description>
        <Item.Extra>
          <Button floated="right">See profile</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
