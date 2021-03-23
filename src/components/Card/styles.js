import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        padding: 20,
        borderWidth: 2,
        borderColor: '#50CC77',
        borderRadius: 5,
        backgroundColor: '#FCFAF7',
        marginBottom: 25
    },

    cardContainerSecondary: {
        flexDirection: 'row',
        marginBottom: 8
    },

    cardContainerTertiary: {
        paddingVertical: 5,
        paddingLeft: 10,
        maxWidth: 145,
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#50CC77',
        borderRadius: 5
    },

    cardTitle: {
        fontSize: 15,
        fontFamily: 'Montserrat_600SemiBold',
        textTransform: 'uppercase',
        marginLeft: 10
    },

    cardTextWhite: {
        color: '#fff',
        fontFamily: 'Montserrat_500Medium',
        textTransform: 'uppercase',
        marginLeft: 5
    }
})

export default styles