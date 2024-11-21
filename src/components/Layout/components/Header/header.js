
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assert/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import HeadlessTippy from '@tippyjs/react';
// import 'Headlesstippy.js/dist/Headlesstippy.css'; // optional
import Tippy from "@tippyjs/react"; // different import path!


import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { type } from "@testing-library/user-event/dist/type";
import "tippy.js/dist/tippy.css"; // optional
import { UploadIcon } from "~/components/Icons";
import Images from "~/components/Images";
import Search from "../Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard and Shortcuts",
  },
];

export default function Header() {
  

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@Huyy",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log Out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok"></img>
        </div>
        <Search />
        
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="upload-video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Images
                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/439342748_350074124732207_7204710479189898363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=gP8JL9kHne4Q7kNvgHErI8y&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=ATkqSZFPXp8JDW3FlryM_qr&oh=00_AYBxSpeSLJ_kx7v1ty16XKG-kMBQMw3PVuNHJ9APXaNmsw&oe=6743D594"
                className={cx("user-avatar")}
                alt="nguyễn anh huy"
              />
            ) : (
              <button className={cx("more-button")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
