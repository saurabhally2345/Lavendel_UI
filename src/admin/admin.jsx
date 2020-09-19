import React,{Component} from 'react';


class Admin extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            adminName :"",
            adminPassword:"",
        }
    }

    render(){
        return(
            <p>Hi Saurabh</p>
        )
    }
}

export default Admin;