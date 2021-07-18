import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, SafeAreaView, Button, Alert, Platform } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress} style={{ color: "white", fontSize: 30}}>Grateful Dead Charts</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image source={{
          uri: "https://sgbonline.com/wp-content/uploads/2021/03/grateful-dead-13.jpg",
          width: 400,
          height: 300
        }} />
      </TouchableHighlight>
      <View style={{ width: 400, height: 70, backgroundColor: "blue", alignItems: "center", justifyContent: "center"}}>
        <Text style={{color: "white"}}>
          Log in
        </Text>
      </View>
      <View style={{ width: 400, height: 70, backgroundColor: "red", alignItems: "center", justifyContent: "center"}}>
        <Text style={{color: "white"}}>
          Sign up
        </Text>
      </View>
      <Button 
        title="More information"
        color="darkgreen"
        onPress={() => Alert.alert("Check it out, bro.", "This app is under development, but it's going to be hella lit.", [
          {text: "Rock n roll",}
        ])} 
      />
      

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
