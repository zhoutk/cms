import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({})

const home = () => {
    return (
        <>
            <Typography paragraph>
            404, Not Found.
            </Typography>
        </>
    )
}

export default withStyles(styles)(home);