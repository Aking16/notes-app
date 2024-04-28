import TextInput from '@/components/ui/TextInput';
import Colors from '@/constants/Colors';
import { Entypo, Feather } from '@expo/vector-icons';
import { Link, Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';

export default function _layout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Link href="/">
          <Feather name="arrow-left" size={24} color={Colors[colorScheme ?? 'light'].text} />
          <TextInput theme={colorScheme ?? "light"} placeholder="موضوع" style={[{width: 100,backgroundColor: "blue", marginTop: StatusBar.currentHeight}]}/>
        </Link>
        <View style={styles.flex}>
          <Feather name="search" size={24} color={Colors[colorScheme ?? 'light'].text} />
          <Entypo name="dots-three-vertical" size={24} color={Colors[colorScheme ?? 'light'].text} />
        </View>
      </View>
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    marginTop: StatusBar.currentHeight! + 10,
    marginBottom: 10,
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