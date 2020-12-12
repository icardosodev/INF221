import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import TopBar from '../../components/TopBar';
import styles from './styles';

export default function GeracaoCodigo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Quantidade de pontos:</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formText}>Valor da compra:</Text>
          <TextInput style={styles.formInput} />
        </View>
        <View style={styles.formButtonContainer}>
          <TouchableOpacity style={styles.formButton}>
            <Text style={styles.formButtonText}>Gerar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.codigoGroup}>
        <View>
          <Text style={styles.codigoGroupText}>código gerado:</Text>
          <View style={styles.codigoContainer}>
            <View style={styles.codigoView}>
              <Text style={styles.codigoText}>codigo</Text>
            </View>
          </View>
        </View>
        <View style={styles.codigoButtonsGroup}>
          <View style={styles.codigoButtonContainer}>
            <TouchableOpacity style={styles.codigoButton} onPress={() => ToastAndroid.show('Copiado', ToastAndroid.LONG)}>
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
        <TouchableOpacity style={styles.codigoButton} onPress={() => navigation.goBack()}>
          <Text style={styles.codigoButtonText}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}