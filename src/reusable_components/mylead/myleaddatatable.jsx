import React from 'react';
import { MDBBtn, MDBDataTable , MDBTableBody, MDBTableHead, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { Form } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './manageleaddatatable.scss';

const TablePage = (props) => {
    const data = {
     columns : [
        {
            label: '#No.',
            field: 'id',
            sort: 'asc'
        },
        {
            label: 'Full Name',
            field: 'fullname',
            sort:'asc'
        
        },
        {
            label: 'Location',
            field: 'location',
            sort: 'asc'
        },
        {
            label: 'Service Date/Time',
            field: 'servicedataTime',
            sort: 'asc'
        },
        {
            label: 'Quantity',
            field: 'quantity',
            sort: 'asc'
        },
        {
            label: 'Service Inerested',
            field: 'serviceInterested',
            sort: 'asc'
        },
        {
            label: 'Stage',
            field: 'stage',
            sort: 'asc'
        },

    ],

     rows : [
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedataTime': '@mdo',
            'quantity': '2',
            'serviceInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm" style={{borderRaduis:"29px"}}><span style={{paddingLeft:"12px"}}>Open</span></MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="orange" rounded size="sm"><span style={{paddingLeft:"7px"}}>Follow-up</span></MDBBtn>,
        },{
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="red" rounded size="sm"><span style={{paddingLeft:"7px"}}>Cancelled</span></MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="yellow" rounded size="sm">Pending</MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
        },
    ]
}
    return (
        <MDBDataTable 
            /* <MDBTableHead columns={columns} />
            <MDBTableBody rows={rows_outline_btn} /> */
            small
            data= {data}
     />
    );
};

export default TablePage;