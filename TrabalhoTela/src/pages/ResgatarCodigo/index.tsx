//import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TopBar from '../../components/TopBar';
import styles from './styles';

export default function ResgatarCodigo() {
  //const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [codes, setCodes] = useState([
    { code: '12345', points: '100', validated: false },
    { code: '54321', points: '50', validated: true },
  ]);

  useEffect(() => {
    async function loadCod() {
      const codigoStorage = await AsyncStorage.getItem('@cod');

      if (codigoStorage) {
        setCodes(JSON.parse(codigoStorage));
      }
    }


    loadCod();
  }, []);

  useEffect(() => {
    async function saveCode() {
      await AsyncStorage.setItem('@cod', JSON.stringify(codes));
    }

    saveCode();

  }, [codes]);

  function handleAdd() {

    if (input === '') return

    let data = codes.filter(element => element.code == input);
    if (data.length === 0) Alert.alert('Código inválido', 'O código é invalido.');
    else if (data[0].validated === true) Alert.alert('Código inválido', 'O código já foi validado.');
    else {
      //const aux = codes;
      for (let i = 0; i < codes.length; i = i + 1) {
        if (codes[i].code == input) {
          codes[i].validated = true;
          break;
        }
      }
      //setCodes(aux);
      Alert.alert('Parabéns', `Você recuperou ${data[0].points} pontos!!!`);
    }

  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.inputGroup}>
        <View>
          <Text style={styles.inputGroupText}>Código de pontos:</Text>
          <TextInput style={styles.inputGroupInput}
            value={input}
            onChangeText={(texto) => setInput(texto)} />
        </View>
        <View style={styles.inputGroupButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleAdd()}>
            <Text style={styles.buttonText} >Validar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.button} /*onPress={() => navigation.goBack()}*/>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}