import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';
import { direction } from '../themes/default';
import { useState } from 'react'

const SideBar = ({ open, handleDrawerClose, classes }) => {
  const [ subOpen, setSubOpen ] = useState( false )
  const handleClick = () => {
    setSubOpen(!subOpen );
  };
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
      <List component="div" disablePadding >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {subOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={subOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      
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
