import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button } from 'react-native';
const Home = (props) => {
  return (
 
    <ImageBackground source={require('./assets/register.png')} style={styles.image}>
      <View style={styles.container}>
          <Text style={styles.text}>wwater</Text>
          <Text style={styles.text1}>Water delivery</Text>
          <Text style={styles.text2}>We deliver water at any point of the Earth in 30 Minutes</Text>
          
        <View style={styles.btn} >
          <Button 
            title="Log in"
            onPress={() => props.navigation.navigate('Login')}
          />
          </View>
          <View style={styles.btn1}>
          <Button
            title="Sign up"
            onPress={() => props.navigation.navigate('Register')}
          />
        </View>
       
      </View>
    </ImageBackground>
    
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingTop:40,
    margin:20,
    
  },
  text1: {
   paddingTop:350,
   fontSize: 50,
   paddingLeft:20,
   color: 'white',
   fontWeight: 'bold',
    
  },
  text2: {
    fontSize: 20,
    marginLeft:20,
    color: 'white',
    fontWeight: 'bold',
     
   },
  btn:{
     paddingTop:250,
     width:400,
     paddingLeft:30,
  },
  btn1:{
   paddingTop:10,
   width:400,
   paddingLeft:30,
},
});
