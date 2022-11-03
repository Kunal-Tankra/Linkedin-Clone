import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./HeaderOption.css"

function HeaderOption({ setUnderLInePosition, Icon, title, onClick }) {
  const user = useSelector(selectUser)

  const handleUnderline = (e) => {
    const width = e.target.offsetWidth
    const left = e.target.offsetLeft

    setUnderLInePosition({
      width: width,
      left: left 
    })

  }



  return (
    <div onClick={onClick} onMouseOver={(e) => handleUnderline(e)} className='headerOption'>
      {Icon &&  <Icon className="headerOption_icon" />}
      {onClick && <Avatar src={user.photoUrl&& user.photoUrl} className="headerOption_icon" >{user.displayName && user.displayName[0]}</Avatar>}
      <h3  className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
