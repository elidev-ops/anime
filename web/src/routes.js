import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Episodes from './pages/Episodes';
import Watch from './pages/Watch';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/episodios/:id" component={Episodes} />
        <Route path="/assistir/:id" component={Watch} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
