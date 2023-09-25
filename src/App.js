import MyNav from './components/navbar/myNav'
import MyFooter from './components/footer/myFooter'
import MyJumbotron from './components/jumbotron/myJumbotron'
import Main from './components/main/Main'

const App = () => {

  return (
    <>
      <MyNav title='MyNav' />
      <MyJumbotron />
      <Main/>


      <MyFooter />
    </>
  )
}

export default App;


