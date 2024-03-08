import React from 'react';
import { StyleSheet, View } from 'react-native';
import PhotoEditor from './PhotoEditor';

export default function App() {
  return (
    <View style={styles.container}>
      <PhotoEditor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
