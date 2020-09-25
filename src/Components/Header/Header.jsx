import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form } from '../Form/Form';
import { Home } from '../Home/Home';
import { Map } from '../Map/Map';
import { ReactComponent as ReactLogo } from '../../logo.svg';
export const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <Router>
      <nav
        class='navbar is-fixed-top is-primary'
        role='navigation'
        aria-label='main navigation'
      >
        <div
          class={`navbar-item has-dropdown ${isActive ? 'is-active' : ''}`}
          onClick={() => setActive(!isActive)}
        >
          <div class='navbar-brand mt-2 ml-4'>
            <ReactLogo />
            <a class='navbar-item' href='/'>
              {' '}
            </a>

            <a class='navbar-link'>Menu</a>

            <div class='navbar-dropdown' onClick={() => setActive(!isActive)}>
              <Link to='/' class='navbar-item'>
                Home
              </Link>
              <Link to='/Form' class='navbar-item'>
                Forms
              </Link>
              <Link to='/Map' class='navbar-item'>
                Map
              </Link>
              <hr class='navbar-divider' />
              <div class='navbar-item'>made by Drishti</div>
            </div>
          </div>
        </div>

        <div id='navbarBasicExample' class='navbar-menu'>
          <div class='navbar-start'>
            <Link to='/' class='navbar-item'>
              Home
            </Link>
            <Link to='/Form' class='navbar-item'>
              Forms
            </Link>
            <Link to='/Map' class='navbar-item'>
              Map
            </Link>
          </div>

          <div class='navbar-end'>
            <div class='navbar-item'>
              <div class='buttons'>
                <a class='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a class='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Form'>
          <Form />
        </Route>
        <Route path='/Map'>
          <Map />
        </Route>
      </Switch>
    </Router>
  );
};
