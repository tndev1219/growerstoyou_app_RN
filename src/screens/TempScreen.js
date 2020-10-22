import React from 'react'
import {SafeAreaView, Image} from 'react-native'
import {Images, Colors} from '../theme'


export default class TempScreen extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Images.logo} style={{
          width: 200,
          height: 150,
          resizeMode: 'contain'
        }}/>

      </SafeAreaView>
    )
  }  
}