import React from 'react'
import { View, Text } from 'react-native'
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
    view_count: Number
}

const Question: React.FC<QuestionProps> = ({
    answer_count,
    creation_date,
    is_answered,
    link,
    score,
    tags,
    title,
    view_count
}) => {

    return (
        <View>
            <Card>
                <Card.Title title={title} subtitle={<Text style={{display: 'none'}}>Created at: {moment(creation_date).calendar()}</Text>} />
                <Card.Content>{Array.apply(null, Array(score)).map(() => <Avatar.Icon icon="star" />)}</Card.Content>
            </Card>
        </View>
    )
}

export default Question