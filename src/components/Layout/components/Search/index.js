import React, { useEffect, useState, useRef } from "react";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless"; // different import path!
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
// import { type } from "@testing-library/user-event/dist/type";
// import { SearchIcon } from "~/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSeachResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSeachResult([1]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchValue('');
    setSeachResult([]);
    inputRef.current.focus();
  }

  const handleHideResult=()=>{
    setShowResult(false);
  };
  return (
    <HeadlessTippy
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
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={()=>setShowResult(true)}
        />
        {!!searchValue && (
          <button
            className={cx("clear")}
            onClick={handleClear}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}
