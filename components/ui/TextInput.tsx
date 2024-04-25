import Colors from '@/constants/Colors';
import React, { ForwardedRef } from 'react';
import { TextInput as DefaultTextInput, TextInputProps } from 'react-native';

interface ThemeProps extends TextInputProps {
  theme: string;
  forwardRef?: ForwardedRef<any>;
};

export default function TextInput({ style, theme, forwardRef, ...otherProps }: ThemeProps) {
  const textColor = theme === 'light' ? Colors.light.text : Colors.dark.text;

  return (
    <DefaultTextInput ref={forwardRef} style={[{ color: textColor }, style]} {...otherProps} />
  );
}