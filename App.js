import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './Home';
import Login from './login';
import Register from './register';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer > 
      <Stack.Navigator screenOptions={{headerShown:false}} > 
        <Stack.Screen name="Home" component = {Home} /> 
        <Stack.Screen name="Login" component = {Login} /> 
        <Stack.Screen name="Register" component = {Register} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
      <StatusBar style="auto" />
    </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
