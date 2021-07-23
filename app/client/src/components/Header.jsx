import React, { useState } from 'react';
import Navigation from './Navigation';
import s from '../styles/Header.module.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <header className={'pt-2 mb-5 border-none border-bottom px-lg-5 pb-3 sticky-top bg-white'}>
            <div className="row">
                <div className="col-2 d-flex align-items-center">
                    <h3>Shortnr</h3>
                </div>

                <div className="col-10 d-flex align-items-center justify-content-end">
                    <Icon icon={faSun} mask={['far', 'circle']} className="fs-3 d-inline me-3"/>
                    <div className="d-inline d-sm-none p-2 border pb-1">
                        <Icon icon={menuVisible ? faTimes : faBars} mask={['far', 'circle']} className="text-primary fs-2" onClick={(evt) => {setMenuVisible(!menuVisible)}}/>
                    </div>
                    <div className="text-center d-none d-sm-inline">
                        <Navigation mobileView={false}/>
                    </div>
                    
                </div>
            </div>
            {
                menuVisible &&
                <div className="pt-2 menu-wrapper d-block d-sm-none">
                    <Navigation mobileView={true}/>
                </div>
            }
            
        </header>
    )
}

export default Header