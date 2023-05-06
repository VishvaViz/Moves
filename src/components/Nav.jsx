import React from "react";
function Nav(){
    return <React.Fragment>
            {/* <nav > */}
                <div className="navbar">
                    <ul>
                        <li><a href="/mymoves" ><i className="fas fa-shipping-fast"></i>MyMoves</a></li>
                        <li><a href="/myprofile" ><i className=" fa fa-user"></i>My Profile</a></li>
                        <li><a href="/getquote" ><i className="fas fa-calculator"></i>GetQuote</a></li>
                        <li><a href="/logout" >Logout</a></li>
                    </ul>
                </div>
            {/* </nav> */}
    </React.Fragment>
}
export default Nav;