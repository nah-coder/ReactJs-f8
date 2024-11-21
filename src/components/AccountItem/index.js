import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Images from '../Images'
const cx = classNames.bind(styles)
export default function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <Images className={cx('avatar')} src='https://th.bing.com/th/id/OIP.U0D5JdoPkQMi4jhiriSVsgHaHa?w=181&h=180&c=7&r=0&o=5&pid=1.7' alt='Hoaa'/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyễn Anh Huy</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>nguyenanhhuy</span>
        </div>
    </div>
  )
}
