import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';


export default function TopBar() {

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <MaterialIcons name='menu' size={32} color='#FFF'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}