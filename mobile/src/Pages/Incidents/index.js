import React,  {useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import logoimg from '../../assets/logo.png'
import styles from './styles'
import api from '../../services/api'

export default function Incidents() {
    
const [incident, setIncidents] = useState([])

    const  navigation = useNavigation();
     
    function navigateToDetail()
    {
        navigation.navigate('Detail')
    }

    async function loadIncidents()
    {
        const response = await api.get('incidents')
        setIncidents(response.data) ;
    }

    useEffect(() => {
        loadIncidents();
    }, [])

    return (    
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg} />
                <Text tyle={styles.headerText}>
                    total de <Text style={styles.headerTextBold}> 0 casos </Text>
                </Text>
            </View>
            <Text style={styles.title}> Bem vindo ! </Text>
            <Text style={styles.description}> Escolha um caso abaixo e salve o dia </Text>

    <FlatList
    data={incident}
    style={styles.incidentlist}
    keyExtractor={incident => String(incident.id)}
    showsVerticalScrollIndicator={false}
    renderItem={( {item:incident}) => (
        <View style={styles.incident}>
        <Text style={styles.incidentProperty}> ONG: </Text>
        <Text style={styles.incidentValue}> {incident.name} </Text>

        <Text style={styles.incidentProperty}> Caso </Text>
        <Text style={styles.incidentValue}> {incident.title} </Text>

        <Text style={styles.incidentProperty}> Valor </Text>
        <Text style={styles.incidentValue}> {incident.value} </Text>
        
        <TouchableOpacity style={styles.detailsButton}
            onPress={navigateToDetail}>
            <Text style={styles.detailButtonText}> ver mais detalhes </Text>
            <Feather name="arrow-right" size={16} color="#e02041"> </Feather>
        </TouchableOpacity>
    </View>
    )}
    />
           
        </View>
    
    );
}