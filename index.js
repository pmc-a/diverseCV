import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Hello from './Hello';
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
    return <NavBar/>;
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
       <div>
        <ul>
          <li>
          <a href="upload.html">Upload</a></li>
          <li><a href="review.html">Review</a></li>
        </ul>

        <div className="content">
             
          </div>
      </div>
    );
  }
}

class CVTabs extends React.Component{
render(){
return(
    <Tabs defaultTab="vertical-tab-one" vertical>
        <TabList>
            <Tab tabFor="vertical-tab-one">Tab 1</Tab>
            <Tab tabFor="vertical-tab-two">Tab 2</Tab>
            <Tab tabFor="vertical-tab-three">Tab 3</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
            <p>Tab 1 content</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-two">
            <p>Tab content</p>
        </TabPanel>

        <TabPanel tabId="vertical-tab-three">
            <p>Tab 3 content</p>
        </TabPanel>
    </Tabs>
    );
}
}


}

render(<App />, document.getElementById('rootIndex'));
render(<UserForm />, document.getElementById('rootUpload'));
render(<CVTabs />, document.getElementById('rootTabs'));
