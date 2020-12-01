import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Picker,
  Dimensions,
  
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


// custom imports
import TextInputMaterial from '../../Components/TextInputMaterial/TextInputMaterial';
import CurvedButton from '../../Components/CurvedButton/curvedButton';


const SignUpScreen = (props) => {
    const [lineColor, setColor] = useState('#887474')
    const { width, height } = Dimensions.get('window');
    const [subject, setSubject] = useState('Nigeria')
    const onFocus = () => {
      setColor('white')
      console.log("focused")
    }

    const onBlur = () => {
      setColor('#887474')
    }

  return (

        <LinearGradient colors={[ '#9b0e0e','#4a0707', '#070101']}
        style={{flex:1, justifyContent:'center', }} >
           
           
           <View>
           <Text 
         style={{textAlign:'center', 
         marginLeft:4,
         fontSize:19, 
         color:'white',
         fontFamily:'Montserrat', 
         fontWeight:'bold'}}>
          Lets make your recorgnizable
         </Text>
<Text style={{textAlign:'center', 
         marginLeft:4,
         fontSize:10, 
         color:'white',
         fontFamily:'Montserrat'}}>Personal Verification</Text>

         <View style={{marginVertical:10, borderRadius:60, justifyContent:'center',  alignSelf:'center',height:120, width:120, backgroundColor:'#bdbdbd'}}>
         <FontAwesome5 name='camera' style={{alignSelf:'center', color:'white'}} size={60} />
         </View>
           </View>
                  

           
            <View style={{borderRadius:20, 
            alignSelf:'center',width:'90%',
             backgroundColor:'white', 
             height:'58%'}}>
<View style={{marginVertical:5}}/>



              <View style={{marginVertical:2}}/>
           
          <View style={{borderRadius:15,height:40, 
          marginTop:5,flexDirection:'row', width:'90%', alignSelf:'center', shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,}}>


                        <TextInput
              placeholder='Enter Date of Birth'             
              placeholderTextColor='#c2b9b9'

             
    style={{color:'#c2b9b9',paddingLeft:15, fontStyle:'italic', height:40,paddingVertical:-30,
     borderColor: 'transparent',}}
    
  />

  </View>
            <View style={{ width: '90%', alignSelf:'center', 
            flexDirection:'row', marginTop:10, justifyContent:'center'}}>
             <View style={{marginRight:-5,  flex:1, width:'50%', marginTop:13, height:100,borderWidth:1,borderColor:'transparent',  shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 1,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5,}}>
<Foundation name='male' style={{alignSelf:'center', marginTop:6, color:'#808080'}} size={70} />
<Text style={{alignSelf:'center', fontSize:8}}>Male</Text>
            </View>


            <View style={{ marginLeft:-5, flex:1, width:'50%', marginTop:13, height:100,borderWidth:1,borderColor:'transparent',  shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 1,
             },
             shadowOpacity: 0.25,
             shadowRadius: 3.84,
             
             elevation: 5,}}>
<Foundation name='female' style={{alignSelf:'center', marginTop:6, color:'#808080'}} size={70} />
<Text style={{alignSelf:'center', fontSize:8}}>Female</Text>
            </View>

            </View>
            <View style={{marginVertical:10}}/>
           
          
          
           <View style={{flexDirection:'row', justifyContent:'center', marginLeft:'auto', marginRight:'auto', width:'85%'}}>
                <View style={{flex:2, alignSelf:'center'}}>
                    <Text style={{ color:'#808080', fontWeight:'bold'}}>
                        Height
                    </Text>
                    <View style={{marginVertical:2, borderColor:'#808080', borderWidth:1}}/>
                    <Text style={{ color:'#808080', fontWeight:'bold'}}>
                        Weight
                    </Text>
                </View>
                <View style={{flex:1}}>
                <Picker
                mode='dropdown'
                
              style={{
                color:'#4d4d4f',
           
                width:'100%',
                height:30,
                fontFamily:'Montserrat',
                
              }} 
                selectedValue={subject}
                supportedOrientations={['portrait', 'landscape']}
               
                itemStyle={{backgroundColor:'#fff'}}
                onValueChange={(subject)=>{setSubject(subject)}}>
                <Picker.Item label="cm" value="cm" />
                <Picker.Item label="m" value="m" /> 
             
              </Picker>
              <Picker
                mode='dropdown'
                
              style={{
                color:'#4d4d4f',
           
                width:'100%',
                height:20,
                marginRight:-10,
                fontFamily:'Montserrat',
                
              }} 
                selectedValue={subject}
                supportedOrientations={['portrait', 'landscape']}
               
                itemStyle={{backgroundColor:'#fff'}}
                onValueChange={(subject)=>{setSubject(subject)}}>
                <Picker.Item label="kg" value="kg" />
                <Picker.Item label="lb" value="lb" /> 
             
              </Picker>
                </View>
           </View>
         
           
<View style={{marginVertical:20}}/>
            <CurvedButton 
          buttonText="Start"
          bgColor="#750909"
          btColor="white"
          buttonHeight={55}
          buttonWidth="80%"
          />
            
            </View>
   

         

            
        </LinearGradient>
        
    
  );
};



export default SignUpScreen;
