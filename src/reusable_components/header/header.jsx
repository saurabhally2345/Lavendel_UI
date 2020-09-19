import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from '../../assests/map-marker.png';
import LogoWhite from '../../assests/logo_white.png';

function Header() {
    return (
        <div className="overlay">
           
                <div className=" mapDesign">
                      <div className="logoHeight">
                    <img src={LogoWhite}  alt="logo"  className="logoSize" />
                    </div>
                </div>


                <div className="inputColumn">
                        <div  style={{paddingTop:"15px"}}>
                            <FontAwesomeIcon icon={faSearch} className="searchButton"/>
                        </div>
                        <input type="search" placeholder="search for products,brand and more" className="inputField" />
                    </div> 
                    <div>
                        <div >
                <i className="fa fa-map-marker"></i></div>
                <div >
                    <p className="mapText">Bangalore</p>
                    </div>
                    </div>


             

           
            <div >

                </div>

        </div>
    )
}

export default Header;