import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import SideMenu from '../../components/NewSandBox/SideMenu'
import TopHeader from '../../components/NewSandBox/TopHeader'
import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'
import './NewSandBox.css'

import {Layout} from 'antd'
const {Content} =Layout
export default function NewSandBox() {
  return (
    <Layout style={{Height:'100vh'}}>
      <SideMenu></SideMenu>
      <Layout  style={{minHeight:'100vh'}} className="site-layout" >
        <TopHeader></TopHeader>
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/user-manage/list" component={UserList}/>
        <Route path="/right-manage/role/list" component={RoleList}/>
        <Route path="/right-manage/right/list" component={RightList}/>
        {/* 重定向Redirect 5版本 6x改为Navigate */}
        <Redirect from='/' to="/home" exact/>
        <Route path="*" component={NoPermission}/>
      </Switch>
            </Content>
      </Layout>
    </Layout>
  )
}
