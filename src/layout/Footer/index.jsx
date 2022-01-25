import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import { colors, fonts } from '../../styles';
// import Logo from '../../assets/images/logo.png';
// import SocialSection from '../../components';
const pack = require('../../../package.json');

const CommonFooter = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.footer}>
        <Container className={classes.container}>
            <div className={classes.footerBar}>
                {/* <img src={Logo} className={classes.logo} /> */}
                <p className={classes.footerText}>{`© ${new Date().getFullYear()}, Barak's MUI - CRA Template`}</p> 
                {/* <SocialSection /> */}
            </div>
        </Container>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    maxWidth: 1400,
    display: 'flex',
    height: 40,
  },
  footer: {
    backgroundColor: colors.red,
  },
  logo :{
    height: 104,
  },
  footerBar: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]:{
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
  },
  footerText: {
    color: colors.white,
    fontFamily: fonts.Poppins,
  },
}))

export default CommonFooter

