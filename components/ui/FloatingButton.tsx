import Colors from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, useColorScheme } from 'react-native';

interface FloatingButtonProps extends TouchableOpacityProps {
  icon: any;
}

export default function FloatingButton({icon, ...props}: FloatingButtonProps) {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity style={[styles.floating, { backgroundColor: Colors[colorScheme ?? 'light'].tint }]} {...props}>
      <Entypo name={icon} color={Colors[colorScheme ?? 'light'].foreground} size={32} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
  }
});