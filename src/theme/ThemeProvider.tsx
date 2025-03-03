import React, { ReactNode } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components/native';
import {COLORS} from '../constants/colors';

const theme = {
    colors: {
        primary: COLORS.redSoft,
        secondary: COLORS.greenMatch,
        background: COLORS.whiteBackground,
        text: COLORS.grayText,
        gray: COLORS.graySoft,
    },
    fonts: {
        regular: 'NunitoSans-Regular',
        bold: 'NunitoSans-Bold',
    },
};

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export { ThemeProvider, theme };
