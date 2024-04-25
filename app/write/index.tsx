import FloatingButton from '@/components/ui/FloatingButton';
import TextInput from '@/components/ui/TextInput';
import React, { useRef, useState } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';

export default function index() {
  const colorScheme = useColorScheme();
  const richText = useRef<any>();

  return (
    <View style={styles.container}>
      <RichToolbar
        editor={richText}
        selectedIconTint="#873c1e"
        iconTint="#312921"
        actions={[
          actions.insertImage,
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.setStrikethrough,
          actions.setUnderline,
        ]}
        style={styles.navbar}
      />
      <View style={styles.textContainer}>
        <View style={styles.title}>
          <TextInput theme={colorScheme ?? "light"} placeholder="موضوع" />
          <TextInput theme={colorScheme ?? "light"} placeholder="تاریخ" />
        </View>
        <View style={styles.hr} />
        {/* <TextInput theme={colorScheme ?? "light"} textAlign="right" placeholder="یادداشت کن" multiline forwardRef={textInputRef} value={text} onChangeText={setText} onSelectionChange={handleSelectionChange} /> */}
        <RichEditor
          ref={richText}
          placeholder="یادداشت کن"
          androidHardwareAccelerationDisabled={true}
        />
      </View>
      <FloatingButton icon="check" onPress={() => console.log("clicked")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    direction: "rtl"
  },
  textContainer: {
    paddingHorizontal: 15,
    marginBottom: 30,
    paddingBottom: 60,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 15,
  },
  navbar: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between"
  },
  hr: {
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  textInput: {

  }
});