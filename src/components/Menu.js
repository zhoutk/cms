import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as Icons from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';
import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';

const menus = [{
    text: 'system admin',
    icon: 'Report',
    url: 'sysadmin',
}, {
    text: 'book',
    icon: 'Book',
    url: 'book',
    items: [
        {
            text: 'bug admin',
            icon: 'BugReport',
            url: 'bug'
        }
    ]
}]

const styles = theme => ({
    list: {
      width: '100%',
      maxWidth: theme.drawerWidth,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  });

const Menu = ({classes}) => {
    const [ open, setopen ] = useState( false )
    const handleClick = () => {
      setopen(!open );
    };
    return (
        <List component="div" disablePadding >
            <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <Icons.ReportTwoTone />
            </ListItemIcon>
            <ListItemText inset primary="Mine" />
            {open ? <Icons.ExpandLess /> : <Icons.ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <Icons.StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
                </ListItem>
            </List>
            </Collapse>
        </List>
    )
}

export default withStyles(styles)(Menu);