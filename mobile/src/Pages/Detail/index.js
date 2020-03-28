import React from 'react'
import { View, Image, Text, TouchableOpacity,Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import logoimg from '../../assets/logo.png'
import {useNavigation} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import styles from './styles'

export default function Detail() {
    const navigation = useNavigation();
const message = 'ola Apad, estou entrando em contato pois gostaria de ajudar o caso "caso aqui" com o valor de "Valor" '
    function navigateBack()
    {
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
        subject: 'heroi do caso: thaynazinha',
        recipients: ['v_mmoraes@hotmail.com'],
        body:message,
        })
    }

    function sendWhatsApp()
    {
Linking.openURL(`whatsapp://send?phone=5511944612111&text=${message}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoimg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041"> </Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty], {marginTop:0}}> ONG </Text>
                <Text style={styles.incidentValue}> APAD </Text>

                <Text style={styles.incidentProperty}> Caso </Text>
                <Text style={styles.incidentValue}> descricao do caso </Text>

                <Text style={styles.incidentProperty}> Valor </Text>
                <Text style={styles.incidentValue}> 1200 </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}> Salve o dia </Text>
                <Text style={styles.heroTitle}> Seja um heroi desse caso </Text>
                <Text style={styles.herodescription}> Entre em contato </Text>

                <View style={styles.actions} >
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}> WhatsApp </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}> E-MAIL </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}