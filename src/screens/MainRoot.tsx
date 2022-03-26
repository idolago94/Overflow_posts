import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import GStyles from '../utils/GStyles';
import { Main } from '.';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        text: 'black',
    }
};

const MainRoot: React.FC<{}> = () => {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaView style={GStyles.flex}>
                <Main />
            </SafeAreaView>
        </PaperProvider>
    );
}

export default MainRoot