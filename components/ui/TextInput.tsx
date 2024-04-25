import Colors from '@/constants/Colors';
import React from 'react';
import { TextInput as DefaultTextInput, TextInputProps } from 'react-native';

interface ThemeProps extends TextInputProps {
  theme: string;
};

export default function TextInput({ style, theme, ...otherProps }: ThemeProps) {
  const inputColor = theme === 'light' ? Colors.light.input : Colors.dark.input;

  return (
    <DefaultTextInput style={[{ backgroundColor: inputColor }, style]} {...otherProps} />
  );
}