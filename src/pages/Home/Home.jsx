import { useState } from 'react'
import plpLogo from '../../assets/images/logo.png'
import viteLogo from '/vite.svg'
import './Home.css'
import { COLORS } from '../../const/COLORS'

import CardNav from '../../components/CardNav/CardNav'


const items = [
  {
    label: "精彩内容",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "兴趣社团"},
      { label: "往年活动"},
      { label: "进行中"}
    ]
  },
  {
    label: "关于我们", 
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "加入我们"},
      { label: "了解我们的社团"}
    ]
  },
  {
    label: "更多",
    bgColor: "#271E37", 
    textColor: "#fff",
    links: [
      { label: "Youtube"},
      { label: "Instagram"},
      { label: "小红书"},
      { label: "赞助商"}
    ]
  }
];



function Home() {

  return (
    <>
      <CardNav
        logo={viteLogo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
     
    </>
  )
}

export default Home
