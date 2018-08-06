import { createMuiTheme } from '@material-ui/core/styles';

export const mainColor = '#121316'
export const secondaryColor = '#f22b29'
export const errorColor = '#545454'
export const whiteColor = '#eff1ed'

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor
    },
    error: {
      main: errorColor
    }
  },
})

export const styledTheme = {
  mainColor,
  secondaryColor,
  errorColor,
  whiteColor
}