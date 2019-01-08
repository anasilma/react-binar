import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class AppHome extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.textFirst}> Home </Text>
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
export default AppHome;