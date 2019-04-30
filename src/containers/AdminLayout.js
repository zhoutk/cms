import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../components/SideBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../components/AppBar';
import MainBoard from '../components/MainBoard'

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar handleDrawerOpen = { this.handleDrawerOpen } open = { open } />
        <SideBar handleDrawerClose = { this.handleDrawerClose } open = { open } />
        <MainBoard open = { open } />
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
