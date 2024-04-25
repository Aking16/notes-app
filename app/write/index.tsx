import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import FloatingButton from '@/components/ui/FloatingButton';
import TextInput from '@/components/ui/TextInput';

export default function index() {
const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <TextInput theme={colorScheme ?? "light"} multiline/>
      <FloatingButton icon="check" onPress={() => console.log("clicked")}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  TextInput: {

  }
});