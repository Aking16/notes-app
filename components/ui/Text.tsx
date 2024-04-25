import Colors from '@/constants/Colors';
import React from 'react';
import { Text as DefaultText, TextProps } from 'react-native';

interface ThemeProps extends TextProps {
  theme: string;
};

export default function Text({ style, theme, ...otherProps }: ThemeProps) {
  const textColor = theme === 'light' ? Colors.light.text : Colors.dark.text;

  return (
    <DefaultText style={[{ color: textColor }, style]} {...otherProps} />
  );
}