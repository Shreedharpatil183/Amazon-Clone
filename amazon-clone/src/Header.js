import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import './Header.css'
import { useStatevalue } from './StateProvider'
import { auth } from './firebase'

function Header() {

    const [{basket, user}] = useStatevalue();

    const login = () => {
        if(user){
            auth.signOut();
        }

    }


    return (
        <nav className="header">
            {/* logo on the left -> image */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="">
                </img>
            </Link>
            
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>


            {/* Three links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header_optionLineOne">Hello {user?.email}</span>
    <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        {/* Number of items in basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

                    </div>
                </Link>
            </div>
            {/* Basket icon with number */}

        </nav>
    )
}

export default Header
