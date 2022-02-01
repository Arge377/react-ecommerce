import React from "react";
import logo from '../../img/logo192.png';
import CartShopIcon from '../../img/cart_purchase_shopping.png'
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";
import NavToggler from "./NavToggler";
import CartWidget from "./CartWidget";


function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavBrand ImgSrc={logo} Width={"24"} Height={"24"} Href={"/#"}/>
                <NavToggler/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-fill nav-justified">
                        <NavItem Icon={CartShopIcon} ClassName={"nav-link active"} Text={"Inicio"} Href={"/#"}/>
                        <NavItem ClassName={"nav-link"} Text={"About"} Href={"/#"}/>
                        <NavItem ClassName={"nav-link"} Text={"Galeria"} Href={"/#"}/>
                    </ul>
                    <CartWidget Icon={CartShopIcon} Width={"30"} Height={"30"} Href={"/#"}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;