import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Navbar() {
    const [menu, setMenu] = useState(false)
  return (
    <div>
        <Header menu={menu} setMenu={setMenu}/>
        <Sidebar menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default Navbar