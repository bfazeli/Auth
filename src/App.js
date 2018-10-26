import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  // Invoke the componentWillMount LCM
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDRi08ItPSKIXA9pBy3jPfOzY_d5XXFM1Q",
      authDomain: "auth-f4b09.firebaseapp.com",
      databaseURL: "https://auth-f4b09.firebaseio.com",
      projectId: "auth-f4b09",
      storageBucket: "auth-f4b09.appspot.com",
      messagingSenderId: "209726283659"
    })
  }

  render() {
    return(
      <View>
        <Header headerText= "Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
