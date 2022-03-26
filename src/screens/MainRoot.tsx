import React from 'react';
import { SafeAreaView, Appearance, StyleSheet } from 'react-native';
import GStyles from '../utils/GStyles';
import { Main } from '.';
import { Provider as PaperProvider, DefaultTheme, Switch } from 'react-native-paper';
import { THEME } from '../utils/Enums';

const MainRoot: React.FC<{}> = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(Appearance.getColorScheme() != 'light');

    const modeTheme = isDarkMode ? THEME.DARK : THEME.LIGHT
    const theme = {
        ...DefaultTheme,
        dark: isDarkMode,
        colors: {
            ...DefaultTheme.colors,
            ...modeTheme
        }
    };

    return (
        <PaperProvider theme={theme}>
            <SafeAreaView style={[GStyles.flex, { backgroundColor: modeTheme.background }]}>
                <Switch style={s.themeModeToggle} value={!isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
                <Main />
            </SafeAreaView>
        </PaperProvider>
    );
}

const s = StyleSheet.create({
    themeModeToggle: {
        margin: 5
    }
})

export default MainRoot