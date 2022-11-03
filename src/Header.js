import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
    const [underLInePosition, setUnderLInePosition] = useState({
        width: '32px',
        left: '0'
    });
   

    const dispatch = useDispatch();

    const logoutOfApp = ()=>{
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>

            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinedIn" />

                <div className="header_search">
                    < SearchIcon />

                    <input type="text" placeholder='Search' />
                </div>

            </div>

            <div className="header_right" >
                <HeaderOption setUnderLInePosition={setUnderLInePosition} Icon={HomeIcon} title='Home' />
                <HeaderOption setUnderLInePosition={setUnderLInePosition} Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption setUnderLInePosition={setUnderLInePosition} Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption setUnderLInePosition={setUnderLInePosition} Icon={ChatIcon} title='Messaging' />
                <HeaderOption setUnderLInePosition={setUnderLInePosition} Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption setUnderLInePosition={setUnderLInePosition} onClick={logoutOfApp}  title="Me"/>
                <div style={underLInePosition && underLInePosition} className="header_rignt_underLine"></div>
            </div>

        </div>
    )
}

export default Header
