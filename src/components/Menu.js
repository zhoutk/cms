import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const menus = [{
    id: 1,
    text: '系统管理',
    icon: 'reorder',
    url: 'home',
    items: [
        {
        id:4,
        text: '邮件处理',
            icon: 'contact_mail',
            url: 'home'
        }
    ]
}, {
    id: 2,
    text: '图书管理',
    icon: 'book',
    url: 'button',
    items: [
        {
            id: 3,
            text: '问题追踪',
            icon: 'bug_report',
            url: 'button',
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
    link: {
        padding: '0 0 0 0'
    }
  });

const Menu = ({classes}) => {
    const [ open, setopen ] = useState( {} )
    const handleClick = (id) => {
        return () => {
            setopen(Object.assign({}, open, { [id]: !open[id]}) );
        }
    };
    const genMenus = (menus, deep = 1) => {
        return menus.map((al) => {
            return <List component="div" key={al.id} disablePadding>
                <ListItem button onClick={al.items ? handleClick(al.id) : null} style={{paddingLeft: 20 * deep}}>
                <ListItemIcon>
                    <Icon> {al.icon ? al.icon : 'reorder'} </Icon>
                </ListItemIcon>
                {
                    al.items ? al.text : 
                        <Link to={al.url} className={classes.link}>
                            {al.text}
                        </Link>
                }
                {al.items ? (open[al.id] ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon> ) : ''}
                </ListItem>
                {
                    al.items ? (<Collapse in={open[al.id]} timeout="auto" unmountOnExit>
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