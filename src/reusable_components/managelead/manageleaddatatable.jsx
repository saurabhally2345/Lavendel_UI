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
            label: 'Assign To',
            field: 'assignTo',
            // sort: 'asc'
        },
        {
            label: 'Stage',
            field: 'stage',
            sort: 'asc'
        },
        {
            label: 'Source',
            field: 'source',
            sort: 'asc'
        }
    ],

     rows : [
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedataTime': '@mdo',
            'quantity': '2',
            'serviceInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
            < MDBDropdownToggle caret color="white" >
                Maxwell
    </MDBDropdownToggle >
            <MDBDropdownMenu basic>
                <MDBDropdownItem>Action</MDBDropdownItem>
                <MDBDropdownItem>Another Action</MDBDropdownItem>
                <MDBDropdownItem>Something else here</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },{
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
        },
        {
            'id': 1,
            'fullname': 'Suman Saurabh',
            'location': 'white field',
            'servicedateTime': '@mdo',
            'quantity': '2',
            'servicInterested': '2 BHK House Cleaning',
            'assignTo': <MDBDropdown>
                < MDBDropdownToggle caret color="white" >
                    Maxwell
        </MDBDropdownToggle >
                <MDBDropdownMenu basic>
                    <MDBDropdownItem>Action</MDBDropdownItem>
                    <MDBDropdownItem>Another Action</MDBDropdownItem>
                    <MDBDropdownItem>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown >,
            'stage': <MDBBtn color="green" rounded size="sm">Open</MDBBtn>,
            'source': 'Google Ads'
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