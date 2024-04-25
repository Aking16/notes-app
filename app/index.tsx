import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FloatingButton from '@/components/ui/FloatingButton';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>index</Text>
      <FloatingButton icon="plus" onPress={() => router.push("/write/")}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
});