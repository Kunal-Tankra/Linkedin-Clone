import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

const Sidebar = () => {

    const user = useSelector(selectUser)
    const { displayName, email, photoUrl} = user

    const recentItem = (topic) => {
        return (
            <div className='sidebar_recentItem'>
                <span className='slidebar_hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31-800x450.jpg" alt="" />
                <Avatar src={photoUrl} className='sidebar_avatar' > {displayName && displayName[0]}</Avatar>
                <h2>{displayName}</h2>
                <h4>{email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2,456</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>2,983</p>

                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('Coding')}
                {recentItem('Design')}
                {recentItem('Programming')}
                {recentItem('Reactjs')}
                {recentItem('softwareengineering')}
            </div>

        </div>
    )
}

export default Sidebar
