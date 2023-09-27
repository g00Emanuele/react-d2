import MyNav from "./components/navbar/myNav";
import MyFooter from "./components/footer/myFooter";
import MyJumbotron from "./components/jumbotron/myJumbotron";
import Main from "./components/main/Main";
import Theme from "./contexts/Theme";

const App = () => {
  return (
    <Theme>
      <MyNav title="Epibooks" />
      <MyJumbotron />
      <Main />
      <MyFooter />
    </Theme>
  );
};

export default App;
