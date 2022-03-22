import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageSourcePropType } from 'react-native';
import api from '../../utils/Api';
import GStyles from '../../utils/GStyles';

export type UserProps = {
    profile_image: ImageSourcePropType,
    display_name: String,
    reputation: Number
};

const Main: React.FC<{}> = () => {
    const [userId, setUserId] = React.useState('');
    const [userDetails, setUserDetails] = React.useState<UserProps | null>(null);

    const getUserDetails = async () => {
        try {
            const res = await api.GetUserDetails(userId)
            setUserDetails({ ...res?.items[0], profile_image: { uri: res?.items[0].profile_image } })
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

                {userDetails && <View style={s.userDataWrap}>
                    <Image style={s.avatar} source={userDetails.profile_image} />
                    <View>
                        <Text style={s.userDataText}>Name: {userDetails.display_name}</Text>
                        <Text style={s.userDataText}>Reputation: {userDetails.reputation}</Text>
                    </View>
                </View>}
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
    },
    userDataWrap: {
        flexDirection: 'row',
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 100,
        width: 100,
        marginRight: 20
    },
    userDataText: {
        marginBottom: 10
    }
})

export default Main