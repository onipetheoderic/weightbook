import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


// custom imports
import TextInputMaterial from '../../Components/TextInputMaterial/TextInputMaterial';
import CurvedButton from '../../Components/CurvedButton/curvedButton';


const SignUpScreen = (props) => {
    const [lineColor, setColor] = useState('#887474')
    const { width, height } = Dimensions.get('window');

    const goto = () => {
     props.navigation.navigate('CountrySelection')
    }



  return (

        <LinearGradient colors={[ '#070101', '#4a0707', '#9b0e0e']}style={{flex:1, justifyContent:'center', }} >
     <ScrollView>
          <KeyboardAvoidingView style={{flex:3, marginTop:100, }}>
        <View style={{width:'81%', alignSelf:'center'}}>
         <View style={{marginBottom:32}}>
         <TextInputMaterial 
           placeHolderText="Surname"
           onFocusedColor="white"
           iconName="user-alt"
           onBlurColor="#887474"
           withIcon={true}
           />
          </View>
          <View style={{marginBottom:32}}>
         <TextInputMaterial 
           placeHolderText="Last name"
           onFocusedColor="white"
           iconName="user-alt"
           onBlurColor="#887474"
           withIcon={true}
           />
          </View>
          <View style={{marginBottom:22}}>
         <TextInputMaterial 
           placeHolderText="Username"
           onFocusedColor="white"
           iconName="user-alt"
           onBlurColor="#887474"
           withIcon={true}
           />
          </View>
          <View style={{marginBottom:22}}>
         <TextInputMaterial 
           placeHolderText="Email"
           onFocusedColor="white"
           iconName="user-alt"
           onBlurColor="#887474"
           withIcon={false}
           />
          </View>
          <View style={{marginBottom:12}}>
         <TextInputMaterial 
           placeHolderText="Password"
           onFocusedColor="white"
           onBlurColor="#887474"
           iconName="lock"
           secureTextEntry={true}
           withIcon={false}
           />
           </View>
          </View>
          </KeyboardAvoidingView>
          <Text style={{textAlign:'center',marginTop:10, color:'white', fontSize:16, fontFamily:'Montserrat'}}>Agree to terms and condition</Text>
          <View style={{flex:2, justifyContent:'flex-start', marginTop:10, marginBottom:40}}>
          <CurvedButton 
          buttonText="Agree and Join"
          bgColor="white"
          buttonHeight={60}
          buttonWidth="80%"
          handlePress={()=>goto()}
          />
          </View>
          <View style={{flex:1}}>
         <Text onPress={()=>props.navigation.navigate('LoginScreen')} style={{textAlign:'center',marginTop:10, color:'white', fontSize:16, fontFamily:'Montserrat'}}>Already A Member? <Text style={{color:'yellow', fontWeight:'bold'}}>SIGN IN</Text></Text>

          </View>
          <View style={{flex:1}}>
        
          </View>
          </ScrollView>
        </LinearGradient>
        
    
  );
};



export default SignUpScreen;
