import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assert/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'; // optional
import Tippy from "@tippyjs/react/headless"; // different import path!
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
const cx = classNames.bind(styles);

export default function Header() {
  const [searchResult, setSeachResult] = useState([])
  useEffect(()=>{
    setTimeout(()=>{
      setSeachResult([1])
    },0)
  },[])
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok"></img>
        </div>
        <Tippy
        interactive 
        // visible={searchResult.length>0}
          render={(attrs) => (
            
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                 <h4 className={cx('search-title')}>
                    Account
                 </h4>
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
        </div>
      </div>
    </header>
  );
}
