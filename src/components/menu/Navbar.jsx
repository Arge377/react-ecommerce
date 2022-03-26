import React from "react";
import NavBrand from "./NavBrand";
import NavToggler from "./NavToggler";
import CartWidget from "./CartWidget";
import NavItemDropdown from "./NavItemDropdown";

function Navbar(){
    return (
        <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavBrand/>
                <NavToggler/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-fill nav-justified">
                        <NavItemDropdown NavName={"Categories"}/>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;