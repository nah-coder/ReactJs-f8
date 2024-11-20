import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assert/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAfrica,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { type } from "@testing-library/user-event/dist/type";


const cx = classNames.bind(styles);

const MENU_ITEMS=[
  {
    icon:<FontAwesomeIcon icon={faEarthAsia} />,
    title:'English',
    children:{
      title:'Language',
      data:[
        {
          type:'language',
          code:'en',
          title:'English',
        },
        {
          type:'language',
          code:'vi',
          title:'Tiếng Việt',
        },
      ]
    }
  },
  {
    icon:<FontAwesomeIcon icon={faCircleQuestion} />,
    title:'Feedback and help',
    to: '/feedback'
  },
  {
    icon:<FontAwesomeIcon icon={faKeyboard} />,
    title:'Keyboard and Shortcuts',
  }
]

export default function Header() {
  const [searchResult, setSeachResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSeachResult([]);
    }, 0);
  }, []);

  const handleMenuChange=(menuItem)=>{
      console.log(menuItem)
  }
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok"></img>
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and video" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>
          <Menu 
            items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('more-button')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}
