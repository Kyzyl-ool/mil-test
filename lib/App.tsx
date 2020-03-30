import React from 'react';
import { Nav } from 'components/Nav';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { firstLevelRoutes } from './routes/firstLevelRoutes';
import { Container } from 'semantic-ui-react';
import './App.scss';

function App() {
  return (
    <Container as={'div'} className={'app'}>
      <Container as={'header'} textAlign={'center'} className={'app-header'}>
        <h1>Textastic</h1>
        <p>A service for searching text.</p>
      </Container>
      <hr />
      <BrowserRouter>
        <Nav />
        <hr />
        <section>
          <Switch>
            {firstLevelRoutes.map((value, index) => (
              <Route key={index} path={value.path}>
                {value.node}
              </Route>
            ))}
            <Redirect to={'/main'} />
          </Switch>
        </section>
      </BrowserRouter>
    </Container>
  );
}

export default App;
