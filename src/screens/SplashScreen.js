import React from 'react'
import {SafeAreaView, Image} from 'react-native'
import Splash from 'react-native-splash-screen'
import {Images} from '../theme'

export default class SplashScreen extends React.Component {
  constructor (props) {
    super(props)
    setTimeout(() => {
      this.gotoNextScreen()
    }, 10)
  }

  gotoNextScreen() {
    Splash.hide()
    this.props.navigation.navigate('Auth')
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      </SafeAreaView>
    )
  }
}