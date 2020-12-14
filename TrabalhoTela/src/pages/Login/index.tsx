import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textSt}>Entrar como:</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('homeClient')}>
              <Text style={styles.buttonText}>Cliente</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('homeCompany')}>
              <Text style={styles.buttonText}>Empresa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}