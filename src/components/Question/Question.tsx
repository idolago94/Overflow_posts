import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment'

export type QuestionProps = {
    answer_count: Number,
    creation_date: Date,
    is_answered: Boolean,
    link: String,
    score: Number,
    tags: Array<String>,
    title: String,
    view_count: Number,
    onPress: Function,
    showWebView: Boolean
}

const Question: React.FC<QuestionProps> = ({
    answer_count,
    creation_date,
    is_answered,
    link,
    score,
    tags,
    title,
    view_count,
    onPress,
    showWebView
}) => {

    const QuestionContent = () => (<React.Fragment>
        {showWebView && <Text>show web view</Text>}
        <Card>
            <Card.Title title={title} subtitle={<Text style={{ display: 'none' }}>Created at: {moment(creation_date).calendar()}</Text>} />
        </Card>
    </React.Fragment>)

    return onPress ?
        <TouchableOpacity onPress={() => onPress && onPress()}>
            <QuestionContent />
        </TouchableOpacity> :
        <View>
            <QuestionContent />
        </View>

}

export default Question