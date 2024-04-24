import Text from '@/components/ui/Text';
import Colors from '@/constants/Colors';
import { Entypo, Feather } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet, View, useColorScheme } from 'react-native';

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
        <Text style={styles.title} theme={colorScheme ?? 'light'}>یادداشت های من</Text>
        <View style={styles.navBar}>
          <Feather name="menu" size={24} color={Colors[colorScheme ?? 'light'].text} />
          <View style={styles.flex}>
            <Feather name="search" size={24} color={Colors[colorScheme ?? 'light'].text} />
            <Entypo name="dots-three-vertical" size={24} color={Colors[colorScheme ?? 'light'].text} />
          </View>
        </View>
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
    flexDirection: "column"
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