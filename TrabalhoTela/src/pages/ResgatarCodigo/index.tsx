import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import TopBar from '../../components/TopBar';
import styles from './styles';

export default function ResgatarCodigo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.inputGroup}>
        <View>
          <Text style={styles.inputGroupText}>Código de pontos:</Text>
          <TextInput style={styles.inputGroupInput} />
        </View>
        <View style={styles.inputGroupButtonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Validar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}