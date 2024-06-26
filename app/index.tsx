import FloatingButton from '@/components/ui/FloatingButton';
import Text from '@/components/ui/Text';
import Colors from '@/constants/Colors';
import { Entypo, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';

export default function index() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title} theme={colorScheme ?? 'light'}>یادداشت های من</Text>
      <View style={styles.navBar}>
        <Feather name="menu" size={24} color={Colors[colorScheme ?? 'light'].text} />
        <View style={styles.flex}>
          <Feather name="search" size={24} color={Colors[colorScheme ?? 'light'].text} />
          <Entypo name="dots-three-vertical" size={24} color={Colors[colorScheme ?? 'light'].text} />
        </View>
      </View>
      <Text theme={colorScheme ?? 'light'}>index</Text>
      <FloatingButton icon="plus" onPress={() => router.push("/write/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    direction: "rtl"
  },
  title: {
    fontFamily: 'Vazirmatn-Medium',
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
  },
  navBar: {
    marginVertical: 30,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  }
});