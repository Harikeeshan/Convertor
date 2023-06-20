import React from 'react'
import type { PropsWithChildren } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;  // these 2 things are added in the button
    flag: string;
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {},
    country: {}
})

export default CurrencyButton
