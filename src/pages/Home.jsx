import React, { useState, useEffect } from 'react'
import { Image, View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native'
import { Feather } from '@expo/vector-icons'


export default function Home() {
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        setRoutines([
            {
                title: 'Escovar os dentes',
                hour: '6:50 às 7:00',
                desc: 'Higiene pessoal ao acordar.',
                icon: 'user'
            },
            {
                title: 'Escola',
                hour: '7:00 às 12:00',
                desc: 'Ensino médio técnico na ETEC Cidade Tiradentes.',
                icon: 'edit-2'
            },
            {
                title: 'Estágio',
                hour: '12:00 às 18:00',
                desc: 'Estágio em Desenvolvimento Full Stack na Zower.',
                icon: 'monitor'
            },
            {
                title: 'Atividades',
                hour: '18:00 às 19:30',
                desc: 'Realização das atividades escolares',
                icon: 'edit'
            },
            {
                title: 'Estudos',
                hour: '19:30 às 21:00',
                desc: 'Estudos relacionados à programação e outras coisas.',
                icon: 'code'
            },
            {
                title: 'Entretenimento',
                hour: '21:00 às 22:00',
                desc: 'Vídeos, diálogos e séries.',
                icon: 'smartphone'
            },
            {
                title: 'Dormir',
                hour: '22:00 às 6:50',
                desc: 'Descansar.',
                icon: 'user-check'
            },
        ])
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>
                    Rotina
                </Text>
                {
                    routines.map((routine, index) => (
                    <View style={styles.cardContainer}>
                        <View style={styles.cardContainerSecondary}>
                            <Feather name={routine.icon} size={20} color="#000" />
                            <Text style={styles.cardTitle}>{routine.title}</Text>
                        </View>
                        <Text>
                           {routine.desc}
                        </Text>
                        <View style={styles.cardContainerTertiary}>
                            <Feather name="clock" size={18} color="#FCFAF7" />
                            <Text style={styles.cardTextWhite}>{routine.hour}</Text>
                        </View>
                    </View>
                    ))
                }
        </View>
        </View> 

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    detailsContainer: {
        padding: 15,
        alignItems: 'center'
    },
    
    title: {
        color: '#000',
        fontSize: 40,
        fontFamily: 'Montserrat_700Bold',
        textTransform: 'uppercase',
        marginBottom: 20,
    },  

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

