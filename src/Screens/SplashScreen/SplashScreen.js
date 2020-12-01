import React, {useContext} from 'react';
import {

  View,
  Text,
  Dimensions,
  
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
 
// Within your render function


const SplashScreen = (props) => {
    
    const { width, height } = Dimensions.get('window');
    setTimeout(() => {
        props.navigation.navigate('LoginScreen'); //this.props.navigation.navigate('Login')
    }, 4300); 
  return (
    <>
    <LinearGradient colors={['#9b0e0e', '#4a0707', '#070101']}style={{flex:1, justifyContent:'center', backgroundColor:'#01a54f'}} duration={3000} animation="zoomInUp">
         
        <Animatable.Text duration={2500} animation="zoomInUp" 
        style={{textAlign:'center', fontSize:50, color:'white',fontFamily:'Montserrat'}}>
          Weight<Text style={{fontWeight:'bold'}}>Book</Text>
        </Animatable.Text>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
         
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" 
          style={{textAlign:'center', 
          marginLeft:4,
          fontSize:16, 
          color:'white',
          fontFamily:'Montserrat', 
          fontWeight:'bold'}}>
           Your Daily Weight Planner
          </Animatable.Text>
        
          </View>
          <View style={{
    position: 'absolute',
    height: 40,
   alignSelf:'center',
    bottom:20, 
   
 }}>
          <Text style={{fontSize:16,fontFamily:'Montserrat', color:'white',fontStyle: 'italic'}}>Weight Loss- Exercise Meal- Plan </Text>     
          </View>
              
      
</LinearGradient>
  
    </>
  );
};



export default SplashScreen;
