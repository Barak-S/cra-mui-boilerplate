import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import { colors, fonts } from '@styles';
import SocialSection from '@components/SocialSection';
const pack = require('../../../package.json');

const CommonFooter = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.footer}>
        <Container className={classes.container}>
            <div className={classes.footerBar}>
                <p className={classes.footerText}>{`© ${new Date().getFullYear()}, Barak's MUI - CRA Template`}</p> 
                <SocialSection 
                  color={colors.white} 
                  size={20} 
                  className={classes.socialSection} 
                />
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
    position: 'relative',
    height: 40,
    [theme.breakpoints.down('sm')]: {
      height: 76,
    },
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
      flexDirection: 'column-reverse',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }
  },
  footerText: {
    color: colors.white,
    fontFamily: fonts.Poppins,
    [theme.breakpoints.down('sm')]:{
      marginTop: 0,
    }
  },
  socialSection: {
    width: 180, 
    height: 40, 
    position: 'absolute', 
    right: 12,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      right: 0,
    }
  }
}))

export default CommonFooter

