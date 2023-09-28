import React from "react";
import MyNav from '../components/navbar/myNav'
import MyJumbotron from '../components/jumbotron/myJumbotron'
import Main from '../components/main/Main'
import MyFooter from '../components/footer/myFooter'
import Theme from "../contexts/Theme";

export default function Home() {
  return (
    <Theme>
      <MyNav title="Epibooks" />
      <MyJumbotron />
      <Main />
      <MyFooter />
    </Theme>
  );
}
