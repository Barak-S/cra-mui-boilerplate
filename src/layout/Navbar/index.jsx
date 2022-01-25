import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, useMediaQuery, useTheme } from '@material-ui/core';
import { colors, fonts } from '../../styles';
import { FiMenu, FiX } from 'react-icons/fi';
import { useHistory, Link } from 'react-router-dom';
import { routes } from '../../core';
// import Logo from '../../assets/images/logo.png';
// import SocialSection from '../../components';


const NavBar = () => {
    const theme = useTheme();
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container className={classes.container}>
                <div className={classes.navigationBar}>
                    {isMobile && (
                        open ? 
                        (<FiX size={32} className={classes.menuToggle} onClick={()=>setOpen(false)} />)
                        :
                        (<FiMenu size={32} color={colors.white} className={classes.menuToggle} onClick={()=>setOpen(true)} />)
                    )}
                    {/* <img 
                            src={Logo} 
                            onClick={()=>history.push(routes.index)}
                            style={{ 
                                height: isMobile ? 70 : 90 
                            }} 
                        /> */}
                    <div className={classes.linkSection}>
                        <NavMenuItem label={'About'} />
                        <NavMenuItem label={'Gallery'} />
                        <NavMenuItem label={'Roadmap'} />
                        <NavMenuItem label={'Team'} />
                        {/* <SocialSection style={{ marginLeft: 62 }} /> */}
                    </div>
                </div>
            </Container>
            {isMobile ? (
                <div className={classes.mobileMenu} style={{ transform: open ? 'translateX(0%)' : 'translateY(-100%)', transition: '0.3s ease'}}>
                    <div className={classes.linkSectionMobile}>
                        <NavMenuItem handleClick={()=>setOpen(false)} label={'About'} />
                        <NavMenuItem handleClick={()=>setOpen(false)} label={'Gallery'} />
                        <NavMenuItem handleClick={()=>setOpen(false)} label={'Roadmap'} />
                        <NavMenuItem handleClick={()=>setOpen(false)} label={'Team'} />
                        {/* <SocialSection style={{ margin: '0 auto' }} /> */}
                    </div>
                </div>
            ):(
                undefined
            )}
        </AppBar>
    );
};

const NavMenuItem = ({ label, handleClick, path, style }) => {
    const classes = useStyles();
    return (
      <Link
        onClick={handleClick && handleClick}
        style={style}
        className={classes.menuItem}
        to={path || ''}
      >
        {label}
      </Link>
    );
  };

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        maxWidth: 1400,
        display: 'flex',
        zIndex: 999,
        height: 99,
        [theme.breakpoints.down('sm')]:{
            height: 80
        }
    },
    appBar: {
        backgroundColor: colors.black,
        boxShadow: 'none',
        zIndex: 990,
    },
    menuToggle: {
        position: 'absolute',
        left: 4,
    },
    menuCloseToggle: {
        position: 'absolute',
        top: 31,
        left: 20,
    },
    mobileMenu: {
        height: '100vh',
        backgroundColor: colors.red,
        width: '100%',
        display: 'flex',
        zIndex: 990,
        position: 'fixed',
    },
    navigationBar: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'center',
        }
    },
    linkSection :{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    linkSectionMobile: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 116,
        width: '100%',
    },
    menuItem: {
        textTransform: 'uppercase',
        display: 'inline-block',
        paddingBottom: 3,
        textDecoration: 'none',
        fontSize: 19,
        fontFamily: fonts.Poppins,
        fontWeight: 500,
        color: colors.white,
        margin: '0px 12.5px',
        cursor: 'pointer',
        backgroundImage: `linear-gradient(${colors.red}, ${colors.red}), linear-gradient(transparent, transparent)`,
        backgroundSize: '0 3px, auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        transition: 'all .2s ease-out',
        '&:hover': {
            backgroundSize: '100% 3px, auto',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 26,
            margin: '22px 27px',
            marginLeft: 95,
            color: colors.white,
            textShadow: 'none'
        }
    }

  }))

export default NavBar;