import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { colors, fonts } from '../../styles';


const Home = () => {
    const theme = useTheme()
    const classes = useStyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.container}>
            <Container className={classes.intro1}>
                <Typography color="primary">Home</Typography>
            </Container>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        backgroundColor: colors.lightGrey,
    },
    intro1: {
        maxWidth: 1400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

export default Home


