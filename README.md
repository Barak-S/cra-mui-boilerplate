# Barak-S/cra-mui-boilerplate

### A create-react-app + @material-ui/core boilerplate

## Development

Install dependencies:

```
npm install
```

```
npm start
```

### Pushing to a new Repo

```
git remote add origin URL_TO_GITHUB_REPO
```
```
git push -u origin master
```

- [Style Guide](https://basarat.gitbook.io/jsx/styleguide)
- Do not use `function`. Prefer to use `const name () => {...}` instead.

### Procject structure

- `src/assets` - Global level assets. Use this folder for assets that will be reused several times. Do not place assets that will be used just once. Place this type of assets next to a component's file (`./assets`).
- `src/components` - Folder for all pure components. The components inside this folder should not have dependencies on the API or app's storage.
- `src/components/Common` - Basic wide-used components.
- `src/components/Buttons` - Different basic buttons.
- `src/components/Modals` - Basic dialogs and components.
- `src/components/Form` - Inputs, special fields, form-related components.
- `src/components/Auth|Dashboard|...` - Components related to a special (for example: authorized) part of the app.
- `src/styles` - Everything that is related to the app style: theme, colors, fonts, utils, types.
- `src/utils` - Basic utils for working with strings, dates, numbers, types. The utils here should not have dependencies from API or internal storage.

### Component names

We are using the following [React components naming convention](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505).

Component's name structure:

```
[Domain]|[Page/Context]|ComponentName|[Type]
```

Read more from this [original post](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505).

### Components import

Each root folder is available globally and should be imported by absolute path.

✅ Correct:

```jsx
import { ContainedButton } from '@components/Buttons';
```

❌ Incorrect:

```jsx
import { ContainedButton } from '../../components/Buttons';
```


### Files & folders structure

**One component per file.** Each component should be placed in a separate folder. The source code should be placed at `index.jsx` file.

✅ Correct:

```
src
  components
    Buttons
      Submit
        index.jsx
```

❌ Incorrect:

```
src
  components
    Buttons
      ContainedButton.jsx
```

Place assets in the `./assets` folder next to the component's file.

✅ Correct:

```
src
  components
    Buttons
      Submit
        index.jsx
        assets
          logo.png
```

❌ Incorrect:

```
src
  components
    Buttons
      Submit
        index.jsx
        logo.png
```

Place sub-components in the `./components` folder next to the component's file.

✅ Correct:

```
src
  components
    Forms
      List
        index.jsx
        components
          Item
            index.jsx
```

❌ Incorrect:

```
src
  components
    Forms
      List
        Item.jsx
        index.jsx
```

The next files can be placed next to the `index.jsx` component's file to reduce the main file size:

- `styles.js` - Use this file to keep component's styles if they are too big. But it is better to keep them in the same file if they fit on the same screen.
- `types.js` - Component specific types, like `ListItem`, `IconType` etc. Do not keep the component's `Props` here. Keep it next to the component's code.
- `utils.js` - Different utils required for the component.
- `view.jsx` - Use this file for keeping component's view-related code if it is too big or the component is too complex.

Each root folder should contains `index.js` file and export all of it components. For example `src/components/Auth/index.js`:

```jsx
export * from './Copyrights';
export * from './FormContainer';
export * from './ScreenBackground';
export * from './SocialLoginButtons';
export * from './SectionSplitter';
```

This will allows to import components like:

```jsx
import { AuthCopyrights } from '@components/Auth';
```

### Component template

The basic component template:

```jsx
import React from 'react';
import { colors, fonts } from '@styles';
import classNames from 'classnames';

// Don't forget to export component to be able import it like:
// import { AuthCopyrights } from 'components/Auth';

export const AuthCopyrights = ({ style, className }) => {
  return (
    // Function classNames() will merge class objects together
    // The last className argument will takes the higher priority
    <div className={classNames(classes.container, className)}>
      {`Copyright © ${new Date().getFullYear()} All rights reserved.`}
    </div>
  );
};

// Place styles and themes at the bottom of the component
// Use this definition of styles for main cases
// Use makeStyle from @material-ui/core if you need more advanced customization (line 220)
const styles = {
  container: {
    color: colors.gray,
    fontSize: 16,
  },
};

// Export default component at the bottom
export default AuthCopyrights;
```

- Use `onClick` definition for the external event handlers, but `handleClick` for the internal.

### Styles

Main rules: [Airbnb CSS-in-JavaScript Style Guide]

We are following the ["Airbnb CSS-in-JavaScript Style Guide"](https://github.com/airbnb/javascript/tree/master/css-in-javascript). Please take a look at it for the main CSS-in-JS style guides.

We are using two types of style definition. Main time we are using simplified JSS:

```jsx
const styles = {
  container: {
    color: colors.gray,
    fontSize: 16,
  },
};
```

If you will require media queries or more complex styles use `makeStyles()` provided by `@material-ui/core`:

```jsx
import { makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import React from 'react';

export const AuthFormContainer = ({ style, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Paper className={classes.container} style={style} elevation={2}>
      {children}
    </Paper>
  );
};

const useStyles = (theme) =>
  makeStyles({
    container: {
      padding: '45px 20px',
      borderRadius: 30,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      maxWidth: 740,

      // For advanced breakpoint styling -> replaces @media queries
      [theme.breakpoints.up('sm')]: {
        padding: '45px 80px',
      },
    },
  })();
```

Additional rules:

- Use `container` name as the root style of the component.
- Use `src/styles/theme.js` file to globaly customise MaterialUI components.
