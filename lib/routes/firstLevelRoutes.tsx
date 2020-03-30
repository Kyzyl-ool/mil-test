import React from 'react';
import { MainPage } from 'pages/main';
import { SubscriptionsPage } from 'pages/subscriptions';

interface IRoute {
  path: string;
  node: React.ReactNode;
}

export const firstLevelRoutes: IRoute[] = [
  {
    path: '/main',
    node: React.createElement(MainPage)
  },
  {
    path: '/subscriptions',
    node: React.createElement(SubscriptionsPage)
  }
];
