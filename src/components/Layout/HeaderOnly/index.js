import Header from '../components/Header/header'

import React from 'react'

export default function HeaderOnly({children}) {
  return (
    <div>
        <Header />
        <div className="container">
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}
