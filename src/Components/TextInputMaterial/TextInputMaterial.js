import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  
} from 'react-native';

import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const TextInputMaterial = (props) => {
    const onFocusedColor = props.onFocusedColor
    const onBlurColor = props.onBlurColor
    const [lineColor, setColor] = useState(onBlurColor)
    const { width, height } = Dimensions.get('window');

    const onFocus = () => {
      setColor(onFocusedColor)
      console.log("focused")
    }

    const onBlur = () => {
      setColor(onBlurColor)
    }

  return (

     <View style={{ borderBottomColor: lineColor, borderBottomWidth: 2, }}>
       {props.withIcon &&
          <FontAwesome5 name={props.iconName} style={{color:lineColor, marginBottom:-23}} size={13} />
        }
          <TextInput
              placeholder={props.placeHolderText}
              secureTextEntry={props.secureTextEntry}
              placeholderTextColor={lineColor}
              onFocus = {()=>onFocus()} 
              onBlur = {()=>onBlur()}
    style={{height: 40, paddingLeft:30,color:'white', borderColor: 'transparent', borderWidth: 1}}
    
  />
          </View>
         
        
    
  );
};


TextInputMaterial.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  onFocusedColor: PropTypes.string.isRequired,
  onBlurColor: PropTypes.string.isRequired,
  withIcon: PropTypes.bool.isRequired,
  secureTextEntry: PropTypes.bool,
  iconName: PropTypes.string

};
export default TextInputMaterial;
