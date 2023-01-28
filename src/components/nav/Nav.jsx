import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { NavBarContainer, NavBarWrapper, NavLogo, Menu, MenuItem, IconNav } from './NavBarStyled'
import { FaBars, FaTimes } from 'react-icons/fa';
import "./nav.css"
import logo from "../../assets/images/Ogilvy_new_logo.png"

const Nav = () => {
    const [click, setClick] = useState(false);

    const changeMenu = () =>{
      setClick(!click);
    }

  return (
    <>
    <NavBarContainer className='header'>
   
      <NavBarWrapper>

        <NavLogo>
         <img src={logo} />
        </NavLogo>

        <IconNav onClick={()=>changeMenu()}>
          {
            click ? <FaTimes /> :  <FaBars />
          }
        </IconNav>
      
        <Menu click={click}>
          
          <MenuItem className='navlink'>
            <Link activeClass="active" to={`main`} spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink' onClick={()=>changeMenu()}>HOME</span></Link>
          </MenuItem>
       
          <MenuItem className='navlink'>
            <Link activeClass="active" to={`findYourCourse`} spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink' onClick={()=>changeMenu()}>COURSES</span></Link>
          </MenuItem>
          
          <MenuItem className='navlink'>
            <Link activeClass="active" to={`contain`} spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink'  onClick={()=>changeMenu()}>ABOUT</span></Link>
          </MenuItem>

          <MenuItem className='navlink'>
            <Link activeClass="active" to={`usersThought`}  spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink'  onClick={()=>changeMenu()}>BLOG</span></Link>
          </MenuItem>

          <MenuItem className='navlink'>
            <Link activeClass="active" to={`columnFooter`}  spy={true} smooth={true} offset={-90} duration={900} > <span className='navlink'  onClick={()=>changeMenu()}><button className='signButton'>SIGN IN</button></span></Link>
          </MenuItem>

        
        </Menu>
     
      </NavBarWrapper>
    
    </NavBarContainer>
 
    </>
  )
}

export default Nav