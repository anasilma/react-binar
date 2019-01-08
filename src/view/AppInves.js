import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class AppInves extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> Inves </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textFirst: {
  fontSize: 50,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 300,
  },
});
export default AppInves;