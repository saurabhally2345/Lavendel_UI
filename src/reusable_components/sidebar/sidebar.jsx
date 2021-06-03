import React from 'react';
import Logo from '../../assests/logo_white.png';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';

const SideBar = () =>{

    return <Container fluid>
        <div className="sideBar">
            <div style={{display:"flex",justifyContent:"center",color:"blue"}}>
            <img src={Logo} />
            </div>
          <div className="itemIcon">
          <span style={{paddingRight:"6%"}}><FontAwesomeIcon icon={faHome} /></span> <span style={{fontFamily:"nunito",color:"#8e8686"}}>DashBoard</span>
          </div>
          <div className="itemIcon" style={{justifyContent:"space-between"}}>
            <span style={{paddingLeft:"33%"}}><FontAwesomeIcon icon={faUserEdit} /></span>
          <span style={{fontFamily:"nunito",justifyContent:"flex-start",marginRight:"43%",color:"#8e8686"}}>CRM</span>
          </div>
          <div className="itemIcon" style={{justifyContent:"space-between",backgroundColor:"blue",opacity:"0.6",padding:"3%",marginTop:"6%"}}>
          <span style={{paddingLeft:"33%"}}><FontAwesomeIcon icon={faUserEdit} /></span>
          <span style={{fontFamily:"nuntio",marginRight:"37%",color:"#8e8686"}}> Services</span>
          </div>
          <div className="itemIcon">
          <span style={{fontFamily:"nuntio",fontWeight:"200",color:"#8e8686"}}>Create Services</span>
          </div>
          <div className="itemIcon">
          <span style={{fontFamily:"nuntio",fontWeight:"200",color:"#8e8686"}}>Manage Services</span>
          </div>
          <div className="itemIcon" style={{justifyContent:"space-between"}}>
          <span style={{paddingLeft:"33%"}}><FontAwesomeIcon icon={faUserEdit} /></span>
          <span style={{fontFamily:"nuntio",fontWeight:"200",marginRight:"22%",color:"#8e8686"}}>Onboard Worker</span>
          </div>
          <div className="itemIcon" style={{justifyContent:"space-between"}}>
          <span style={{paddingLeft:"33%"}}><FontAwesomeIcon icon={faUserEdit} /></span>
          <span style={{fontFamily:"nuntio",fontWeight:"200",marginRight:"43%",color:"#8e8686"}}>offers</span>
          </div>

          <div className="itemIcon" style={{justifyContent:"space-between"}}>
          <span style={{paddingLeft:"33%"}}><FontAwesomeIcon icon={faUserEdit} /></span>
          <span style={{fontFamily:"nuntio",fontWeight:"200",marginRight:"40%",color:"#8e8686"}}>Invoice</span>  
          </div>
        </div>
    
</Container>
}


export default SideBar;