//import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Clipboard, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import TopBar from '../../components/TopBar';
import styles from './styles';



export default function GeracaoCodigo() {
  //const navigation = useNavigation();
  const [codes, setCodes] = useState([
    { code: '12345', points: '100', validated: false },
    { code: '54321', points: '50', validated: true },]);

  useEffect(() => {
    async function loadCod() {
      const codigoStorage = await AsyncStorage.getItem('@cod')

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

  const [points, setPoints] = useState('');
  const [purchaseValue, setPurchaseValue] = useState('');
  //const [code, setCode] = useState([] as any);
  const [code, setCode] = useState({
    code: 'código'
  });


  function generateCode() {
    let random = '';
    for (let i = 0; i < 4; i++)
      random += String(Math.floor(Math.random() * 10));

    let s = 'CODE' + random +
      String(points).padStart(4, '0') + String(purchaseValue).padStart(8, '0');

    const newCode = {
      code: s,
      points: points,
      validated: false
    };



    setCode(newCode);
    setCodes([...codes, newCode]);
  }

  function copyToClipboard() {
    if (code) {
      Clipboard.setString(code.code);
    }
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Quantidade de pontos:</Text>
          <TextInput style={styles.formInput}
            value={points}
            onChangeText={(p) => setPoints(p)}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Valor da compra:</Text>
          <TextInput style={styles.formInput}
            value={purchaseValue}
            onChangeText={(val) => setPurchaseValue(val)}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.formButtonContainer}>
          <TouchableOpacity style={styles.formButton} onPress={generateCode}>
            <Text style={styles.formButtonText}>Gerar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.codigoGroup}>
        <View>
          <Text style={styles.codigoGroupText}>Código gerado:</Text>
          <View style={styles.codigoContainer}>
            <View style={styles.codigoView}>
              <Text style={styles.codigoText}>{code.code}</Text>
            </View>
          </View>
        </View>
        <View style={styles.codigoButtonsGroup}>
          <View style={styles.codigoButtonContainer}>
            <TouchableOpacity style={styles.codigoButton} onPress={copyToClipboard}>
              <Text style={styles.codigoButtonText}>Copiar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.codigoButtonContainer}>
            <TouchableOpacity style={styles.codigoButton} onPress={() => ToastAndroid.show('Imprimindo', ToastAndroid.LONG)}>
              <Text style={styles.codigoButtonText}>Imprimir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.codigoButton} /*onPress={() => navigation.goBack()}*/>
          <Text style={styles.codigoButtonText}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}