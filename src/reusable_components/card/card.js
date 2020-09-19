import React from 'react';
import './card.scss';
import Logo from '../../assests/icon_1.svg';
import Painting from '../../assests/icon_2.svg';
import HomeCleaning from '../../assests/icon_3.svg';
import PestControl from '../../assests/icon_4.svg';

function ServiceItem() {


    return (
 <div >
        <div className="headingaAlign">Explore By Category</div>
                <div className="flex-container">
                    <div style={{display:"flex"}}>               
                    <img src={Logo} alt="logo" className="imageWidth" />
                    <span >Plumbing</span>   
                    </div>

                    <div >
                        <img src={Painting} alt="logo"  className="imageWidth"/>
                        <span>Painting</span>
                    </div>

                    <div >
                        <img src={HomeCleaning} alt="logo" className="imageWidth" />
                        <span>Home Cleaning</span>
                    </div>



                    <div >

                        <img src={PestControl} alt="logo" className="imageWidth" />
                        <span>
                            Pest Control
    </span>
                    </div>
                    </div>
        </div>
    )
}

export default ServiceItem;