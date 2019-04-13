import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;

  const tabs = [
    {
      "username": "chloe@sample.com",
      "contact": "something",
      "document_id": "doc_id",
      "status": "PENDING"
    },
    {
      "username": "peter@sample.com",
      "contact": "something",
      "document_id": "doc_id",
      "status": "PENDING"
    },
    {
      "username": "Pedro",
      "contact": "mock-contact",
      "document_id": "3d9fff3f-807e-4b20-871f-af4b2804d2ec",
      "status": "PENDING"
    },
    {
      "username": "Chloe",
      "contact": "chloemcateer@sample.com",
      "document_id": "7dd50fb9-c1e0-4222-86cc-1f1893ce4858",
      "status": "PENDING"
    },
    {
      "username": "Eamon",
      "contact": "eamon@sample.com",
      "document_id": "e6894d9f-c457-4a06-ae7c-ce294ac8fa32",
      "status": "PENDING"
    }
  ];

  const documents = tabs.map((tab) => tab.document_id);
  const url = "https://s3-eu-west-1.amazonaws.com/diversecv-documents/";
  <script type="text/javascript" src='object.js'> </script>
  return (
    <div className={classes.root}>

      {tabs.map(document => (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{document.document_id}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          
            <div>
              <object data={this.createURL({document.document_id})} type="application/pdf" />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}

function createURL(doc_id) {
  return url = "https://s3-eu-west-1.amazonaws.com/diversecv-documents/" + doc_id + ".pdf";
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);