import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  
} from 'react-native';

import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const CurvedButton = (props) => {
    
let btHeight = props.buttonHeight===undefined?50:props.buttonHeight;
let btWidth = props.buttonWidth === undefined?'90%':props.buttonWidth;

let btColor = props.btColor === undefined?'black':props.btColor

  return (
      <TouchableOpacity onPress={props.handlePress} 
      style={{justifyContent:'center', borderRadius:30, alignSelf:'center', backgroundColor:props.bgColor, height:btHeight, width:btWidth}}>
       
            <Text style={{fontSize:17, fontWeight:'bold', 
            fontFamily:'Montserrat', color:btColor, 
            alignSelf:'center', textAlign:'center'}}>
                {props.buttonText.toUpperCase()}
                </Text>
    
    </TouchableOpacity>
  );
};


CurvedButton.propTypes = {
    bgColor: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonHeight: PropTypes.number,
    buttonWidth: PropTypes.string, //it will be in percentage
    handlePress: PropTypes.func,
    btColor: PropTypes.string
};
export default CurvedButton;
