import React from 'react';
import { ItemGroup } from 'semantic-ui-react';
import { content } from '../../mocks/content';
import { TextItem } from 'components/TextItem/TextItem';
import './MainPage.scss';

export const MainPage = () => {
  return (
    <ItemGroup className={'main-page'}>
      {content.map(value => (
        <TextItem key={value.id} {...value} />
      ))}
    </ItemGroup>
  );
};
