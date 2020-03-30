import { IUser } from 'models/user';

export const users: IUser[] = [
  {
    id: 1,
    firstName: 'Ray',
    lastName: 'Bradbury',
    avatarSrc: 'https://images.gr-assets.com/authors/1445955959p8/1630.jpg',
    about:
      'Ray Bradbury was an American science fiction writer whose works were translated in more than 40 languages and sold millions of copies around the world.'
  },
  {
    id: 2,
    firstName: 'Steve',
    lastName: 'Jobs',
    avatarSrc:
      'https://cdn.vox-cdn.com/thumbor/yU7dbyR-N-m1lWDyLhaJPydUESg=/0x33:640x393/1600x900/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg',
    about:
      'Steven Paul Jobs was born on February 24, 1955 in San Francisco, California. His unwed biological parents, Joanne Schieble and Abdulfattah Jandali, put him up for adoption.'
  },
  {
    id: 3,
    firstName: 'William',
    lastName: 'Shakespeare',
    avatarSrc: 'https://naked-science.ru/sites/default/files/images/Shakespeare_Droeshout_1623.jpg',
    about:
      'William Shakespeare was an English poet, playwright, and actor. He was born on 26 April 1564 in Stratford-upon-Avon. His father was a successful local businessman and his mother was the daughter of a landowner.'
  },
  {
    id: 4,
    firstName: 'Alexander',
    lastName: 'Pushkin',
    avatarSrc: 'https://www.chekhov-center.ru/fileadmin/user_upload/Pushkin.jpg',
    about: 'Pushkin was born into Russian nobility in Moscow'
  }
];
