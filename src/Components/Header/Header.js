import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Menu from './Menu/Menu';

const Header = () => {
    return (
        <div>
            <Menu></Menu>
            <HeaderTop/>
        </div>
    );
};

export default Header;