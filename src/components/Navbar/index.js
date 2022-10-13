import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton,NavButtonLink} from './NavbarElements';
import { animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY>=80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    };

    useEffect(() =>{
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome= () => {
        scroll.scrollToTop();
    };
    return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Dico Designs</NavLogo>
                <MobileIcon onClick={toggle}>
                <FaBars />
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to='/email'>Email</NavButtonLink>
                    </NavButton>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;