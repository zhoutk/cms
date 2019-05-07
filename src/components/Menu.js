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
    icon: 'reorder',
    url: 'sysadmin',
    items: [
        {
        id:4,
        text: '邮件处理',
            icon: 'contact_mail',
            url: 'mail'
        }
    ]
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
            url: 'bug',
            items: [
                {
                    id:5,
                    text: '业务处理',
                    icon: 'business',
                    url: 'business',
                    items: [
                        {
                            id:6,
                            text: '聊天管理',
                            icon: 'chat',
                            url: 'chat'
                        }
                    ]
                }
            ]
        }
    ]
}]

const styles = theme => ({
  });

const Menu = ({classes}) => {
    const [ open, setopen ] = useState( false )
    const handleClick = () => {
      setopen(!open );
    };
    const genMenus = (menus, deep = 1) => {
        return menus.map((al) => {
            return <List component="div" key={al.id} disablePadding>
                <ListItem button onClick={al.items ? handleClick : null} style={{paddingLeft: 20 * deep}}>
                <ListItemIcon>
                    <Icon> {al.icon ? al.icon : 'reorder'} </Icon>
                </ListItemIcon>
                <ListItemText inset primary={al.text} />
                {al.items ? (open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon> ) : ''}
                </ListItem>
                {
                    al.items ? (<Collapse in={open} timeout="auto" unmountOnExit>
                        {genMenus(al.items, deep + 1)}
                    </Collapse>) : ''
                }
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