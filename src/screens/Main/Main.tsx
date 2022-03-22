import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GStyles from '../../utils/GStyles';


const Main: React.FC<{}> = () => {


    return (
        <View style={GStyles.flex}>
            <View style={s.titleWrap}>
                <Text style={s.title}>Overflow Posts</Text>
            </View>
        </View>
    );
}

const s = StyleSheet.create({
    titleWrap: {
        paddingVertical: 40,
        alignItems: 'center'
    },
    title: {
        fontSize: 60,
        textAlign: 'center'
    }
})

export default Main