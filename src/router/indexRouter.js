import React from 'react'
import { Route } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Login from '../views/Login/Login'
import NewSandBox from '../views/NewSandBox/NewSandBox'
export default function indexRouter() {
  return (
    <HashRouter>
        {/* <Switch>匹配到了就不继续匹配 */}
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={NewSandBox}/>
            {/* <Route path="/" render={()=>
            localStorage.getItem("token")?
            <NewSandBox></NewSandBox>:
            <Redirect to="/login"></Redirect>
            } /> */}
        </Switch>
    </HashRouter>
  )
}
