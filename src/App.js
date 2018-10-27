import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null}

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

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({loggedIn:true}) : this.setState({loggedIn:false})
    }) 
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
             Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm/>
      default:
        return (
          <CardSection>
            <Spinner/>
          </CardSection>
        )
    }
  }
  render() {
    return(
      <View>
        <Header headerText= "Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
