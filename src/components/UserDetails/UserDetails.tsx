import React, { useState } from 'react'
import { View, StyleSheet, ImageSourcePropType, FlatList } from 'react-native'
import { Avatar, Portal, Dialog, Text, withTheme, DataTable } from 'react-native-paper';
import Question, { QuestionProps } from '../Question/Question'
import GStyles from '../../utils/GStyles';
import RNPickerSelect from 'react-native-picker-select';
import sortBy from 'lodash/sortBy';
import { PaperThemeProp } from '../../utils/PropTypes';

export type UserDetailsProps = {
    profile_image: ImageSourcePropType,
    display_name: string,
    reputation: Number,
    questions: Array<QuestionProps>
};

const sortOptions = [
    { label: 'Date', value: 'creation_date' },
    { label: 'Answers', value: 'answer_count' },
    { label: 'Views', value: 'view_count' },
]

const UserDetails: React.FC<UserDetailsProps & PaperThemeProp> = ({
    profile_image,
    display_name,
    reputation,
    questions,
    theme
}) => {
    const [modalQuestion, setModalQuestion] = useState<QuestionProps | null>(null)
    const [sortOption, setSortOption] = useState('creation_date')

    const ListHeader = () => (
        <DataTable.Row>
            <DataTable.Cell>
                <Text>Questions found: {questions.length}</Text>
            </DataTable.Cell>
            <View style={s.sortTypeHeader}>
                <Text>Sort By: </Text>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    onValueChange={(value) => setSortOption(value)}
                    placeholder={{}}
                    items={sortOptions}
                    value={sortOption}
                    style={{
                        inputAndroid: { color: theme.colors.text },
                        inputIOS: { ...s.iosPicker, color: theme.colors.text },
                    }}
                    fixAndroidTouchableBug
                />
            </View>
        </DataTable.Row>
    )

    return (
        <View style={GStyles.flex}>
            <View style={s.userDataWrap}>
                <Avatar.Image style={s.avatar} size={100} source={profile_image} />
                <View>
                    <Text style={s.userDataText}>Name: {display_name}</Text>
                    <Text style={s.userDataText}>Reputation: {reputation}</Text>
                </View>
            </View>

            <ListHeader />
            <FlatList
                keyExtractor={(item) => item.title.toString()}
                data={sortBy(questions, sortOption)}
                renderItem={({ item }) => <Question {...item} onPress={() => setModalQuestion(item)} />}
            />

            <Portal>
                <Dialog visible={!!modalQuestion} onDismiss={() => setModalQuestion(null)}>
                    {modalQuestion ? <Question {...modalQuestion} showWebView={true} /> : <Text>Question not found</Text>}
                </Dialog>
            </Portal>
        </View>
    )
}

const s = StyleSheet.create({
    iosPicker: { height: '100%' },
    title: {
        fontSize: 60,
        textAlign: 'center'
    },
    userDetails: {
        paddingHorizontal: 70
    },
    userDataWrap: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        marginRight: 20
    },
    userDataText: {
        marginBottom: 10
    },
    listHeaderContainer: {
        padding: 2,
        borderRadius: 0,
        margin: 0
    },
    sortTypeHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default withTheme(UserDetails)