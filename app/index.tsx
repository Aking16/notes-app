import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FloatingButton from '@/components/ui/FloatingButton';

export default function index() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
});