import React, { useState } from "react";

// export default () => <span>Auth</span>; 자동으로 임포트 되기원하면 아래와 같이
const Auth= () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const onChange=(event)=>{
    //타겟의 이름 가져다 씀,form 컨트롤
    const {target:{name,value}}=event;
    if (name==="email"){
        setEmail(value)
    }else if(name==="password"){
        setPassword(value)
    }
};
const onSubmit=(event)=>{
    event.preventDefault();
};
return(
<div>
        <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
        <input type="submit" value="Log In"/>
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