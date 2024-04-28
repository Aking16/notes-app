import Colors from '@/constants/Colors';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

export default function layout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Vazirmatn-Light': require('../assets/fonts/Vazirmatn-Light.ttf'),
    'Vazirmatn-Regular': require('../assets/fonts/Vazirmatn-Regular.ttf'),
    'Vazirmatn-Medium': require('../assets/fonts/Vazirmatn-Medium.ttf'),
    'Vazirmatn-SemiBold': require('../assets/fonts/Vazirmatn-SemiBold.ttf'),
    'Vazirmatn-Bold': require('../assets/fonts/Vazirmatn-Bold.ttf'),
  });

  if (!fontsLoaded) {
    // Font is not yet loaded, return a loading indicator or null
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
        <Slot />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    position: 'relative',
    flex: 1,
    flexDirection: "column",
    direction: "rtl"
  },
});