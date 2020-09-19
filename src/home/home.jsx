import React from 'react';
import Header from '../reusable_components/header/header';
import  Row from 'react-bootstrap/Row';
import Card from '../reusable_components/card/card';
import DiscountCards from '../reusable_components/DiscountCards/discountCards';
import PriceListComponents from '../priceListComponent/priceListComponet';
import Services from '../services/services';
import SignIn from '../signIN/signIN';

function home() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <DiscountCards />
            </div>
            <hr />
            <div>
                <PriceListComponents />
            </div>
            <hr />
            <div>
                <Services />
            </div>

        </div>
    )
}

export default home;