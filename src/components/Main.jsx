import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Tictactoe/Game';
import Home from './Home';

export default class Main extends React.Component {
    render() {
        return (
          <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/new' component={Game}/>
              <Route path='/continue' component={Game}/>
            </Switch>
          </main>
        );
    }

}
