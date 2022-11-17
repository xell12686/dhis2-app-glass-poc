import { createMuiTheme } from "@material-ui/core/styles";

// Color palette from https://projects.invisionapp.com/share/A7LT4TJYETS#/screens/302550228_Color
export const colors = {
    accentPrimary: "#009ADE",
    accentPrimaryDark: "#004BA0",
    accentPrimaryLight: "#C9DEF3",
    accentPrimaryLightest: "#EAF4FF",

    accentSecondary: "#A71D8E",
    accentSecondaryLight: "#BD9EC2",
    accentSecondaryDark: "#83136E",

    accentTertiary: "#A71D8E",
    accentTertiaryLight: "#FFB490",
    accentTertiaryDark: "#83136E",

    accentQuaternary: "#8744B3",
    accentQuaternaryLight: "#CCBBE2",
    accentQuaternaryDark: "#5B198B",

    gradientBg: "linear-gradient(45deg, rgba(155,186,232,1) 0%, rgba(196,149,218,1) 100%)",
    gradientLightBg: "linear-gradient(45deg, rgba(155,186,232,1) 0%, rgba(196,149,218,1) 100%)",

    black: "#212121",
    greyBlack: "#494949",
    grey: "#9E9E9E",
    greyLight: "#666666",
    greyDisabled: "#8E8E8E",
    blueGrey: "#ECEFF1",
    snow: "#F4F6F8",
    white: "#FFFFFF", // Not included in palette!

    negative: "#E53935",
    warning: "#F19C02",
    positive: "#3D9305",
    info: "#EAF4FF",
};

export const palette = {
    common: {
        white: colors.white,
        black: colors.black,
    },
    action: {
        active: colors.greyBlack,
        disabled: colors.greyDisabled,
    },
    text: {
        primary: colors.black,
        secondary: colors.greyBlack,
        disabled: colors.greyDisabled,
        hint: colors.grey,
    },
    primary: {
        main: colors.accentPrimary,
        dark: colors.accentPrimaryDark,
        light: colors.accentPrimaryLight,
        lightest: colors.accentPrimaryLightest, // Custom extension, not used by default
        // contrastText: 'white',
    },
    secondary: {
        main: colors.accentSecondary,
        light: colors.accentSecondaryLight,
        dark: colors.accentSecondaryDark,
        contrastText: "#fff",
    },
    tertiary: {
        main: colors.accentTertiary,
        light: colors.accentTertiaryLight,
        dark: colors.accentTertiaryDark,
        contrastText: "#fff",
    },
    quaternary: {
        main: colors.accentQuaternary,
        light: colors.accentQuaternaryLight,
        dark: colors.accentQuaternaryDark,
        contrastText: "#fff",
    },
    error: {
        main: colors.negative, // This is automatically expanded to main/light/dark/contrastText, what do we use here?
    },
    status: {
        //Custom colors collection, not used by default in MUI
        negative: colors.negative,
        warning: colors.warning,
        positive: colors.positive,
        info: colors.info,
    },
    background: {
        paper: colors.white,
        default: colors.snow,
        grey: "#FCFCFC",
        hover: colors.greyLight,
    },
    divider: colors.greyLight,
    shadow: colors.grey,
};

export const muiTheme = createMuiTheme({
    // colors,
    palette,
    typography: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        // useNextVariants: true,
    },
    overrides: {
        MuiDivider: {
            light: {
                backgroundColor: palette.divider, // No light dividers for now
            },
        },
    },
});
