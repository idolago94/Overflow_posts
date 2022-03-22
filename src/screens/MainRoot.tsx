import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import GStyles from '../utils/GStyles';
import { Main } from '.';

const MainRoot: React.FC<{}> = () => {
    return (
        <SafeAreaView style={GStyles.flex}>
            <Main />
        </SafeAreaView>
    );
}

export default MainRoot