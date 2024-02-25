import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Name from "./ref/Name";
// import Jsx01 from "./Components/Jsx01";
// import Jsx02 from "./Components/Jsx02";
// import Jsx03 from "./Components/Jsx03";
// import Jsx04 from "./Components/Jsx04";
// import Jsx05 from "./Components/Jsx05";
// import Component01 from "./Props/Component01";
// import Component02 from "./Props/Component02";
// import Component03 from "./Props/Component03";
// import FoodContainer from "./map/FoodContainer";
// import UserContainer from "./map/UserContainer";
// import Count from "./state/basic/Count";
// import Sound from "./state/basic/Sound";
// import Name from "./state/basic/Name";
// import Color from "./state/basic/Color";
// import Name from "./ref/Name";
// import Check from "./ref/Check";
// import Checkbox from "./ref/Checkbox";
// import Component02 from "./test/Component02";
// import Container from "./test/Container";
// import FoodContainer from "./ref/export/FoodContainer";
// import LifeCycleComponent from "./LifeCycle/class/LifeCycleComponent";
import LifeCycleContainer from "./LifeCycle/class/LifeCycleContainer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<></> key 값을 사용할 때는 Fragment 를 써줘야 한다.
  <React.Fragment>
    {/* <App /> */}
    {/* <Jsx01 /> */}
    {/* <Jsx02 /> */}
    {/* <Jsx03 /> */}
    {/* <Jsx04 /> */}
    {/* <Jsx05 /> */}
    {/* <Component01 />
    <Component02 />
    <Component03 /> */}
    {/* <FoodContainer /> */}
    {/* <UserContainer /> */}
    {/* <Count /> */}
    {/* <Sound /> */}
    {/* <Name/> */}
    {/* <Color /> */}
    {/* <Name /> */}
    {/* <Check /> */}
    {/* <Checkbox /> */}
    {/* <Component02 /> */}
    {/* <Container /> */}
    {/* <FoodContainer /> */}
    <LifeCycleContainer />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
