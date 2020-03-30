import React from 'react';
import { Button, Item, Label } from 'semantic-ui-react';
import { TagType } from 'models/tags';

export interface ITextItem {
  id: number;
  header: string;
  content: string;
  tags: string[];
  source: string;
  illustrationSrc: string;
  theme: string;
}

export const TextItem: React.FC<ITextItem> = ({ header, content, tags, source, illustrationSrc, theme }) => {
  return (
    <Item>
      <Item.Image
        src={illustrationSrc ? illustrationSrc : 'https://react.semantic-ui.com/images/wireframe/image.png'}
        rounded
      />
      <Item.Content>
        <Item.Header>{header}</Item.Header>
        <Item.Meta>{theme}</Item.Meta>
        <Item.Description>{content}</Item.Description>
        <Item.Extra>
          {tags.map((value, index) => (
            <Label key={index}>{value}</Label>
          ))}
          <Button primary floated={'right'}>
            Read more...
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};
