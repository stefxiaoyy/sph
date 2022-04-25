import React, { useState } from 'react'
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
const { Header } = Layout;

export default function TopHeader() {
  const [collapsd, setCollapsed] = useState(false)
  //一点取反
  const changeCollapsed = () => {
    setCollapsed(!collapsd)
  }
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              超级管理员
            </a>
          ),
        },
        {
          danger: true,
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              退出
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <Header className="site-layout-background" style={{ padding: ' 0 16px' }}>
      {
        collapsd ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : <MenuFoldOutlined onClick={changeCollapsed} />
      }
      <div style={{ float: "right" }}>
        <span style={{ marginRight: "10px" }}>欢迎你回来</span>
        <Dropdown overlay={menu}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}
