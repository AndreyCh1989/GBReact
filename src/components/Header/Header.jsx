import React from "react";
import {IconButton} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import DehazeIcon from '@material-ui/icons/Dehaze';
import './Header.scss';
import {Link, matchPath} from 'react-router-dom';
import {withRouter} from 'react-router';

import {routes} from '../../routes';
import {Profile} from "pages/Profile";

export class Header extends React.Component {
  isProfile = () => {
    const route = routes.find(
      route => matchPath(this.props.location.pathname, route)
    );

    return route.component === Profile;
  };

  render() {
    return <div className='header'>
      <div>
        <div className="navigation">
          {
            !this.isProfile() &&
            (
              <IconButton aria-label="Profile" color="primary" component={Link} to="/profile">
                <AccessibilityNewIcon />
              </IconButton>
            )
          }
          {
            this.isProfile() &&
            (
              <IconButton aria-label="Messenger" color="primary" component={Link} to="/">
                <DehazeIcon />
              </IconButton>
            )
          }
        </div>
        Super chat
      </div>
    </div>
  }
}

export default withRouter(Header);
