const palette = {
  primary: {
    light: "#5E74C1",
    main: "#3a4f96",
    // dark: "#24315D",
    dark: "#1f2a4f",
    contrastText: "#FFFFFF",
  },
  secondary: {
    light: "#CEE8F7",
    // main: "#58B0E3",
    main: "#1F81BA",
    contrastText: "#FFFFFF",
  },
  error: {
    light: "#F6E3E2",
    main: "#D90C00",
    dark: "#B7524C",
  },
  grey: {
    200: "#F9FAFD",
    300: "#EBEEF7",
    400: "#DDE2F2",
    500: "#CDD2E1",
    600: "#989DB2",
  },
  success: {
    main: "#D0F8E7",
    dark: "#095635",
  },
  info: {
    light: "#82b5f2",
    main: "#4d95ec",
    dark: "#1975e6",
  },
  warning: {
    light: "#efbb38",
    main: "#EF9C38",
    dark: "#ec8a14",
  },
  text: {
    primary: "#222222",
    secondary: "#4e4e51",
    disabled: "#808285",
    hint: "#AAADBB",
  },
  background: {
    paper: "#FFFFFF",
    default: "#f6f6f6",
  },
};

const typography = {
  button: {
    textTransform: "none",
  },
  h6: {
    fontSize: "1.25rem",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.6rem",
    letterSpacing: "-0.2px",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.6rem",
    letterSpacing: "-0.2px",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43rem",
    letterSpacing: "0.1px",
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5rem",
    letterSpacing: "0.2px",
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.57rem",
    letterSpacing: "0.1px",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.3rem",
    letterSpacing: "0.4px",
  },
  h5: {
    fontSize: "1.5rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33rem",
    letterSpacing: "0.05px",
  },
};

const overrides = {
  MuiMenu: {
    list: {
      padding: 0,
    },
  },
};

export const AppTheme = {
  overrides: overrides,
  palette: palette,
  typography: typography,
};

export default AppTheme;
