// Import libraries for making a comp
import React from 'react'
import { Text, View } from 'react-native'

// Make a comp
const Header = (props) => {
    // Object destructuring
    const { textStyle, viewStyle } = styles

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = { 
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

// Make the comp avail to other parts of the app
export { Header }