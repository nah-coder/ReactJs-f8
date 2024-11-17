import Header from "../components/Header/header";
import SideBar from "./Sidebar/sidebar";
import React from 'react'

export default function DefaultLayout({children}) {
  return (
    <div>
        <Header />
        <div className="container">
            <SideBar />
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}
