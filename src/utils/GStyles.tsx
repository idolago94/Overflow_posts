import { Dimensions } from "react-native";

let { height, width } = Dimensions.get('window');

const FONTS = {
    bold: { fontWeight: 'bold' }
};

const LAYOUT = {
    absolutePosition: {
        position: 'absolute'
    },
    flex0: {
        flex: 0
    },
    flex: {
        flex: 1
    },
    flex12: {
        flex: 1.2
    },
    flex3: {
        flex: 3,
    },
    flex5: {
        flex: 5,
    },
    flexGrow0: {
        flexGrow: 0
    },
    flexGrow1: {
        flexGrow: 1
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    jCenter: {
        justifyContent: 'center'
    },
    jEnd: {
        justifyContent: 'flex-end'
    },
    jStart: {
        justifyContent: 'flex-start'
    },
    jBetween: {
        justifyContent: 'space-between'
    },
    jAround: {
        justifyContent: 'space-around'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignStretch: {
        alignItems: 'stretch'
    },
    wrap: {
        flexWrap: 'wrap'
    },
    noWrap: {
        flexWrap: 'nowrap'
    },
    alignSelfStart: {
        alignSelf: 'flex-start'
    },
    alignSelfEnd: {
        alignSelf: 'flex-end'
    },

    LTR: {
        writingDirection: 'ltr'
    },
    RTL: {
        writingDirection: 'rtl'
    },
    directionLTR: {
        direction: 'ltr'
    },
    directionRTL: {
        direction: 'rtl'
    },

    parentWidth: {
        width: '100%'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    noPadding: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: 0,
    },
    noMargin: {
        margin: 0,
    },
    srOnly: {
        color: '#900',
        position: 'absolute',
        top: -3000,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
        display: 'none',
        background: 'none'
    }


};

export default {
    ...FONTS,
    ...LAYOUT,
    SCREEN_HEIGHT: height,
    SCREEN_WIDTH: width,
}