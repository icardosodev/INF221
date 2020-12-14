import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import TopBar from '../../components/TopBar';
import styles from './styles';

export default function homeClient() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  )
}