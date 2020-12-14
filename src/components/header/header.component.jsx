import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import logo from '../../assets/pic.jpeg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionDiv, OptionsContainer, OptionLink } from './header.styles';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
        
            <img className='logo' style={{width: 60, height: 60}} src={logo} alt="pic"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                    <OptionDiv className='option' onClick={() => auth.signOut()}> SIGNOUT </OptionDiv>
                ) : (
                    <OptionLink to='/signin'>SIGNIN </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden? null : (<CartDropdown />)
        }
    </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);