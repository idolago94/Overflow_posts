import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import GStyles from '../utils/GStyles';
import { Main } from '.';
import { Provider as PaperProvider } from 'react-native-paper';

const MainRoot: React.FC<{}> = () => {
    return (
        <PaperProvider>
            <SafeAreaView style={GStyles.flex}>
                <Main />
            </SafeAreaView>
        </PaperProvider>
    );
}

export default MainRoot