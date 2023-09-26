//import { authService } from "fBase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
// Firebase 앱 초기화
import { initializeApp } from "firebase/app";

const auth = getAuth();

// export default () => <span>Auth</span>; 자동으로 임포트 되기원하면 아래와 같이
const Auth= () => {
    
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [newAccount,setnewAccount]=useState(true);

const onChange=(event)=>{
    //타겟의 이름 가져다 씀,form 컨트롤,input 이 변경될때마다
    const {target:{name,value}}=event;
    //value 키보드를 통해 입력된 값, target 변경이 일어난 부분
    if (name==="email"){
        setEmail(value)
        //state인 email 을 변경, input 값을 변경할때마다 해당 function 호출
    }else if(name==="password"){
        setPassword(value)
    }
};
const onSubmit=async(event)=>{
    event.preventDefault();
    try{
        let data;
        if (newAccount){
            data=await createUserWithEmailAndPassword(
                auth,
                email,
                password
                );
     //create account 
        }else{
        //log in 
            data=await signInWithEmailAndPassword(
            auth,
            email,
            password
            );
    }
    
    }
   
catch(error){
console.log(error)
}
};
//html 만을 사용해서 form 을 submit 하는 모든 순간에 그 이벤트를 가져다가 preventdefault:기본행위가 실행되는 걸 원치 않음,내가 할거야
return( 
<div>
        <form onSubmit={onSubmit}>
            
        <input 
        name="email" 
        type="email" 
        placeholder="Email" 
        required 
        value={email} 
        onChange={onChange}/>

        <input 
        name="password" 
        type="password" 
        placeholder="Password" 
        required 
        value={password} 
        onChange={onChange}/>

        <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
    </form>
    <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
    </div>

</div>
);
};
export default Auth;
//route
//input 들은 onchange(키를 누르는 순간마다,값이 바뀔때마다) 이벤트를 가지고 있음
//input의 value는 state에 저장됨
//hook 기억