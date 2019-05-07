import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';

const menus = [{
    id: 1,
    text: '系统管理',
    icon: 'report',
    url: 'sysadmin',
}, {
    id: 2,
    text: '图书管理',
    icon: 'book',
    url: 'book',
    items: [
        {
        id: 3,
        text: '问题追踪',
            icon: 'bug_report',
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
    const genMenus = (menus) => {
        return menus.map((al) => {
            return <List component="div" key={al.id} disablePadding>
                <ListItem button className={classes.nested}>
                <ListItemIcon>
                    <Icon> {al.icon} </Icon>
                </ListItemIcon>
                <ListItemText inset primary={al.text} />
                </ListItem>
            </List>
        })
    }
    return (
        <>
        {genMenus(menus)}
        </>
    )
}

export default withStyles(styles)(Menu);