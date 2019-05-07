import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import Menu from './Menu'
import { direction } from '../themes/default';

const SideBar = ({ open, handleDrawerClose, classes }) => {
  return (
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
        paper: classes.drawerPaper,
        }}
    >
      <div className={classes.drawerHeader}>
      <IconButton onClick={ handleDrawerClose }>
          {direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      </div>
      <Divider />
      <Menu />
      
    </Drawer>
)}

const styles = theme => ({
  list: {
    width: '100%',
    maxWidth: theme.drawerWidth,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
});

export default withStyles(styles)(SideBar);
