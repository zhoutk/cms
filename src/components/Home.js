import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({})

const button = () => {
    return (
        <>
            <Typography paragraph>
            Home
            </Typography>
        </>
    )
}

export default withStyles(styles)(button);