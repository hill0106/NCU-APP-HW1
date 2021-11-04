
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor:'#C2BDA2'
      }}>      
      <View>
      <Text style={style.title}>Hello! Welcome to my page</Text>
      <Text style={style.text}>Name: Trinity (嚕嚕)</Text> 
      <Text style={style.text}>Major: CSIE junior</Text>  
      <Text style={style.text}>Interests: Music, Netflix</Text>
      <Image
          source={require('./assets/me.png')}
          style={style.img}
        />
      </View>
      </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title:{
    marginTop: 30,
    marginLeft:30,
    marginBottom:30,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
  },
  text:{
    marginBottom: 10,
    marginLeft:30,
    fontWeight: 'normal',
    fontSize: 18,
    color: '#494545',
  },
  img:{
    marginTop: 10,
    marginLeft:30,
    height: 103,
    width: 108,
  },
});
