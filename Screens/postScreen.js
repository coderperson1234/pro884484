import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
    renderItem = ({ item: post }) => {
      return <PostCard post={post} navigation={this.props.navigation} />;
    };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
