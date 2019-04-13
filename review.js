import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

class CVTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const tabs = [
      {
        "username": "chloe@sample.com",
        "contact": "something",
        "document_id": "af4b2804d2ec-d9fff3f-807e-4b20",
        "status": "PENDING"
      }
    ];

    const documents = tabs.map((tab) => tab.document_id);

    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="tabs">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            {documents.map(document => (
              <Tab key={document} value={document} label={document} />
            ))}
          </Tabs>
        </AppBar>

        {
          documents.map(document => (
            <TabContainer documentId={document.document_id}>document_id</TabContainer>
          ))
        }
      </div>
    );
  }
}

CVTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

function TabContainer(props) {
  console.log(props.documentId);
  const docURL = "https://s3-eu-west-1.amazonaws.com/diversecv-documents/"
  docURL.concat(props.document_id);
  docURL.concat(".pdf");
  return (
    <div class="pdf">
      <object data="https://s3-eu-west-1.amazonaws.com/diversecv-documents/13dfcdeb-472e-4463-9657-bdef42e88cae.pdf" type="application/pdf">
      </object>
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

export default withStyles(styles)(CVTabs);