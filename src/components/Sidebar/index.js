import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu, SideButtonWrap, SidebarRoute} from './SidebarElements';

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle} >About</SidebarLink>
                <SidebarLink to='discover' onClick={toggle} >Discover</SidebarLink>
                <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
            </SidebarMenu>
            <SideButtonWrap>
                <SidebarRoute to='/email'>Email</SidebarRoute>
            </SideButtonWrap>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;