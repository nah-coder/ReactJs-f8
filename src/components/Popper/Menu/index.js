import React, { Children, useState } from "react";
import Tippy from "@tippyjs/react/headless"; // different import path!
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./header";

const cx = classNames.bind(styles);

const defaultFN=()=>{

}

export default function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const ispParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (ispParent) {
              setHistory((prev) => [...prev, item.children]);
            }else{
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive
      // visible
      offset={[12,8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={()=>{
        setHistory(prev=>prev.slice(0,1))
      }}
    >
      {children}
    </Tippy>
  );
}
