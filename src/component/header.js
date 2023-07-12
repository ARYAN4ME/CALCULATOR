import React from 'react';
import {NavItem, Input} from 'reactstrap';
const Header=()=>{
    return(
    <div>
        <div pills className='bg-primary text-light d-flex justify-content-between'  style={{height:"50px,"}}>
        <div className='d-flex m-2 mx-5 gap-5 ' style={{listStyle:"none"}}>
        <NavItem>Logo</NavItem>
        <NavItem>Section1</NavItem>
        <NavItem>Section2</NavItem>
        <NavItem>Section3</NavItem>
        </div>
        <div className='d-flex' >
          <label style={{fontSize:"20px", alignItems:"center",margin:"5px 0"}} for="search">Search</label>
          <Input style={{width:"100%", justifyContent:"end",margin:"5px 30px 5px 10px"}} type='search'name='search' placeholder='Search hear...'></Input>
        </div>
      </div>
    </div>);
}
export default Header;