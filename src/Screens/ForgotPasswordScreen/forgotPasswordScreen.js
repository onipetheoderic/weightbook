import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


// custom imports
import TextInputMaterial from '../../Components/TextInputMaterial/TextInputMaterial';
import CurvedButton from '../../Components/CurvedButton/curvedButton';


const ForgotPasswordScreen = (props) => {
    const [lineColor, setColor] = useState('#887474')
    const { width, height } = Dimensions.get('window');

    const onFocus = () => {
      setColor('white')
      console.log("focused")
    }

    const onBlur = () => {
      setColor('#887474')
    }

  return (

        <LinearGradient colors={[ '#070101', '#4a0707', '#9b0e0e']}style={{flex:1, justifyContent:'center', }} duration={3000} animation="zoomInUp">
     
          <View style={{flex:1, marginTop:90}}>
          <Text
        style={{textAlign:'center', fontSize:50, color:'white',fontFamily:'Montserrat'}}>
          Weight<Text style={{fontWeight:'bold', alignSelf:'center'}}>Book</Text>
        </Text>
        
        <View style={{flexDirection:'row', justifyContent:'center'}}>
         
         <Text 
         style={{textAlign:'center', 
         marginLeft:4,
         fontSize:16, 
         color:'white',
         fontFamily:'Montserrat', 
         fontWeight:'bold'}}>
          Your Daily Weight Planner
         </Text>



          </View>
          </View>
          <KeyboardAvoidingView style={{flex:3, marginTop:50, }}>
        <View style={{width:'81%', alignSelf:'center'}}>
         <View style={{marginBottom:45}}>
         <TextInputMaterial 
           placeHolderText="Enter Username or Email"
           onFocusedColor="white"
           iconName="user-alt"
           onBlurColor="#887474"
           withIcon={true}
           />
          </View>
         <TextInputMaterial 
           placeHolderText="Enter New Password"
           onFocusedColor="white"
           onBlurColor="#887474"
           iconName="lock"
           secureTextEntry={true}
           withIcon={true}
           />
          </View>
          </KeyboardAvoidingView>
          <View style={{flex:2, justifyContent:'flex-start', marginTop:-72}}>
          <CurvedButton 
          buttonText="Request Password"
          bgColor="white"
          buttonHeight={60}
          buttonWidth="80%"
          />
          </View>
          <View style={{flex:1}}>
         <Text style={{textAlign:'center',marginTop:-10, color:'white', fontSize:16, }}>New Member? <Text onPress={()=>props.navigation.navigate('LoginScreen')} style={{color:'yellow', fontWeight:'bold'}}>SIGN UP</Text></Text>

          </View>
          <View style={{flex:1}}>
        
          </View>
          
        </LinearGradient>
        
    
  );
};



export default ForgotPasswordScreen;
