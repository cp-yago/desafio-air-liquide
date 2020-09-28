import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';


import { StyleSheet, View } from 'react-native';
import Main from './src/screens/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Main />
      </Provider>
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
