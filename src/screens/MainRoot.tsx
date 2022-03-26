import React from 'react';
import { SafeAreaView, Appearance, StyleSheet, View } from 'react-native';
import GStyles from '../utils/GStyles';
import { Main } from '.';
import { Provider as PaperProvider, DefaultTheme, Switch, Avatar } from 'react-native-paper';
import { THEME } from '../utils/Enums';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen'

const MainRoot: React.FC<{}> = () => {
    React.useEffect(() => {
        setTimeout(SplashScreen.hide, 1000)
    },[])
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

    const ThemeModeToggle = () => (
        <View style={s.themeModeToggle}>
            <Avatar.Icon icon="moon-o" size={20} />
            <Switch style={s.themeModeToggle} value={!isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
            <Avatar.Icon icon="sun-o" size={20} />
        </View>
    )

    return (
        <PaperProvider
            theme={theme}
            settings={{
                icon: props => <AwesomeIcon {...props} />,
            }}
        >
            <SafeAreaView style={[GStyles.flex, { backgroundColor: modeTheme.background }]}>
                <ThemeModeToggle />
                <Main />
            </SafeAreaView>
        </PaperProvider>
    );
}

const s = StyleSheet.create({
    themeModeToggle: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default MainRoot