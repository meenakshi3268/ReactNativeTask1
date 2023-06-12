import React from 'react'
import { ImageBackground, Text ,View,StyleSheet,Button,TextInput,} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
const Login = (props) => {
   return (
      <ImageBackground source={require('./assets/login.png')}style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.text1}>Welcome</Text>
            <Text style={styles.text}>Back</Text>
            <View style={styles.containers}>
            <Formik
                initialValues={{ 
               
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
                    <Icons style={styles.searchIcon} name="mail" size={19} />
                    <TextInput
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        placeholder="water@gmail.com" />
                        {touched.email && errors.email &&
                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
                        }
                        <Icons style={styles.searchIcon2} name="check" size={20} />
                  </View>

                  <View style ={{flexDirection:'row', borderWidth:2, borderColor:'white',margin:10}}>
                    <Icons style={styles.searchIcon} name="lock" size={20} />
                    <TextInput 
                       value={values.password}
                       onChangeText={handleChange('password')}
                       placeholder="Password"
                       onBlur={() => setFieldTouched('password')}
                       secureTextEntry={true} />
                      {touched.password && errors.password &&
                      <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
                      }
                      <Icon style={styles.searchIcon1} name="eye-off" size={15}/>
                  </View>

                  <View>
                    <Text style={styles.forgot} >Forgot password?</Text>
                  </View>

                  <View style={styles.btn}>     
                    <Button 
                    title="Log in" 
      
                    onPress={handleSubmit}
                    /> 
                    <Text style={{color:'gray',textAlign:'center'}}>or</Text>
                    <Button 
                      title="Sign up"
                      disabled={!isValid} 
                      onPress={() => props.navigation.navigate('Register')} 
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
export default Login
const styles = StyleSheet.create({
   container: {
      flex: 1,
    },
    containers:{
      paddingTop:300,
     },
    image: {
      flex: 1,
      justifyContent: 'center',
   },
   formContainer: {
    padding:20,
    },
   text:{ 
    paddingLeft:20,
    fontSize: 40,
    color:'white',
    fontWeight: 'bold',
   },
   text1: {
    paddingLeft:20,
    paddingTop:250,
    flexDirection:'column',
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
   searchIcon:{
     margin:5,
     
   },
   searchIcon1:{
    margin:5,
    paddingLeft:250,
  },
  searchIcon2:{
    color:"blue",
    margin:5,
    paddingLeft:200,
  },
   forgot:{
   paddingLeft:270,
   color:"blue",  
   },
   button:{
    color:"red",
   },
});