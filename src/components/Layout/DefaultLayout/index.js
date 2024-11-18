import Header from "../components/Header/header";
import classNames from "classnames/bind";
import styles from './Default.module.scss'
import SideBar from "./Sidebar/sidebar";
import React from 'react'

const cx = classNames.bind(styles)

export default function DefaultLayout({children}) {
  return (
    <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')} >
            <SideBar />
            <div  className={cx('content')}>
                {children}
            </div>
        </div>
    </div>
  )
}
