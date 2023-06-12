import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import {ImageBackground, Text ,View,StyleSheet, TextInput,Button,Alert} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
const Register = (props) => {
   return (
      <ImageBackground source={require('./assets/register.png')}style={styles.image}>
        <View style={styles.container}>
               <Text style={styles.text1}>Create</Text>
               <Text style={styles.text}>Account</Text>
           <View style={styles.containers}> 
              <Formik
                  initialValues={{ 
                    name: '',
                    email: '', 
                    password: '' 
                  }}
                  onSubmit={values => Alert.alert(JSON.stringify(values))}
                  validationSchema={yup.object().shape({
                    name: yup
                      .string()
                      .required('Please, provide your name!'),
                    email: yup
                      .string()
                      .email()
                      .required(),
                    password: yup
                      .string()
                      .min(4)
                      .max(10, 'Password should not excced 10 chars.')
                      .required(),
                  })}>
                  {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                  <View style={styles.formContainer}>
                  <View style ={{flexDirection:'row', borderWidth:2, borderColor:'white',margin:10}}>
                    <Icons style={styles.searchIcon} name="user" size={15} />
                    <TextInput 
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={() => setFieldTouched('name')}
                        placeholder="Name" /> 
                          {touched.name && errors.name &&
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
                  }            
              </View>
              <View style ={{flexDirection:'row', borderWidth:2, borderColor:'white' ,margin:10}}>
                    <Icons style={styles.searchIcon} name="mail" size={15} />
                    <TextInput
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="E-mail"/>
                            {touched.email && errors.email &&
                           <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                           }
                  </View>
                  <View style ={{flexDirection:'row', borderWidth:2, borderColor:'white',margin:10}}>
                    <Icons style={styles.searchIcon} name="lock" size={20} />
                    <TextInput 
                        value={values.password}
                        onChangeText={handleChange('password')}
                        placeholder="Password"
                        onBlur={() => setFieldTouched('password')}
                        secureTextEntry={true}/>
                      {touched.password && errors.password &&
                      <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
                      }
                      <Icon style={styles.searchIcon1} name="eye-off" size={15}/>
                </View>

                  <View style={styles.btn}>
                    <Button 
                    title="Sign up" 
                        onPress={handleSubmit}
                    /> 
                    <Text style={{color:'gray',textAlign:'center'}}>or</Text>
                    <Button 
                    title="Log in"
                    disabled={!isValid}
                    onPress={() => props.navigation.navigate('Login')}
                    />
                  </View>
                  </View>
                    )}
             </Formik>
          </View>
        </View>
      </ImageBackground>

      )
}
export default Register
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
    },
    containers:{
     paddingTop:400,
    },
    formContainer: {
    padding:10,
    },
   image: {
     flex: 1,
     justifyContent: 'center',
   },
   text:{
    paddingLeft:20,
    fontSize: 40,
    color:'white',
    fontWeight: 'bold',
   },
   text1: {
    paddingLeft:20,
    paddingTop:80,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
   },
   input: {
      margin: 10,
      height: 40,
      borderColor: 'white',
   },
   btn:{
    paddingTop:10,
    padding:10,
    alignContent:'space-between',
 },
 textinput:{
  flexDirection:'row',
  },
  textinput1:{
   flex:1,
   flexDirection:'row',
   },
   textinput2:{
      paddingLeft:20,
      paddingTop:2,
      flexDirection:'row',
      },
  searchIcon:{
   margin:5,
  
  },
  searchIcon1:{
    margin:5,
    paddingLeft:250,
  },
})