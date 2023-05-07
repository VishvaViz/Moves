import React from "react";

function Nav(){
    return <React.Fragment>
                <div className="navbar">
                    <ul>
                        <li><a href="./mymoves" ><i className="fa fa-truck-arrow-right"></i>MyMoves</a></li>
                        <li><a href="./myprofile" ><i className=" fa fa-user"></i>My Profile</a></li>
                        <li><a href="./getquote" ><i className="fas fa-calculator"></i>GetQuote</a></li>
                        <li><a href="./logout" ><i className="fa fa-arrow-right circle "></i>Logout</a></li>
                    </ul>
                </div>
    </React.Fragment>
}
export default Nav;