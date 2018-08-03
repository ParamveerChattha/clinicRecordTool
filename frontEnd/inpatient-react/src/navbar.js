    import React from 'react';
    import Navbar from 'react-bootstrap/lib/Navbar';
    import {Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap/lib';

    class AppBar extends React.Component{
    constructor(props){
      super(props)
      this.state={}
    }
      render(){
        return(
          <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">Dental clinic</a>
              </Navbar.Brand>
              <Navbar.Toggle/>
            <Navbar.Collapse>
      </Navbar.Collapse>
      </Navbar.Header>
          </Navbar>
          </div>
        )
      }
    }
    export default AppBar
