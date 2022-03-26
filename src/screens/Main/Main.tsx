import React from 'react';
import { View, StyleSheet } from 'react-native';
import api from '../../utils/Api';
import GStyles from '../../utils/GStyles';
import { UserDetails } from '../../components';
import { UserDetailsProps } from '../../components/UserDetails/UserDetails';
import { Text, TextInput } from 'react-native-paper'

const Main: React.FC<{}> = () => {
    const [userId, setUserId] = React.useState('1264804');
    const [userDetails, setUserDetails] = React.useState<UserDetailsProps | null>(null);
    const [errorMsg, setErrorMsg] = React.useState(null);

    const getUserDetails = async () => {
        try {
            const res = await api.GetUserQuestions(userId)
            setUserDetails({
                ...res.items[0].owner,
                profile_image: { uri: res.items[0].owner.profile_image },
                questions: res.items
            })
            setErrorMsg(null);
        } catch (e: any) {
            console.log(`### -> getUserDetails -> e`, e)
            setErrorMsg(e.error_message);
            setUserDetails(null);
        }
    }

    return (
        <View style={GStyles.flex}>
            <View style={s.titleWrap}>
                <Text style={s.title}>Overflow Posts</Text>
            </View>

            <TextInput
                value={userId}
                onChangeText={(text) => setUserId(text.toString())}
                style={s.textInput}
                clearButtonMode='while-editing'
                onSubmitEditing={getUserDetails}
            />

            {errorMsg && <Text style={s.errorMsg}>{errorMsg}</Text>}
            {userDetails && <UserDetails {...userDetails} />}
        </View>
    );
}

const s = StyleSheet.create({
    titleWrap: {
        paddingVertical: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 60,
        textAlign: 'center'
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 70,
        padding: 0
    },
    errorMsg: {
        color: 'red',
        textAlign: 'center',
        paddingTop: 40
    }
})

export default Main