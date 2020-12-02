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

    const goto = () => {
      props.navigation.navigate('PhotoUploadScreen')
    }

  return (

        <LinearGradient colors={[ '#9b0e0e','#4a0707', '#070101']}style={{flex:1, justifyContent:'center', }} >
            <View style={{borderRadius:20, 
            alignSelf:'center',width:'90%',
             backgroundColor:'white', 
             height:'58%'}}>
<View style={{marginVertical:10 }}/>
            
            <Text style={{fontSize:16, color:'#4d4d4f', 
            fontFamily:'Montserrat', marginLeft:20}}>Select Country of Residence</Text>
            <View style={{marginVertical:5}}/>
            <View style={{alignSelf:'center', borderWidth:1,
            borderColor:'#4d4d4f',borderRadius:10, width:'90%'}}>
              <Picker
              style={{
                color:'#4d4d4f',
                backgroundColor: 'transparent',
                width:'100%',
                height:30,
                fontFamily:'Montserrat',
                
              }} 
                selectedValue={subject}
                supportedOrientations={['portrait', 'landscape']}
               
                itemStyle={{backgroundColor:'#fff'}}
                onValueChange={(subject)=>{setSubject(subject)}}>
                <Picker.Item label="Nigeria" value="Nigeria" />
                <Picker.Item label="English" value="English" /> 
                <Picker.Item label="Maths" value="Maths" />
                <Picker.Item label="Science" value="Science" /> 
                <Picker.Item label="Social Science" value="Social Science" />
              </Picker>
              </View>


              <View style={{marginVertical:10}}/>
              <Text style={{fontSize:16, color:'#4d4d4f',
               fontFamily:'Montserrat', marginLeft:20}}>Enter Your Phone Number below</Text>
          <View style={{borderRadius:10,height:30, justifyContent:'center', 
          marginTop:10,flexDirection:'row', borderWidth:1, width:'90%',borderColor:'#4d4d4f', alignSelf:'center', }}>
<View style={{justifyContent:'center', alignItems:'center'}}>
    <Text style={{marginLeft:10, color:'#4d4d4f'}}>+234</Text></View>
<View style={{borderLeftWidth:1,
     marginLeft:'auto',borderColor:'#4d4d4f', width:'75%'}}>
                        <TextInput
              placeholder='Phone number'             
              placeholderTextColor='#4d4d4f'

             
    style={{color:'#4d4d4f',paddingLeft:5,height:30,paddingVertical:-30,
     borderColor: 'transparent',}}
    
  />
  </View>
  </View>
            <View style={{ width: '90%', alignSelf:'center', 
            flexDirection:'row', marginTop:40, justifyContent:'center'}}>
            <View style={{flex:1,marginTop:13, borderTopColor:'#c2b9b9', borderTopWidth:1}}>
                
            </View>

            <View style={{flex:3, borderColor:'#c2b9b9', justifyContent:'center', height:30,
            borderRadius:20, borderWidth:1}}>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:16, color:'#c2b9b9'}}>Tap For More</Text>
            </View>


            <View style={{flex:1, marginTop:13, borderTopColor:'#c2b9b9', borderTopWidth:1, justifyContent:'center'}}>
                
            </View>

            </View>
            <View style={{marginVertical:20}}/>
            <CurvedButton 
          buttonText="Next"
          handlePress={()=>goto()}
          bgColor="#750909"
          btColor="white"
          buttonHeight={60}
          buttonWidth="80%"
          />
            
            </View>
            
        </LinearGradient>
        
    
  );
};



export default SignUpScreen;
