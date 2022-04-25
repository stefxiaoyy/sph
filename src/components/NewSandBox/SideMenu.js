import { Layout, Menu } from 'antd';
import "./index.css"

import {  ContactsOutlined, UserSwitchOutlined,  UserOutlined, BankOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const nMenu = [
  {
    key: "/home",
    title: "首页",
    icon: <BankOutlined />
  },
  {
    key: "/user-manage",
    title: "用户管理",
    icon: <UserSwitchOutlined />,
    childrenMenu: [
      {
        key: "/user-manage/list",
        title: "用户列表",
        icon: <UserOutlined />,

      },
    ]
  },
  {
    key: "/right-manage",
    title: "权限管理",
    icon: <ContactsOutlined />,
    childrenMenu: [
      {
        key: "/right-manage/role/list",
        title: "角色列表",
        icon: <UserOutlined />,
      },
      {
        key: "/right-manage/right/list",
        title: "权限列表",
        icon: <UserOutlined />,
      }
    ]
  },
]

// 判断是否有childrenMenu属性 三目运算符
const ass = (nMenu) => nMenu.map(list => {
  let newData = {};
  newData.key = list.key;
  newData.icon = list.icon;
  newData.label = list.title;
  newData.children = list.childrenMenu ? ass(list.childrenMenu) : []
  return newData;
});
console.log('sss', ass(nMenu));
const menuList2 = ass(nMenu);



// 判断是否有childrenMenu属性
// const menuList = [...nMenu].map(rep);
// function rep(obj) {
//   if (obj.hasOwnProperty('title')) {
//     obj.label = obj.title;
//     delete obj.title;
//   }
//   if (obj.hasOwnProperty('childrenMenu')) {
//     obj.children = obj.childrenMenu.map(rep)
//     delete obj.childrenMenu
//     return obj
//   } else {
//     return obj
//   }
// }


export default function SideMenu() {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className='logo'>全球新闻发布系统</div>
      <Menu
        onClick={onClick}
        mode="inline"
        items={menuList2}
      />
    </Sider>
  );
};

