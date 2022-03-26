import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import api from '../../utils/Api';
import GStyles from '../../utils/GStyles';
import { UserDetails } from '../../components';
import { UserDetailsProps } from '../../components/UserDetails/UserDetails';
import { Text, TextInput } from 'react-native-paper'
import Images from '../../utils/Images';

const Main: React.FC<{}> = () => {
    const [userId, setUserId] = React.useState('');
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
                <Image resizeMode='contain' style={s.appImage} source={Images.appLogo} />
            </View>

            <TextInput
                value={userId}
                onChangeText={(text) => setUserId(text.toString())}
                placeholder='Enter user id'
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
    appImage: { width: GStyles.SCREEN_WIDTH * .8, height: 110 },
    titleWrap: {
        alignItems: 'center'
    },
    title: {
        fontSize: 45,
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