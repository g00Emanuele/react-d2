import React, { Component } from 'react'
import MyNav from './components/navbar/myNav'
import MyFooter from './components/footer/myFooter'
import MyJumbotron from './components/jumbotron/myJumbotron'
import MyLatestRelease from './components/latestRelease/myLatestRelease'



export default class App extends Component {
  render() {
    return (
      <>
      <MyNav title='MyNav'/>
      <MyJumbotron/>
      <MyLatestRelease/>




      <MyFooter/>
      </>
    )
  }
}

