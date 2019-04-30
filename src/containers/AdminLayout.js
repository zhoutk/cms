import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../components/SideBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../components/AppBar';
import MainBoard from '../components/MainBoard'
import { useState } from 'react'

const PersistentDrawerLeft = ({ classes }) => {
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen( true );
  };

  const handleDrawerClose = () => {
    setOpen( false );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar handleDrawerOpen = { handleDrawerOpen } open = { open } />
      <SideBar handleDrawerClose = { handleDrawerClose } open = { open } />
      <MainBoard open = { open } />
    </div>
  );
}

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
