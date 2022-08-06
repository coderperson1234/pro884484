import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DropDownPicker from 'react-native-dropdown-picker';
export default function App() {
  return (
   <View>
     <ScrollView>
    <DropDownPicker
    items={[
    { label: "Image1" , value: "Image_1" },
    { label: "Image2" , value: "Image_2" },
    { label: "Image3" , value: "Image_3" },
    { label: "Image4" , value: "Image_4" },
  ]}
    />
      
        <TextInput placeholder="Chose and Image"
        multiline={true}
        numberOfLines={4}
        placeholderTextColor="white"
        onChangeText={"Choes what you want"}
        />
      </ScrollView>
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