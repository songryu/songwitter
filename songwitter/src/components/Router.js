import React, { useState } from "react";
import { HashRouter as Router,Route,Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter=({isLoggedIn}) => {
    // const [isLoggedIn,setIsLoggedIn]=useState(true); //react에서 받아옴. hooks, 기본값으로 false -> router가 하나의 용도에만 쓰여야하므로
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                //fragment, 로그인이 되어 있으면 홈화면
                    <> 
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </>
            ):(
                <Route exact path="/">
                    <Auth /> 
                    
                </Route>
            )}
            </Switch>
        </Router>
        );
    };
    export default AppRouter;
    //show login page
            //사용자가 로그인되어있으면 show home 아니면 로그인 페이지
            //fragment 많은 요소들을 render하고 싶을 때 사용
            //switch한번에 하나의 route만 볼 수 있음
            //로그인안되어있으면 auth 화면