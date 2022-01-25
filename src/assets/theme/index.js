import { createTheme } from '@material-ui/core/styles';
import { colors, fonts } from '../../styles';

export default createTheme({
    palette: {
        primary: {
          main: colors.red,
        },
        secondary: {
          main: colors.black,
        },
        error: {
          main: colors.red,
        },
        background: {
          default: colors.white,
        },
      },
    overrides: {
        MuiButton: {
            contained: {
                
            },
            outlined: {
               
            },
        },
    },
    typography: {
        secondaryFont: 'Roboto',
        h1: {
            color: 'inherit',
        },
        h2: {
            color: 'inherit',
        },
        h3: {
            color: 'inherit',
        },
        h4: {
            color: 'inherit',
        },
        h5: {
            color: 'inherit',
        },
        h6: {
            color: 'inherit',
        },
        button: {
        
        },
    }
});
