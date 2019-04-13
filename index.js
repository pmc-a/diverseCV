import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Hello from './Hello';
import Upload from "./upload";
import Review from "./review";
import 'react-web-tabs/dist/react-web-tabs.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  renderNavBar() {
    return <NavBar />;
  }

  render() {
    return (
      <div>
        {this.renderNavBar()}

        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic :)
        </p>

      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/upload">Upload</NavLink></li>
            <li><NavLink to="/review">Review</NavLink></li>
          </ul>

          <div className="content">
            <Route path="/review" component={Review} />
            <Route path="/upload" component={Upload} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById('rootIndex'));
