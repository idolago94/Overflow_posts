import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageSourcePropType, FlatList } from 'react-native'
import { Avatar, Portal, Dialog } from 'react-native-paper';
import Question, { QuestionProps } from '../Question/Question'

export type UserDetailsProps = {
    profile_image: ImageSourcePropType,
    display_name: String,
    reputation: Number,
    questions: Array<QuestionProps>
};

const UserDetails: React.FC<UserDetailsProps> = ({
    profile_image,
    display_name,
    reputation,
    questions
}) => {
    const [modalQuestion, setModalQuestion] = useState<QuestionProps | null>(null)

    return (
        <View>
            <View style={s.userDataWrap}>
                <Avatar.Image style={s.avatar} size={100} source={profile_image} />
                <View>
                    <Text style={s.userDataText}>Name: {display_name}</Text>
                    <Text style={s.userDataText}>Reputation: {reputation}</Text>
                </View>
            </View>
            <FlatList
                keyExtractor={(item) => item.title.toString()}
                data={questions}
                renderItem={({ item }) => <Question {...item} onPress={() => setModalQuestion(item)} />}
            />

            <Portal>
                <Dialog visible={!!modalQuestion} onDismiss={() => setModalQuestion(null)}>
                    {modalQuestion ? <Question {...modalQuestion} showWebView /> : <Text>Question not found</Text>}
                </Dialog>
            </Portal>
        </View>
    )
}

const s = StyleSheet.create({
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