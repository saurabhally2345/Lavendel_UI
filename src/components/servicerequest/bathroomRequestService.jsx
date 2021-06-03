import React from 'react';
import './bathroomRequestService.scss';


const Bathroom = () => {

    return <div className="bathroom">
        <div>
            <div>Request Service</div>
            <span>
                Fill up the details below for request a service
            </span>
        </div>

        <div>
            <span>Location</span>
            <div>
                <input placeholder="ITI Layout,Sector 7,HSR Layout " />
            </div>
        </div>

        <div>
            <span>Mobile</span>
            <input placeholder="Enter your mobile no" />

        </div>

        <div>
            <span>Name</span>
            <input placeholder="Enter full Name(e.g Suman Saurabh)" />
        </div>

        <div>
            <span>Select Services</span>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        
        <div>
            <input type="radio" name="bathroom" value="1 Bathroom cleaning Rs 788"/>1 Bathroom cleaning Rs 788<br/>
            <input type="radio" name="bathroom" value="2 Bathroom cleaning Rs 1588"/>2 Bathroom cleaning Rs 1588<br/>
            <input type="radio" name="bathroom" value="3 Bathroom cleaning Rs 2188"/>3 Bathroom cleaning Rs 2188<br/>
        </div>

        <div className="bathroomDate">
           <span>12 Mon</span>
           <span>13 Tuesday</span>
           <span>14 Wednesday</span>
           <span>15 Thrusday</span>
        </div>
        
        <div>
        <span>10:00 AM</span>
           <span>11:00 AM</span>
           <span>12:00  PM</span>
           <span>01:30 PM</span>
           <span>02:00 PM</span>
           <span>02:30 PM</span>
        </div>

        <div className="bathroomButton">
            <span>Submit</span>
        </div>
    </div>
}

export default Bathroom;