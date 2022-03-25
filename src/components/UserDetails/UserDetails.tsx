import React from 'react'
import { View, Text, StyleSheet, ImageSourcePropType } from 'react-native'
import { Avatar } from 'react-native-paper';

export type UserDetailsProps = {
    profile_image: ImageSourcePropType,
    display_name: String,
    reputation: Number
};

const UserDetails: React.FC<UserDetailsProps> = ({
    profile_image,
    display_name,
    reputation
}) => {
    return (
        <View style={s.userDataWrap}>
            <Avatar.Image style={s.avatar} size={100} source={profile_image} />
            <View>
                <Text style={s.userDataText}>Name: {display_name}</Text>
                <Text style={s.userDataText}>Reputation: {reputation}</Text>
            </View>
        </View>
    )
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
    userDataWrap: {
        flexDirection: 'row',
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        marginRight: 20
    },
    userDataText: {
        marginBottom: 10
    }
})

export default UserDetails