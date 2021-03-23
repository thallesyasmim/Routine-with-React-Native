import React, { useState, useEffect } from 'react'
import { Image, View, ScrollView, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Card from '../../components/Card'

import styles from './styles'


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
        <ScrollView style={styles.container}>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>
                    Rotina
                </Text>
                {
                    routines.map((routine, index) => (
                        <Card icon={routine.icon} hour={routine.hour} title={routine.title} desc={routine.desc} />
                    ))
                }
        </View>
        </ScrollView> 

    )
}