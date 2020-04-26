import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

//OBS: O componente Switch faz apenas uma rota aparecer por vez e não todas ja validadas e ir acumulando conteudo mostrando mais de uma rota
const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/repository' component={Repository} />
  </Switch>
);

export default Routes;
