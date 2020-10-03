import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png';
import './Header.css';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link to="/home" className="navbar-brand ml-5">
                    <img width="235px" height="156px" src={logo} alt="" />
                </Link>
                <div class="form-group has-search">
                    <i class="fa fa-search"></i>
                    <input type="text" width="230px" class="form-control" placeholder="Search Your Destination.." />
                </div>
                <div className="collapse navbar-collapse " color="white" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item active ml-4">
                            <Link style={{ color: "white", fontSize: "16px", fontWeight: "bold" }} to="/home">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ml-4">
                            <Link style={{ color: "white", fontSize: "16px", fontWeight: "bold" }} color="white" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item ml-4 mr-5">
                            <Link style={{ color: "white", fontSize: "16px", fontWeight: "bold" }} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <button className="btn btn-warning mr-5 my-2 my-sm-0 pl-4 pr-4" type="submit">login</button>
                </div>
            </nav>
        </div>



    );
};

export default Header;