import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MenuCliente from '../MenuCliente';
import styles from './styles';

export default function TopBar({ menuType }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
            <MaterialIcons name='menu' size={32} color='#FFF' />
          </TouchableOpacity>
        </View>
      </View>
      {
        showMenu ? <View style={styles.menuContainer}>
          {menuType === 'Cliente' ? <MenuCliente /> : <MenuCliente />}
        </View> : null
      }
    </View>
  )
}