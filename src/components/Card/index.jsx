import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

export default function Card({ icon, hour, title, desc }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContainerSecondary}>
                <Feather name={icon} size={20} color="#000" />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <Text>
                {desc}
            </Text>
            <View style={styles.cardContainerTertiary}>
                <Feather name="clock" size={18} color="#FCFAF7" />
                <Text style={styles.cardTextWhite}>{hour}</Text>
            </View>
        </View>
    )
}

