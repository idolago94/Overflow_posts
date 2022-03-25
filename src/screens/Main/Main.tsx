import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import api from '../../utils/Api';
import GStyles from '../../utils/GStyles';
import { UserDetails } from '../../components';
import { UserDetailsProps } from '../../components/UserDetails/UserDetails';

const Main: React.FC<{}> = () => {
    const [userId, setUserId] = React.useState('1264804');
    const [userDetails, setUserDetails] = React.useState<UserDetailsProps | null>(null);

    const getUserDetails = async () => {
        try {
            const res = await api.GetUserQuestions(userId)
            // setUserDetails({ ...res?.items[0], profile_image: { uri: res?.items[0].profile_image } })
            setUserDetails({
                ...res.items[0].owner,
                profile_image: { uri: res.items[0].owner.profile_image },
                questions: res.items
            })
        } catch (e) {
            console.log(`### -> getUserDetails -> e`, e)
        }
    }

    return (
        <View style={GStyles.flex}>
            <View style={s.titleWrap}>
                <Text style={s.title}>Overflow Posts</Text>
            </View>

            <View style={s.userDetails}>
                <TextInput
                    value={userId}
                    onChangeText={(text) => setUserId(text.toString())}
                    style={s.textInput}
                    clearButtonMode='while-editing'
                    onSubmitEditing={getUserDetails}
                />

                {userDetails && <UserDetails {...userDetails} />}
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
    },
    userDetails: {
        paddingHorizontal: 70
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
})

export default Main