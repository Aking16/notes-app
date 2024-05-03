import FloatingButton from '@/components/ui/FloatingButton';
import Text from '@/components/ui/Text';
import TextInput from '@/components/ui/TextInput';
import openDatabase from '@/libs/database';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, useColorScheme } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';

const boldIcon = ({ tintColor }: any) => <FontAwesome5 name="bold" size={24} color={tintColor} />;
const underlineIcon = ({ tintColor }: any) => <FontAwesome5 name="underline" size={24} color={tintColor} />;
const italicIcon = ({ tintColor }: any) => <FontAwesome5 name="italic" size={24} color={tintColor} />;
const strikeIcon = ({ tintColor }: any) => <FontAwesome5 name="strikethrough" size={24} color={tintColor} />;
const bulletListIcon = ({ tintColor }: any) => <FontAwesome5 name="list-ul" size={24} color={tintColor} />;
const orderedListIcon = ({ tintColor }: any) => <FontAwesome5 name="list-ol" size={24} color={tintColor} />;
const linkIcon = ({ tintColor }: any) => <FontAwesome5 name="link" size={24} color={tintColor} />;
const undoIcon = ({ tintColor }: any) => <FontAwesome5 name="undo" size={24} color={tintColor} />;
const redoIcon = ({ tintColor }: any) => <FontAwesome5 name="redo" size={24} color={tintColor} />;

export default function index() {
  const db = openDatabase();
  const colorScheme = useColorScheme();
  const richText = useRef<any>();
  const scrollRef = useRef<ScrollView>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  function add () {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
    );
  }

  const handleCursorPosition = useCallback((scrollY: number) => {
    scrollRef.current!.scrollTo({ y: scrollY - 30, animated: true });
  }, []);

  return (
    <View style={styles.container}>
      <RichToolbar
        style={styles.navbar}
        editor={richText}
        selectedIconTint="#873c1e"
        iconTint="#312921"
        actions={[
          actions.setBold,
          actions.setUnderline,
          actions.setItalic,
          actions.setStrikethrough,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.undo,
          actions.redo
        ]}
        iconMap={{
          [actions.setBold]: boldIcon,
          [actions.setUnderline]: underlineIcon,
          [actions.setItalic]: italicIcon,
          [actions.setStrikethrough]: strikeIcon,
          [actions.insertBulletsList]: bulletListIcon,
          [actions.insertOrderedList]: orderedListIcon,
          [actions.insertLink]: linkIcon,
          [actions.undo]: undoIcon,
          [actions.redo]: redoIcon,
        }}
      />
      <View style={styles.textContainer}>
        <View style={styles.title}>
          <TextInput theme={colorScheme ?? "light"} placeholder="موضوع" />
          <TextInput theme={colorScheme ?? "light"} placeholder="تاریخ" />
        </View>
        <View style={styles.hr} />
        <ScrollView
          keyboardDismissMode={'none'}
          ref={scrollRef}
          nestedScrollEnabled={true}
          scrollEventThrottle={20}>
          <RichEditor
            onChange={(value) => setText(value)}
            ref={richText}
            placeholder="یادداشت کن"
            androidHardwareAccelerationDisabled={true}
            onCursorPosition={handleCursorPosition}
          />
        </ScrollView>
      </View>
      <FloatingButton icon="check" onPress={() => add()} />
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
    paddingBottom: 10,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 15,
  },
  navbar: {
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
});