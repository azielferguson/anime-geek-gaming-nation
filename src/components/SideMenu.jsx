import React from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';

export const SideMenu = props => {
    return (
        <div className='SideMenu left-align'>
            This is a sidemenu
            <nav>
                <ul>
                    <li>
                        <Link to="/">Landing</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}