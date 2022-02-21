import './css/App.css';
import React, { useEffect } from "react";
import SideNav from './sidenav';
import Pages from './Pages'

export default function App() {

  useEffect(() => {
    if (performance.navigation.type === 1) {
      document.getElementById("home").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
      console.log("This page is reloaded");
    } else {
      console.log("This page is not reloaded");
    }
  });

  return (
    <div className="App">
      <SideNav/>
      <Pages/>
    </div>
  ); 
}
