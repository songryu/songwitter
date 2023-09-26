
import React, { useState } from "react";
import AppRouter from './Router';
import fBase from "../fBase";
import { authService } from "../fBase"; 


function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(authService.currentUser);
  //유저의 로그인 여부 판단가능
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy;songwitter{new Date().getFullYear()}</footer>
    </>
  //router에게 prop전달,
  );
}
//app이 모든 로직들을 다루고 있음 <footer>을 사용하고 싶을 수도 있어서 app 안에 isLoggedIn함
//approuter 쓰고 다른 것 쓸 수도 있음 . 분리시켜서 
export default App;
