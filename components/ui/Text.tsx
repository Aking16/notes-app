import Colors from '@/constants/Colors';
import React from 'react';
import { Text as DefaultText } from 'react-native';

type ThemeProps = {
  theme: string;
};

export type TextProps = ThemeProps & DefaultText['props'];


export default function Text({ style, theme, ...otherProps }: TextProps) {
  const textColor = theme === 'light' ? Colors.light.text : Colors.dark.text;

  return (
    <DefaultText style={[{ color: textColor }, style]} {...otherProps} />
  );
}