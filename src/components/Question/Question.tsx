import React, { lazy } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Card, Chip, Text } from 'react-native-paper';
import moment from 'moment'
import GStyles from '../../utils/GStyles';
const WebView = React.lazy(() => import('react-native-webview'));

export type QuestionProps = {
    answer_count: Number,
    creation_date: Date,
    is_answered: Boolean,
    link: string,
    score: Number,
    tags: Array<string>,
    title: string,
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
        <Card>
            <Card.Title title={title} subtitle={<Text>Created at: {moment(creation_date).calendar()} | Views: {view_count} | Answers: {answer_count}</Text>} />
            <Card.Content style={s.tagsWrap}>
                {tags.map(t => <Chip style={s.tag} textStyle={s.tagText} key={t}>{t}</Chip>)}
            </Card.Content>
        </Card>
        {showWebView && <React.Suspense fallback={<View />}>
            <View style={s.webView}>
                <WebView startInLoadingState={true} source={{ uri: link }} />
            </View>
        </React.Suspense>}
    </React.Fragment>)

    return onPress ?
        <TouchableOpacity onPress={() => onPress && onPress()}>
            <QuestionContent />
        </TouchableOpacity> :
        <View>
            <QuestionContent />
        </View>

}

const s = StyleSheet.create({
    webView: {
        height: GStyles.SCREEN_HEIGHT * .6
    },
    tagsWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag: {
        marginRight: 5,
        marginBottom: 5,
    },
    tagText: {
        fontSize: 12
    }
})

export default Question